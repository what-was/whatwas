import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { Form, Link, useLoaderData, useSearchParams } from '@remix-run/react';
import { prisma } from '~/lib/db';
import { requireUserId } from '~/lib/auth';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { Page, PageContent, PageHeader } from '~/components/page';
import { Prisma, ReminderStatus } from '@prisma/client';
import { formatDate } from '~/lib/utils';
import { Badge } from '~/components/ui/badge';
import { Fragment } from 'react';
import { Typography } from '~/components/ui/typography';

type SortField = 'dueDate' | 'createdAt' | 'title';
type SortOrder = 'asc' | 'desc';

const ITEMS_PER_PAGE = 20;

const statusColors: Record<ReminderStatus, string> = {
  PENDING: 'bg-blue-100 text-blue-800',
  COMPLETED: 'bg-green-100 text-green-800',
  SNOOZED: 'bg-yellow-100 text-yellow-800',
};

export async function loader(args: LoaderFunctionArgs) {
  const { userId } = await requireUserId(args);
  const url = new URL(args.request.url);

  // Get filter parameters
  const search = url.searchParams.get('search') || '';
  const status = url.searchParams.get('status') && url.searchParams.get('status') !== 'ALL' ? url.searchParams.get('status') as ReminderStatus : null;
  const sortBy = (url.searchParams.get('sortBy') || 'dueDate') as SortField;
  const order = (url.searchParams.get('order') || 'asc') as SortOrder;
  const isOverdue = url.searchParams.get('isOverdue') === 'true';
  const page = Math.max(1, Number(url.searchParams.get('page')) || 1);

  const now = new Date();

  // Build where clause
  const where: Prisma.ReminderWhereInput = {
    userId,
    ...(search
      ? {
        OR: [
          { title: { contains: search, mode: Prisma.QueryMode.insensitive } },
          { description: { contains: search, mode: Prisma.QueryMode.insensitive } },
        ],
      }
      : {}),
    ...(status ? { status } : {}),
    ...(isOverdue
      ? {
        status: ReminderStatus.PENDING,
        dueDate: { lt: now },
      }
      : {}),
  };

  // Get total count for pagination
  const totalCount = await prisma.reminder.count({ where });
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  // Get paginated reminders
  const reminders = await prisma.reminder.findMany({
    where,
    // include: {
    // contacts: {
    //   include: {
    //     contact: {
    //       select: {
    //         firstName: true,
    //         lastName: true,
    //       }
    //     }
    //   }
    // },
    // },
    orderBy: { [sortBy]: order },
    skip: (page - 1) * ITEMS_PER_PAGE,
    take: ITEMS_PER_PAGE,
  });

  // Get counts for different statuses
  const counts = await prisma.reminder.groupBy({
    by: ['status'],
    where: { userId },
    _count: true,
  });

  const statusCounts = Object.fromEntries(
    counts.map(({ status, _count }) => [status, _count])
  ) as Record<ReminderStatus, number>;

  const overdueCount = await prisma.reminder.count({
    where: {
      userId,
      status: ReminderStatus.PENDING,
      dueDate: { lt: now },
    },
  });

  return json({
    reminders: reminders.map((reminder) => ({
      ...reminder,
      createdAt: reminder.createdAt.toISOString(),
      updatedAt: reminder.updatedAt.toISOString(),
      dueDate: reminder.dueDate.toISOString(),
    })),
    counts: {
      ...statusCounts,
      overdue: overdueCount,
    },
    pagination: {
      currentPage: page,
      totalPages,
      totalItems: totalCount,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    },
  });
}

export default function RemindersList() {
  const { reminders, counts, pagination } = useLoaderData<typeof loader>();
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search') || '';
  const status = searchParams.get('status') as ReminderStatus | null;
  const sortBy = searchParams.get('sortBy') || 'dueDate';
  const order = searchParams.get('order') || 'asc';
  const isOverdue = searchParams.get('isOverdue') === 'true';
  const currentPage = Number(searchParams.get('page')) || 1;

  const updateSort = (field: SortField) => {
    if (sortBy === field) {
      setSearchParams({
        ...Object.fromEntries(searchParams),
        order: order === 'asc' ? 'desc' : 'asc',
      });
    } else {
      setSearchParams({
        ...Object.fromEntries(searchParams),
        sortBy: field,
        order: 'asc',
      });
    }
  };

  const updatePage = (newPage: number) => {
    setSearchParams({
      ...Object.fromEntries(searchParams),
      page: newPage.toString(),
    });
  };

  return (
    <Page>
      <PageHeader title="Reminders" actions={
        <Button asChild variant="outline">
          <Link to="new">Create Reminder</Link>
        </Button>
      } />

      <PageContent>
        <div className="space-y-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            <Form className="flex-1">
              <Input
                type="search"
                name="search"
                placeholder="Search reminders..."
                value={search}
                onChange={(e) =>
                  setSearchParams({ ...Object.fromEntries(searchParams), search: e.target.value, page: '1' })
                }
              />
            </Form>

            <Select
              value={status || ''}
              onValueChange={(value) =>
                setSearchParams({ ...Object.fromEntries(searchParams), status: value, page: '1' })
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All Statuses</SelectItem>
                {Object.entries(ReminderStatus).map(([key, value]) => (
                  <SelectItem key={value} value={value}>
                    {key} ({counts[value] || 0})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              variant={isOverdue ? 'destructive' : 'outline'}
              onClick={() =>
                setSearchParams({
                  ...Object.fromEntries(searchParams),
                  isOverdue: (!isOverdue).toString(),
                  page: '1',
                })
              }
            >
              Overdue ({counts.overdue || 0})
            </Button>
          </div>

          {/* Reminders List */}
          <div className="rounded-md border">
            <div className="grid grid-cols-[1fr,1fr,auto,auto] gap-4 p-4 font-medium border-b">
              <button
                className="flex items-center gap-1 hover:text-primary"
                onClick={() => updateSort('title')}
              >
                Title
                {sortBy === 'title' && (
                  <span>{order === 'asc' ? '↑' : '↓'}</span>
                )}
              </button>
              <div>Contact</div>
              
              <button
                className="flex items-center gap-1 hover:text-primary"
                onClick={() => updateSort('dueDate')}
              >
                Due Date
                {sortBy === 'dueDate' && (
                  <span>{order === 'asc' ? '↑' : '↓'}</span>
                )}
              </button>
              <div>Status</div>
            </div>

            <div className="divide-y">
              {reminders.map((reminder) => {
                const isOverdue =
                  reminder.status === 'PENDING' &&
                  new Date(reminder.dueDate) < new Date();

                return (
                  <div
                    key={reminder.id}
                    className="grid grid-cols-[1fr,1fr,auto,auto] gap-4 p-4 items-center"
                  >
                    <div>
                      <Link
                        to={
                          reminder.contactId
                            ? `/crm/contacts/${reminder.contactId}/reminders/${reminder.id}`
                            : `/crm/reminders/${reminder.id}`
                        }
                        className="font-medium hover:text-primary"
                      >
                        {reminder.title}
                      </Link>
                      {reminder.description && (
                        <Typography variant='muted' size='sm'>
                          {reminder.description}
                        </Typography>
                      )}
                    </div>

                    {reminder.contact && (
                      <div>
                        <Link
                          to={`/crm/contacts/${reminder.contactId}`}
                          className="hover:text-primary"
                        >
                          {reminder.contact.firstName} {reminder.contact.lastName}
                        </Link>
                      </div>
                    )}

                    <div
                      className={
                        isOverdue ? 'text-red-600 font-medium' : undefined
                      }
                    >
                      {formatDate(reminder.dueDate)}
                      {isOverdue && ' (Overdue)'}
                    </div>

                    <Badge className={statusColors[reminder.status]}>
                      {reminder.status}
                    </Badge>
                  </div>
                );
              })}

              {reminders.length === 0 && (
                <div className="p-4 text-center text-muted-foreground">
                  No reminders found
                </div>
              )}
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="flex items-center justify-between border-t p-4">
                <div className="text-sm text-muted-foreground">
                  Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{' '}
                  {Math.min(currentPage * ITEMS_PER_PAGE, pagination.totalItems)} of{' '}
                  {pagination.totalItems} reminders
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updatePage(currentPage - 1)}
                    disabled={!pagination.hasPrevPage}
                  >
                    Previous
                  </Button>
                  <div className="flex items-center gap-2">
                    {Array.from({ length: pagination.totalPages }, (_, i) => i + 1)
                      .filter(
                        (pageNum) =>
                          pageNum === 1 ||
                          pageNum === pagination.totalPages ||
                          Math.abs(pageNum - currentPage) <= 1
                      )
                      .map((pageNum, index, array) => (
                        <Fragment key={pageNum}>
                          {index > 0 && array[index - 1] !== pageNum - 1 && (
                            <span className="text-muted-foreground">...</span>
                          )}
                          <Button
                            variant={pageNum === currentPage ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => updatePage(pageNum)}
                          >
                            {pageNum}
                          </Button>
                        </Fragment>
                      ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updatePage(currentPage + 1)}
                    disabled={!pagination.hasNextPage}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </PageContent>
    </Page>
  );
}