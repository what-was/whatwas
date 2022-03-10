import { LoaderFunction, json, redirect } from 'remix';

import { authenticated } from '~/utils/authenticated';

export const loader: LoaderFunction = async ({ request }) => {
  return authenticated(request, ({ user }) => {
    try {
      if (user) {
        return redirect('notes');
      }

      throw new Error('User not authenticated');
    } catch (error) {
      return json({ error });
    }
  });
};

export default function Index() {
  return <div>Landing</div>;
}
