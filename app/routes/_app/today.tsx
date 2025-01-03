import { data } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getAuth } from '@clerk/remix/ssr.server';
// import { Editor } from '~/components/editor';
import type { LoaderFunctionArgs } from '@remix-run/node';
// import type { EditorProps } from '~/components/editor';

export async function loader(args: LoaderFunctionArgs) {
  const user = await getAuth(args);

  if (!user) return data({ user: null }, { status: 401 });

  return data({
    user,
  });
}

export default function Today() {
  // const { user } = useLoaderData<typeof loader>();
  return (
    <>
      {/* <Editor /> */}
    </>
  );
}
