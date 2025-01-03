import { Form } from '@remix-run/react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { Label } from '~/components/ui/label';
import { Switch } from '~/components/ui/switch';
import { HabitFrequency } from '@prisma/client';

export function HabitForm() {
  return (
    <Form method="post" className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Habit Name</Label>
        <Input
          id="name"
          name="name"
          required
          placeholder="e.g., Morning Meditation"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description (Optional)</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Describe your habit..."
          className="h-24"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="frequency">Frequency</Label>
        <Select name="frequency" required defaultValue={HabitFrequency.DAILY}>
          <SelectTrigger>
            <SelectValue placeholder="Select frequency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={HabitFrequency.DAILY}>Daily</SelectItem>
            <SelectItem value={HabitFrequency.WEEKLY}>Weekly</SelectItem>
            <SelectItem value={HabitFrequency.CUSTOM}>Custom</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <Switch id="reminder" name="reminderEnabled" />
        <Label htmlFor="reminder">Enable Reminders</Label>
      </div>

      <div className="space-y-2">
        <Label htmlFor="reminderTime">Reminder Time</Label>
        <Input
          type="time"
          id="reminderTime"
          name="reminderTime"
          className="w-full"
        />
      </div>

      <Button type="submit" className="w-full">
        Create Habit
      </Button>
    </Form>
  );
}