import { Link } from "@remix-run/react";

export default function NoteIndexPage() {
  return (
    <p>
      No budget selected. Select a budget on the left, or{" "}
      <Link to="new" className="text-blue-500 underline">
        create a new budget.
      </Link>
    </p>
  );
}
