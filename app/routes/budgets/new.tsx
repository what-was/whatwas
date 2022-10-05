import { useEffect, useRef } from "react";
import { Box, Button, Select, TextInput, Title } from "@mantine/core";
import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useCatch, useTransition } from "@remix-run/react";
import { IconCash } from "@tabler/icons";

import { createBudget } from "~/models/budget.server";
import { requireUserId } from "~/session.server";

export async function action({ request }: ActionArgs) {
  const userId = await requireUserId(request);

  const formData = await request.formData();
  const name = formData.get("name");
  const currency = formData.get("currency");

  if (typeof name !== "string" || name.length < 4) {
    return json(
      { errors: { name: "Name is required", currency: null } },
      { status: 400 }
    );
  }

  if (typeof currency !== "string" || currency.length === 0) {
    return json(
      { errors: { currency: "Currency is required", name: null } },
      { status: 400 }
    );
  }

  const budget = await createBudget({ name, currency, userId });

  return redirect(`/budgets/${budget.id}`);
}

export default function NewBudgetPage() {
  const transition = useTransition();
  const actionData = useActionData<typeof action>();

  const nameRef = useRef<HTMLInputElement>(null);
  const currencyRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (actionData?.errors?.name) {
      nameRef.current?.focus();
    } else if (actionData?.errors?.currency) {
      currencyRef.current?.focus();
    }
  }, [actionData]);

  return (
    <>
      <Title order={3} my={16}>
        Create a Budget
      </Title>
      <Form method="post">
        <fieldset
          disabled={transition.state === "submitting"}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <TextInput
            name="name"
            label="Name"
            placeholder="My Budget"
            error={actionData?.errors?.name}
            ref={nameRef}
            withAsterisk
            required
          />

          <Select
            name="currency"
            label="Currency"
            placeholder="Select a currency"
            defaultValue={actionData?.errors?.currency ? "" : "EUR"}
            data={["USD", "EUR", "GBP", "AUD", "CAD", "TRY"]}
            error={actionData?.errors?.name}
            icon={<IconCash size={16} />}
          />

          <Box className="text-right">
            <Button variant="outline" type="submit" mt={8}>
              {transition.state === "submitting" ? "Saving..." : "Save"}
            </Button>
          </Box>
        </fieldset>
      </Form>
    </>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return <div>An unexpected error occurred: {error.message}</div>;
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <div>Budget not found</div>;
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
