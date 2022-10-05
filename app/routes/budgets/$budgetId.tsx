import type { ActionArgs, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  Link,
  Outlet,
  useCatch,
  useLoaderData,
  useTransition,
} from "@remix-run/react";
import invariant from "tiny-invariant";
import { Button, Title, Text, Paper, Group, Stack, Box } from "@mantine/core";
import dayjs from "dayjs";

import { deleteBudget, getBudget } from "~/models/budget.server";
import { requireUserId } from "~/session.server";
import { BreadcrumbsNavigator } from "~/components/Breadcrumb";
import { currencyFormatter } from "~/utils/helpers";

export async function loader({ request, params }: LoaderArgs) {
  const userId = await requireUserId(request);
  invariant(params.budgetId, "budgetId not found");

  const budget = await getBudget({
    userId,
    id: params.budgetId,
    startDate: dayjs().subtract(1, "month").startOf("month").toDate(),
    endDate: dayjs().subtract(1, "month").endOf("month").toDate(),
  });
  if (!budget) {
    throw new Response("Not Found", { status: 404 });
  }

  return json({ budget });
}

export async function action({ request, params }: ActionArgs) {
  const userId = await requireUserId(request);
  invariant(params.budgetId, "budgetId not found");

  await deleteBudget({ userId, id: params.budgetId });

  return redirect("/budgets");
}

export const meta: MetaFunction<typeof loader> = ({ data, params }) => {
  if (!data) {
    return {
      title: "Invalid budget",
      description: `The budget you are looking for does not exist or you do not have access to it 😔`,
    };
  }

  const { budget } = data;
  return {
    title: budget.name,
  };
};

const Stat = (stat: { title: string; value: string | number }) => {
  return (
    <Paper withBorder p="md" radius="md" key={stat.title}>
      <Group position="apart">
        <Text size="xs" color="dimmed">
          {stat.title}
        </Text>
      </Group>

      <Group align="flex-end" spacing="xs" mt={25}>
        <Text size="lg" weight={500}>
          {stat.value}
        </Text>
        {/* <Text
          color={stat.diff > 0 ? "teal" : "red"}
          size="sm"
          weight={500}
          className={classes.diff}
        >
          <span>{stat.diff}%</span>
          <IconDiff size={16} stroke={1.5} />
        </Text> */}
      </Group>

      <Text size="xs" color="dimmed" mt={7}>
        Compared to previous month
      </Text>
    </Paper>
  );
};

export default function BudgetDetailsPage() {
  const { budget } = useLoaderData<typeof loader>();

  const transition = useTransition();

  const expenses = budget.expenses.reduce((acc, expense) => {
    acc += expense.products.reduce(
      (productSum, product) => productSum + product.price,
      0
    );
    return acc;
  }, 0);

  const incomes = budget.incomes.reduce(
    (acc, income) => acc + income.amount,
    0
  );

  return (
    <>
      <Stack>
        <Group>
          {/* <BreadcrumbsNavigator /> */}
          <Title order={2}>{budget.name}</Title>
          <Group>
            <Button
              variant="subtle"
              color="green"
              component={Link}
              to="add-expense"
              prefetch="intent"
            >
              Add Expense
            </Button>
            <Button
              variant="subtle"
              component={Link}
              to="add-income"
              prefetch="intent"
            >
              Add Income
            </Button>
            <Form method="delete">
              <Button
                type="submit"
                variant="subtle"
                color="red"
                disabled={transition.state === "submitting"}
              >
                {transition.state === "submitting" ? "Deleting..." : "Delete"}
              </Button>
            </Form>
          </Group>
        </Group>

        <Group>
          <Stat
            title="Expense"
            value={currencyFormatter({
              value: expenses,
              currency: budget.currency,
            })}
          />
          <Stat
            title="Income"
            value={currencyFormatter({
              value: incomes,
              currency: budget.currency,
            })}
          />
        </Group>
        <Title order={4}>Expenses</Title>
        <Box>
          {budget.expenses.map((expense) => (
            <Box key={expense.id} mb={8}>
              Name: <Text size="sm">{expense.name}</Text>
              <Title order={5}>Products:</Title>
              {expense.products.map((product) => (
                <Box key={product.id}>
                  <Text size="xs" color="dimmed">
                    {product.name}
                  </Text>
                  <Text
                    variant="link"
                    component="a"
                    href={product.source}
                    size="xs"
                    color="dimmed"
                  >
                    {product.source}
                  </Text>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Stack>
      <Outlet context={{ modal: true }} />
    </>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return <div>An unexpected error occurred: {error.message}</div>;
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <div>Budget not found</div>;
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
