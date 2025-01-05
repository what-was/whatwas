import { Link } from '@remix-run/react';
import { Contact, ContactCategory } from '@prisma/client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { formatDate } from '~/lib/utils';
import { MaybeJsonified } from '~/types';

interface ContactListProps {
  contacts: MaybeJsonified<Contact>[];
}

const categoryColors: Record<ContactCategory, string> = {
  FAMILY: 'bg-red-100 text-red-800',
  FRIENDS: 'bg-blue-100 text-blue-800',
  COLLEAGUES: 'bg-green-100 text-green-800',
  CLIENTS: 'bg-purple-100 text-purple-800',
  OTHERS: 'bg-gray-100 text-gray-800',
};

export function ContactList({ contacts }: ContactListProps) {
  if (contacts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 mb-4">No contacts found</p>
        <Button asChild>
          <Link to="contacts/new">Add Your First Contact</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {contacts.map((contact) => (
        <Card key={contact.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>
                  {contact.firstName} {contact.lastName}
                </CardTitle>
                <CardDescription>{contact.email}</CardDescription>
              </div>
              <Badge className={categoryColors[contact.category]}>
                {contact.category}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {contact.phone && (
                <p className="text-sm text-gray-500">📱 {contact.phone}</p>
              )}
              {contact.notes && (
                <p className="text-sm text-gray-500">📝 {contact.notes}</p>
              )}
              <p className="text-xs text-gray-400">
                Last updated {formatDate(contact.updatedAt)}
              </p>
              <div className="flex gap-2 mt-4">
                <Button asChild variant="outline" size="sm">
                  <Link to={`contacts/${contact.id}`}>View Details</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to={`contacts/${contact.id}/edit`}>Edit</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}