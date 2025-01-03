# whatwas.app

## Project Overview

You are building a user-friendly and intuitive habit tracker app designed to help individuals monitor, build, and sustain positive habits over time.

You are using Remix, Clerk, PostgreSQL, Prisma, TailwindCSS, and Shadcn/UI.

## Core Features

### 1. Habit Creation and Customization

#### 1.1 Create habits with customizable names, descriptions, and schedules

- **Display**: A form to create a new habit with a name, description, and frequency.
- **Behavior**: The form should be validated and the habit should be created in the database.
- **Components**: `app/components/habit-form.tsx`
- **Routes**: `app/routes/habits/new.tsx`
- **Database**: `app/lib/db.ts`

#### 1.2 Define habit frequency (daily, weekly, custom intervals)

- **Display**: A dropdown to select the frequency of the habit.
- **Behavior**: The frequency should be validated and the habit should be created in the database.
- **Components**: `app/components/habit-form.tsx`
- **Routes**: `app/routes/habits/new.tsx`
- **Database**: `app/lib/db.ts`

#### 1.3 Set reminders and notifications to encourage consistency

- **Display**: A checkbox to set reminders and notifications.
- **Behavior**: The reminder and notification should be set in the database.
- **Components**: `app/components/habit-form.tsx`
- **Routes**: `app/routes/habits/new.tsx`
- **Database**: `app/lib/db.ts`

### 2. Progress Tracking

#### 2.1 Visualize progress through dynamic charts and graphs

- **Display**: A chart to visualize the progress of the habit.
- **Behavior**: The chart should be updated with the progress of the habit.
- **Components**: `app/components/habit-chart.tsx`
- **Routes**: `app/routes/habits/index.tsx`
- **Database**: `app/lib/db.ts`

#### 2.2 View daily, weekly, and monthly performance summaries

- **Display**: A table to view the performance of the habit.
- **Behavior**: The table should be updated with the performance of the habit.
- **Components**: `app/components/habit-table.tsx`
- **Routes**: `app/routes/habits/index.tsx`
- **Database**: `app/lib/db.ts`

#### 2.3 Highlight streaks and milestones for added motivation

### 3. Gamification

#### 3.1 Reward system with badges and achievements for habit consistency

- **Display**: A table to view the streaks and milestones of the habit.
- **Behavior**: The table should be updated with the streaks and milestones of the habit.
- **Components**: `app/components/habit-table.tsx`
- **Routes**: `app/routes/habits/index.tsx`
- **Database**: `app/lib/db.ts`

#### 3.2 Daily and weekly challenges to encourage engagement

### 4. Analytics and Insights

#### 4.1 Access detailed analytics reports on habit completion rates, streaks, and patterns

#### 4.2 Receive personalized recommendations for habit improvement

- **Routes**: `app/routes/habits/index.tsx`
- **Database**: `app/lib/db.ts`

### 5. Social Sharing

#### 5.1 Share progress with friends and family

- **Display**: A table to view the streaks and milestones of the habit.
- **Behavior**: The table should be updated with the streaks and milestones of the habit.
- **Components**: `app/components/habit-table.tsx`
- **Routes**: `app/routes/habits/index.tsx`
- **Database**: `app/lib/db.ts`

#### 5.2 Join and create habit challenges with others

- **Display**: A table to view the streaks and milestones of the habit.
- **Behavior**: The table should be updated with the streaks and milestones of the habit.
- **Components**: `app/components/habit-table.tsx`
- **Routes**: `app/routes/habits/index.tsx`
- **Database**: `app/lib/db.ts`

### 6. Privacy and Security

#### 6.1 Strong data encryption to ensure user privacy

- **Display**: A table to view the streaks and milestones of the habit.
- **Behavior**: The table should be updated with the streaks and milestones of the habit.
- **Components**: `app/components/habit-table.tsx`
- **Routes**: `app/routes/habits/index.tsx`
- **Database**: `app/lib/db.ts`

#### 6.2 Customizable privacy settings for sharing and data visibility

## Tech Stack

- Remix
- Clerk
- PostgreSQL
- Prisma
- TailwindCSS
- shadcn/ui

## Project Structure

- `app/components/`
- `app/lib/`
- `app/routes/`
- `app/styles/`
- `app/types/`
- `app/shared/`
- `app/hooks/`
