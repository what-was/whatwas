# Product Requirements Document (PRD): CRM for Managing Relations, Setting Reminders, and Tagging to Events

## 1. Introduction

The CRM module in WhatWas is designed to help users manage personal and professional relationships efficiently. By allowing users to set reminders, tag people to specific events, and keep track of important interactions, the CRM will serve as a powerful tool for building and maintaining meaningful connections.

## 2. Goals

- Enable users to create and manage contact profiles with detailed information.
- Allow users to set relationship-based reminders for follow-ups, special occasions, or routine check-ins.
- Provide tagging functionality to associate contacts with specific events or habits.
- Offer a simple and intuitive UI for viewing and managing relationship timelines.

## 3. Features

### 3.1 Contact Management

- Add/Edit/Delete Contact Profiles

Fields include:

- Name (First, Last)
- Contact Information (Phone, Email, Social Profiles)
- Notes (free-text field for additional details)
- Import contacts from phone or email account (optional feature for later releases).
- Relationship Categories

Predefined categories: Family, Friends, Colleagues, Clients, Others.
Custom category creation by users.

### 3.2 Reminders for Relationships

Create Reminders

Types of reminders:

- One-time reminders (e.g., birthdays, anniversaries).
- Recurring reminders (e.g., weekly check-ins, monthly reviews).

Reminder notifications delivered via:

- In-app notifications
- Push notifications (mobile)
- Email (optional)

Snooze or Reschedule Reminders

- Allow users to snooze a reminder or reschedule it to a more convenient time.

### 3.3 Event Tagging

- Tag Contacts to Events

Users can tag one or more contacts to specific events or habits (e.g., “Meeting with John tagged to the ‘Weekly Sync’ habit”).
Tagged events appear in the contact’s timeline.

### 3.4 Event History View

Display a chronological timeline of all interactions with a contact, including:

- Tagged events
- Completed reminders
- Notes or updates.

### 3.5 Search and Filtering

- Search by Name, Category, or Tag
- Quickly find contacts by typing their name or category.
- Filter by Upcoming Reminders
  - Show only contacts with upcoming reminders within a selected date range.

### 3.6 Notifications and Alerts

- Upcoming Reminders Alerts
  - Notify users of reminders 24 hours in advance and again at the scheduled time.
- Missed Reminder Alerts
  - Notify users of missed reminders and allow rescheduling.

## 4. Non-Functional Requirements

- Performance: The CRM should handle up to 10,000 contact profiles without performance degradation.
- Scalability: The module should support future integration with third-party CRM platforms.
- Security: Ensure data privacy through encryption and offer optional two-factor authentication for sensitive information.
- Cross-Platform: The CRM should work seamlessly on both mobile and web versions of the app.

## 5. User Stories

As a user, I want to create detailed profiles for my contacts, so I can store relevant information about them.
As a user, I want to set reminders for contacts, so I don't forget important dates or follow-ups.
As a user, I want to tag contacts to events, so I can track my interactions with them over time.
As a user, I want to view a timeline of all my interactions with a contact, so I can keep track of our relationship history.
As a user, I want to receive notifications for reminders, so I can take timely actions.

## 6. Design Considerations

- User Interface:
  - Clean and minimalistic design.
  - Focus on easy navigation between contacts, reminders, and events.
- Accessibility:
  - Ensure the app is usable with screen readers.
  - Support multiple languages for contact input and display.

## 7. Metrics for Success

- Increase in user engagement with the CRM feature (measured by number of reminders set, contacts added, and events tagged).
- High user satisfaction score (>4.5) for the CRM feature in app reviews and feedback.
- Retention rate improvement among users actively using the CRM module.

## 8. Future Scope

- Integration with external calendars (Google Calendar, Outlook) for syncing reminders.
- Smart suggestions for follow-ups based on past interactions.
- Contact import/export options (CSV, VCF).
- AI-driven insights for relationship management (e.g., "You haven't followed up with X in a while").
