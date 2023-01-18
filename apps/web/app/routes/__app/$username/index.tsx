import { getAuth } from '@clerk/remix/ssr.server';
import { Box, Text } from '@chakra-ui/react';
import { json } from '@remix-run/node';
import { useCatch, useLoaderData } from '@remix-run/react';
import { getNotesOfUser } from '~/services/notes/notes.service';
import { getUserFromRequest } from '~/lib/user.server';
import { ErrorFullscreen } from '~/components/error';
import { getSeoMeta } from '~/lib/seo';
import type { Note } from '@prisma/client';
import type { LoaderFunction, MetaFunction } from '@remix-run/node';

export const loader: LoaderFunction = async ({ request, params }) => {
  const { userId } = await getAuth(request);
  if (!userId) return json({ error: 'Invalid userId' }, { status: 404 });

  const requestUsername = params.username;
  if (!requestUsername) return json({ error: 'Invalid user' }, { status: 404 });

  const requestUser = await getUserFromRequest(request);
  if (!requestUser) return json({ error: 'User not found!' }, { status: 404 });

  const limit = params.limit ? parseInt(params.limit) : 10;
  const skip = params.skip ? parseInt(params.skip) : 0;

  const notes = await getNotesOfUser({ userId: requestUser.id, limit, skip });

  return json({ user: requestUser, notes });
};

export let meta: MetaFunction = ({ params }) => {
  let seoMeta = getSeoMeta({
    title: params.username,
  });
  return {
    ...seoMeta,
  };
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
  console.log('error', error);
  return <ErrorFullscreen title={error.name} description={error.message} />;
};

export const CatchBoundary = () => {
  const caught = useCatch();
  return (
    <ErrorFullscreen
      title={'Something went wrong!'}
      description={caught.data.error}
    />
  );
};
