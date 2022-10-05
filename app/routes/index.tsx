import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/remix";

export default function Index() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
        textAlign: "center",
      }}
    >
      <h1>Hello Clerk!</h1>
      <>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
      </>
    </div>
  );
}
