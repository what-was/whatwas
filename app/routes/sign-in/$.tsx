import { useSearchParams } from "@remix-run/react";
import { Center } from "@mantine/core";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import { SignIn } from "@clerk/remix";

export const handle = { hydrate: true };

export const loader: LoaderFunction = async ({ request }) => {
  const { userId } = await getAuth(request);
  if (userId) {
    return redirect("/budgets");
  }

  return {};
};

export const meta: MetaFunction = () => {
  return {
    title: "Login",
  };
};

export default function SignInPage() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/budgets";

  return (
    <Center className="h-full">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        afterSignInUrl={redirectTo}
      />
    </Center>
  );
}
