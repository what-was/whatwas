# CRM Feature Implementation Guide

## Overview

The CRM feature enables users to manage personal and professional relationships, set reminders, and track interactions through event tagging. This document outlines the technical implementation details.

## Database Schema

```prisma
// Contact Model
model Contact {
  id          String      @id @default(cuid())
  userId      String      // Foreign key to User
  firstName   String
  lastName    String?
  email       String?
  phone       String?
  socialLinks Json?       // Stores social media profile links
  notes       String?     // Free-text field for additional details
  category    String      // Enum: FAMILY, FRIENDS, COLLEAGUES, CLIENTS, OTHERS
  customCategory String?  // For user-defined categories
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt
  reminders   Reminder[]
  eventTags   EventTag[]

  @@index([userId])
  @@unique([userId, email])
}

// Reminder Model
model Reminder {
  id          String    @id @default(cuid())
  contactId   String    // Foreign key to Contact
  userId      String    // Foreign key to User
  title       String
  description String?
  dueDate     DateTime
  isRecurring Boolean   @default(false)
  frequency   String?   // DAILY, WEEKLY, MONTHLY, YEARLY
  status      String    // PENDING, COMPLETED, SNOOZED
  contact     Contact   @relation(fields: [contactId], references: [id])
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  @@index([userId])
  @@index([contactId])
}

// EventTag Model
model EventTag {
  id          String    @id @default(cuid())
  contactId   String    // Foreign key to Contact
  userId      String    // Foreign key to User
  eventId     String    // Foreign key to Event/Habit
  contact     Contact   @relation(fields: [contactId], references: [id])
  createdAt   DateTime  @default(now())

  @@index([userId])
  @@index([contactId])
  @@index([eventId])
}
```

## API Routes

Following Remix conventions, our routes are organized as resource-based files with loaders and actions:

```typescript
// app/routes/_app.crm._index.tsx
// List all contacts with filters
export async function loader({ request }: LoaderFunctionArgs) {
  // Retrieve contacts with pagination and filters
  return json({ contacts: [] });
}

// app/routes/_app.crm.contacts.$id.tsx
// Get, update, or delete a specific contact
export async function loader({ params }: LoaderFunctionArgs) {
  // Retrieve specific contact
  return json({ contact: {} });
}

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = formData.get('intent');

  switch (intent) {
    case 'update':
      // Update contact information
      return json({ success: true });
    case 'delete':
      // Delete contact and associated data
      return json({ success: true });
    default:
      throw new Error('Invalid intent');
  }
}

// app/routes/_app.crm.contacts.new.tsx
// Create a new contact
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  // Create contact with provided details
  return json({ success: true });
}

// app/routes/_app.crm.reminders._index.tsx
// List all reminders
export async function loader({ request }: LoaderFunctionArgs) {
  // Retrieve reminders with pagination and filters
  return json({ reminders: [] });
}

// app/routes/_app.crm.reminders.new.tsx
// Create a new reminder
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  // Create reminder with contact association
  return json({ success: true });
}

// app/routes/_app.crm.reminders.$id.tsx
// Update reminder details or snooze
export async function loader({ params }: LoaderFunctionArgs) {
  // Retrieve specific reminder
  return json({ reminder: {} });
}

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = formData.get('intent');

  switch (intent) {
    case 'update':
      // Update reminder information
      return json({ success: true });
    case 'snooze':
      // Snooze reminder for specified duration
      return json({ success: true });
    default:
      throw new Error('Invalid intent');
  }
}

// app/routes/_app.crm.event-tags.tsx
// Manage event tags
export async function loader({ request }: LoaderFunctionArgs) {
  // Retrieve event tags with filters
  return json({ eventTags: [] });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = formData.get('intent');

  switch (intent) {
    case 'create':
      // Create event tag association
      return json({ success: true });
    case 'delete':
      // Delete event tag association
      return json({ success: true });
    default:
      throw new Error('Invalid intent');
  }
}
```

### Type Definitions

```typescript
// app/types/crm.ts
interface Contact {
  id: string;
  firstName: string;
  lastName?: string;
  email?: string;
  phone?: string;
  socialLinks?: Record<string, string>;
  notes?: string;
  category: 'FAMILY' | 'FRIENDS' | 'COLLEAGUES' | 'CLIENTS' | 'OTHERS';
  customCategory?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Reminder {
  id: string;
  contactId: string;
  title: string;
  description?: string;
  dueDate: Date;
  isRecurring: boolean;
  frequency?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
  status: 'PENDING' | 'COMPLETED' | 'SNOOZED';
  createdAt: Date;
  updatedAt: Date;
}

interface EventTag {
  id: string;
  contactId: string;
  eventId: string;
  createdAt: Date;
}
```

### Client-Side Data Management

```typescript
// Using Remix hooks for data management
import { useLoaderData, useFetcher } from '@remix-run/react';

// In your components
export function ContactList() {
  const { contacts } = useLoaderData<typeof loader>();
  const fetcher = useFetcher();

  return (
    <div>
      {contacts.map(contact => (
        <div key={contact.id}>
          {/* Contact details */}
          <fetcher.Form method="post">
            <input type="hidden" name="intent" value="delete" />
            <button type="submit">Delete</button>
          </fetcher.Form>
        </div>
      ))}
    </div>
  );
}
```

## Frontend Components

### Key Components Structure

```
app/
├── components/
│   ├── crm/
│   │   ├── contact-form.tsx
│   │   ├── contact-list.tsx
│   │   ├── contact-details.tsx
│   │   ├── reminder-form.tsx
│   │   ├── reminder-list.tsx
│   │   └── event-tag-selector.tsx
│   └── ui/
│       ├── notification.tsx
│       └── timeline.tsx
```

### Routes Structure

```
app/
├── routes/
│   ├── _app/
│   │   └── crm/
│   │       ├── _index.tsx
│   │       ├── contacts.tsx
│   │       ├── contacts.$id.tsx
│   │       ├── reminders.tsx
│   │       └── timeline.tsx
│   └── api/
│       └── crm/
│           ├── contacts.ts
│           ├── reminders.ts
│           └── event-tags.ts
```

## Implementation Guidelines

### Authentication & Authorization

- All CRM routes require authentication
- Implement middleware to verify user access to contacts
- Use role-based access control for shared contacts (future feature)

### Data Validation

- Implement Zod schemas for request validation
- Validate email formats and phone numbers
- Sanitize user input for notes and descriptions

### Performance Optimization

- Implement pagination for contact and reminder lists
- Cache frequently accessed contact data
- Use optimistic updates for better UX

### Error Handling

- Implement proper error boundaries
- Use custom error classes for different scenarios
- Provide meaningful error messages to users

## Notifications

### Implementation

```typescript
// Notification Types
type NotificationType = 'REMINDER' | 'FOLLOW_UP' | 'BIRTHDAY' | 'CUSTOM';

// Notification Service
interface NotificationService {
  send(userId: string, type: NotificationType, data: any): Promise<void>;
  markAsRead(notificationId: string): Promise<void>;
  getUnread(userId: string): Promise<Notification[]>;
}
```

### Delivery Methods

- In-app notifications using WebSocket
- Push notifications via service workers
- Email notifications (optional)

## Testing Strategy

### Unit Tests

- Test individual components and utilities
- Validate form submissions and data handling
- Test notification delivery

### Integration Tests

- Test API endpoints
- Verify database operations
- Test authentication flow

### E2E Tests

- Test complete user flows
- Verify reminder creation and delivery
- Test contact management operations

## Deployment Considerations

- Set up database migrations
- Configure notification services
- Set up monitoring for API endpoints
- Implement error tracking

## Future Enhancements

- AI-powered relationship insights
- Calendar integration (Google, Outlook)
- Bulk contact import/export
- Advanced search and filtering
- Contact sharing and collaboration

## Reminder System

### Overview

The reminder system allows users to create and manage reminders for their contacts. It supports one-time and recurring reminders, with features like snoozing, completion tracking, and overdue notifications.

### Features

- Create one-time and recurring reminders
- Set custom due dates and times
- Multiple reminder frequencies (Daily, Weekly, Monthly, Yearly)
- Reminder status management (Pending, Completed, Snoozed)
- Snooze functionality with customizable durations
- Visual indicators for overdue reminders
- Full CRUD operations

### Implementation Details

#### Routes Structure

```
app/routes/_app.crm/
├── contacts.$id.reminders.new.tsx      # Create new reminder
├── contacts.$id.reminders.$reminderId.tsx  # View/Edit reminder
└── contacts.$id._index.tsx             # List contact's reminders
```

#### Reminder States

```typescript
enum ReminderStatus {
  PENDING
  COMPLETED
  SNOOZED
}

enum ReminderFrequency {
  DAILY
  WEEKLY
  MONTHLY
  YEARLY
}
```

#### Creating Reminders

The new reminder form (`contacts.$id.reminders.new.tsx`) includes:
- Title and description fields
- DateTime picker for due date
- Recurring reminder toggle
- Frequency selection for recurring reminders
- Form validation using Zod

```typescript
const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  dueDate: z.string().min(1, 'Due date is required'),
  isRecurring: z.enum(['true', 'false']).transform((val) => val === 'true'),
  frequency: z.nativeEnum(ReminderFrequency).optional(),
});
```

#### Managing Reminders

The reminder details view (`contacts.$id.reminders.$reminderId.tsx`) provides:

1. Status Display
   - Visual status banner (color-coded)
   - Overdue indicator
   - Due date information

2. Quick Actions
   - Mark as complete
   - Snooze with durations:
     - 1 hour
     - 3 hours
     - 1 day
     - 3 days
     - 1 week
   - Delete reminder

3. Edit Functionality
   - Update all reminder fields
   - Toggle recurring status
   - Change frequency
   - Modify due date

#### Code Examples

**Creating a Reminder:**
```typescript
await prisma.reminder.create({
  data: {
    title,
    description,
    dueDate: new Date(dueDate),
    isRecurring,
    frequency: isRecurring ? frequency : null,
    status: ReminderStatus.PENDING,
    userId,
    contactId,
  },
});
```

**Snoozing a Reminder:**
```typescript
await prisma.reminder.update({
  where: { id: reminderId },
  data: {
    dueDate: newDueDate,
    status: ReminderStatus.SNOOZED,
  },
});
```

**Completing a Reminder:**
```typescript
await prisma.reminder.update({
  where: { id: reminderId },
  data: {
    status: ReminderStatus.COMPLETED,
  },
});
```

### UI Components

1. Status Banner
```tsx
<div
  className={`p-4 rounded-lg ${
    isOverdue
      ? 'bg-red-50 text-red-800'
      : reminder.status === ReminderStatus.COMPLETED
      ? 'bg-green-50 text-green-800'
      : reminder.status === ReminderStatus.SNOOZED
      ? 'bg-yellow-50 text-yellow-800'
      : 'bg-blue-50 text-blue-800'
  }`}
>
  <p className="font-medium">
    Status: {reminder.status}
    {isOverdue && ' (OVERDUE)'}
  </p>
  <p className="text-sm mt-1">
    Due: {formatDate(reminder.dueDate)}
  </p>
</div>
```

2. Quick Actions
```tsx
<div className="flex gap-4">
  <Form method="post">
    <input type="hidden" name="_action" value="complete" />
    <Button type="submit" variant="outline">
      Mark as Complete
    </Button>
  </Form>

  <Form method="post" className="flex gap-2">
    <input type="hidden" name="_action" value="snooze" />
    <Select name="snoozeDuration">
      <SelectContent>
        <SelectItem value="1">1 hour</SelectItem>
        <SelectItem value="24">1 day</SelectItem>
        <SelectItem value="168">1 week</SelectItem>
      </SelectContent>
    </Select>
    <Button type="submit" variant="outline">
      Snooze
    </Button>
  </Form>
</div>
```

### Best Practices

1. **Validation**
   - Always validate reminder dates to ensure they're in the future
   - Require title for all reminders
   - Validate frequency when reminder is recurring

2. **Status Management**
   - Automatically detect overdue reminders
   - Clear status transitions (Pending → Completed/Snoozed)
   - Preserve reminder history

3. **User Experience**
   - Provide quick actions for common operations
   - Visual feedback for reminder status
   - Intuitive date/time selection
   - Responsive design for all screens

4. **Performance**
   - Optimize queries with proper indexes
   - Use pagination for reminder lists
   - Efficient status updates

### Future Enhancements

1. **Notification System**
   - Email notifications for upcoming reminders
   - Push notifications for web/mobile
   - Customizable notification preferences

2. **Advanced Recurring Options**
   - Custom recurrence patterns
   - End date for recurring reminders
   - Skip specific occurrences

3. **Batch Operations**
   - Bulk complete/delete reminders
   - Batch update reminder settings
   - Export reminder data

4. **Integration**
   - Calendar integration (Google Calendar, iCal)
   - Mobile app notifications
   - Third-party reminder services

### Reminders List View

The reminders list view (`_app.crm.reminders._index.tsx`) provides a comprehensive interface for managing all reminders across contacts.

#### Features

1. **Advanced Filtering**
   - Full-text search across title and description
   - Filter by status (Pending, Completed, Snoozed)
   - Quick filter for overdue reminders
   - Status counts with dynamic updates

2. **Sorting Capabilities**
   - Sort by title (alphabetically)
   - Sort by due date
   - Toggle ascending/descending order

3. **Status Visualization**
   - Color-coded status badges
   - Visual indicators for overdue reminders
   - Status counts in filter dropdown

#### Implementation

**Status Colors:**
```typescript
const statusColors: Record<ReminderStatus, string> = {
  PENDING: 'bg-blue-100 text-blue-800',
  COMPLETED: 'bg-green-100 text-green-800',
  SNOOZED: 'bg-yellow-100 text-yellow-800',
};
```

**Filter and Sort Types:**
```typescript
type SortField = 'dueDate' | 'createdAt' | 'title';
type SortOrder = 'asc' | 'desc';
```

**Query Building:**
```typescript
const reminders = await prisma.reminder.findMany({
  where: {
    userId,
    ...(search
      ? {
          OR: [
            { title: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
          ],
        }
      : {}),
    ...(status ? { status } : {}),
    ...(isOverdue
      ? {
          status: 'PENDING',
          dueDate: { lt: now },
        }
      : {}),
  },
  include: {
    contact: {
      select: {
        id: true,
        firstName: true,
        lastName: true,
      },
    },
  },
  orderBy: { [sortBy]: order },
});
```

**Status Counts:**
```typescript
const counts = await prisma.reminder.groupBy({
  by: ['status'],
  where: { userId },
  _count: true,
});

const overdueCount = await prisma.reminder.count({
  where: {
    userId,
    status: 'PENDING',
    dueDate: { lt: now },
  },
});
```

#### URL Parameters

The view uses URL search parameters for maintaining filter and sort state:
- `search`: Search query string
- `status`: Current status filter
- `sortBy`: Field to sort by
- `order`: Sort order (asc/desc)
- `isOverdue`: Whether to show only overdue reminders

#### UI Components

1. **Filter Bar**
```tsx
<div className="flex flex-wrap gap-4">
  <Form className="flex-1">
    <Input
      type="search"
      name="search"
      placeholder="Search reminders..."
      value={search}
      onChange={(e) => setSearchParams({ ...params, search: e.target.value })}
    />
  </Form>

  <Select
    value={status || ''}
    onValueChange={(value) => setSearchParams({ ...params, status: value })}
  >
    <SelectContent>
      <SelectItem value="">All Statuses</SelectItem>
      {Object.entries(ReminderStatus).map(([key, value]) => (
        <SelectItem key={value} value={value}>
          {key} ({counts[value] || 0})
        </SelectItem>
      ))}
    </SelectContent>
  </Select>

  <Button
    variant={isOverdue ? 'destructive' : 'outline'}
    onClick={() => setSearchParams({ ...params, isOverdue: (!isOverdue).toString() })}
  >
    Overdue ({counts.overdue || 0})
  </Button>
</div>
```

2. **Sortable Headers**
```tsx
<div className="grid grid-cols-[1fr,1fr,auto,auto] gap-4">
  <button
    className="flex items-center gap-1 hover:text-primary"
    onClick={() => updateSort('title')}
  >
    Title
    {sortBy === 'title' && <span>{order === 'asc' ? '↑' : '↓'}</span>}
  </button>
  {/* ... other headers */}
</div>
```

#### Best Practices

1. **Performance**
   - Use compound indexes for frequent queries
   - Implement pagination for large lists
   - Optimize status count queries

2. **User Experience**
   - Preserve filter/sort state in URL
   - Provide visual feedback for active filters
   - Show empty states with clear messages

3. **Accessibility**
   - Proper ARIA labels for interactive elements
   - Keyboard navigation support
   - Clear visual hierarchy

4. **State Management**
   - URL-based state for shareable filters
   - Optimistic UI updates
   - Clear filter reset options

#### Future Enhancements

1. **Advanced Filtering**
   - Date range filters
   - Multiple status selection
   - Contact-based filtering
   - Custom filter presets

2. **Bulk Actions**
   - Multi-select reminders
   - Batch status updates
   - Bulk delete operations

3. **View Options**
   - Calendar view
   - Timeline view
   - Kanban board view

4. **Export/Import**
   - Export filtered results
   - Import reminders from external sources
   - Reminder templates

#### Pagination Implementation

The reminders list view implements server-side pagination with the following features:

1. **Configuration**
```typescript
const ITEMS_PER_PAGE = 20;
```

2. **Pagination Data Structure**
```typescript
interface PaginationData {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}
```

3. **Query Parameters**
- `page`: Current page number (defaults to 1)
- Preserves other filter parameters across pagination
- Resets to page 1 when filters change

4. **Server-Side Implementation**
```typescript
// Calculate pagination
const totalCount = await prisma.reminder.count({ where });
const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
const page = Math.max(1, Number(url.searchParams.get('page')) || 1);

// Get paginated data
const reminders = await prisma.reminder.findMany({
  where,
  // ... other options ...
  skip: (page - 1) * ITEMS_PER_PAGE,
  take: ITEMS_PER_PAGE,
});

return json({
  reminders,
  pagination: {
    currentPage: page,
    totalPages,
    totalItems: totalCount,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  },
});
```

5. **UI Components**

The pagination UI includes:
- Previous/Next buttons
- Page numbers with ellipsis for large ranges
- Current page indicator
- Item count display

```tsx
{pagination.totalPages > 1 && (
  <div className="flex items-center justify-between border-t p-4">
    {/* Items count */}
    <div className="text-sm text-muted-foreground">
      Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{' '}
      {Math.min(currentPage * ITEMS_PER_PAGE, pagination.totalItems)} of{' '}
      {pagination.totalItems} reminders
    </div>

    {/* Navigation */}
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => updatePage(currentPage - 1)}
        disabled={!pagination.hasPrevPage}
      >
        Previous
      </Button>

      {/* Page numbers */}
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
                <span>...</span>
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
```

6. **State Management**
```typescript
const updatePage = (newPage: number) => {
  setSearchParams({
    ...Object.fromEntries(searchParams),
    page: newPage.toString(),
  });
};
```

7. **Filter Integration**
```typescript
// Reset to page 1 when filters change
setSearchParams({
  ...Object.fromEntries(searchParams),
  search: newValue,
  page: '1',
});
```

#### Best Practices

1. **Performance**
   - Use `COUNT` queries efficiently
   - Index frequently filtered columns
   - Cache pagination metadata when possible

2. **User Experience**
   - Preserve filter state across pagination
   - Show loading states during transitions
   - Maintain scroll position when possible
   - Clear visual feedback for current page

3. **Accessibility**
   - Keyboard navigation support
   - ARIA labels for navigation
   - Clear visual hierarchy
   - Focus management

4. **Error Handling**
   - Validate page numbers
   - Handle out-of-range pages
   - Graceful fallback for invalid input

#### Future Enhancements

1. **Advanced Features**
   - Custom page size selection
   - Jump to page input
   - Infinite scroll option
   - Remember page size preference

2. **Performance Optimizations**
   - Virtual scrolling for large lists
   - Prefetch adjacent pages
   - Optimistic UI updates
   - Background pagination metadata updates

3. **UI Improvements**
   - Responsive pagination controls
   - Custom pagination layouts
   - Animation between pages
   - Loading skeletons