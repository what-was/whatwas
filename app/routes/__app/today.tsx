import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getAuth } from '@clerk/remix/ssr.server';
import { Editor } from '~/components/editor';
import type { DataFunctionArgs } from '@remix-run/node';
import type { EditorProps } from '~/components/editor';

interface LoaderData {
  user: any;
  initialValue: EditorProps['initialValue'];
}

export async function loader({ request }: DataFunctionArgs) {
  const user = await getAuth(request);

  if (!user) return json({ user: null }, { status: 401 });

  return json({
    user,
    initialValue: undefined,
  });
}

export default function Today() {
  const { initialValue } = useLoaderData() as LoaderData;
  return (
    <>
      <Editor initialValue={initialValue} />
    </>
  );
}
