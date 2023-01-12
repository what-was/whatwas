import { getAuth } from '@clerk/remix/ssr.server';
import { Box, Text } from '@chakra-ui/react';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getNotesOfUser } from '~/services/notes/notes.service';
import { getUserByUsername } from '~/services/user/user.server';
import { ErrorFullscreen } from '~/components/error';
import type { Note } from '@prisma/client';
import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async ({ request, params }) => {
  const { userId } = await getAuth(request);
  if (!userId) return json({ error: 'Invalid userId' }, { status: 404 });

  const requestUsername = params.username;
  if (!requestUsername) return json({ error: 'Invalid user' }, { status: 404 });

  const requestUser = await getUserByUsername(requestUsername);

  if (!requestUser) return json({ error: 'User not found!' }, { status: 404 });
  if (requestUser.id !== userId) {
    return json({ error: 'Unauthorized' }, { status: 401 });
  }

  const limit = params.limit ? parseInt(params.limit) : 10;
  const skip = params.skip ? parseInt(params.skip) : 0;

  const notes = await getNotesOfUser({ userId: requestUser.id, limit, skip });

  return json({ notes });
};

export default function UserProfilePage() {
  const { notes } = useLoaderData<typeof loader>();
  const { userId } = useLoaderData<typeof loader>();
  return (
    <Box>
      <Text>{userId}</Text>

      {notes.map((note: Note) => (
        <Text key={note.id}>{note.content}</Text>
      ))}
    </Box>
  );
}

export const ErrorBoundary = ({ error }: { error: Error }) => {
  return <ErrorFullscreen title={error.name} description={error.message} />;
};
