import { SignUp } from "@clerk/remix";
import { Center } from "@mantine/core";

export const handle = { hydrate: true };

export default function SignUpPage() {
  return (
    <Center className="h-full">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </Center>
  );
}
