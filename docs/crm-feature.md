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