import { data } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getEventsOfUser } from '~/services/events/events.service';
import { getUserFromRequest } from '~/lib/auth';
import type { Event } from '@prisma/client';
import type { LoaderFunction, MetaFunction } from '@remix-run/node';

export const loader: LoaderFunction = async (args) => {
  const user = await getUserFromRequest(args);
  const requestUsername = args.params.username;
  if (!requestUsername) return data({ error: 'Invalid user' }, { status: 404 });

  const requestUser = await getUserFromRequest(args);
  if (!requestUser) return data({ error: 'User not found!' }, { status: 404 });

  const limit = args.params.limit ? parseInt(args.params.limit) : 10;
  const skip = args.params.skip ? parseInt(args.params.skip) : 0;

  const events = await getEventsOfUser({ userId: requestUser.id, limit, skip });

  return data({ user: requestUser, events });
};

export const meta: MetaFunction = ({ params }) => {

  return [
  ];
};

export default function UserProfilePage() {
  const { events } = useLoaderData<typeof loader>();
  const { userId } = useLoaderData<typeof loader>();
  return (
    <div>

      <p>{userId}</p>

      {events.map((event: Event) => (
        <p key={event.id}>{event.id}</p>
      ))}
    </div>
  );
}

// export const ErrorBoundary = ({ error }: { error: Error }) => {
//   console.log('error', error);
//   return <ErrorFullscreen title={error.name} description={error.message} />;
// };

// export const CatchBoundary = () => {
//   const caught = useCatch();
//   return (
//     <ErrorFullscreen
//       title={'Something went wrong!'}
//       description={caught.data.error}
//     />
//   );
// };
