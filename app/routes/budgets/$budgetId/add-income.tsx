import { useEffect, useRef, useState } from "react";
import { Button, Modal, NumberInput, TextInput } from "@mantine/core";
import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useFetcher, useNavigate, useOutletContext } from "@remix-run/react";
import { getBudget } from "~/models/budget.server";
import { createIncome } from "~/models/income.server";
import { requireUserId } from "~/session.server";
import { DatePicker } from "@mantine/dates";
import dayjs from "dayjs";
import { ModalForm } from "~/components/ModalForm";

export const action: ActionFunction = async ({ request, params }) => {
  const currentPath = new URL(request.url).pathname;
  const userId = await requireUserId(request, currentPath);
  const { budgetId } = params;
  if (!budgetId) {
    return redirect("/budgets");
  }

  if (request.method === "POST") {
    const budget = await getBudget({ id: budgetId, userId });
    if (!budget) {
      return redirect("/budgets");
    }

    const formData = await request.formData();

    const name = formData.get("name");
    if (typeof name !== "string" || name.length < 4) {
      return json({ errors: { name: "Name is required" } }, { status: 400 });
    }

    const dueDate = dayjs(formData.get("dueDate") as string).toDate();

    const amount = parseInt(formData.get("amount") as string, 10) || 0;
    if (amount <= 0) {
      return json(
        { errors: { amount: "Amount is required" } },
        { status: 400 }
      );
    }

    try {
      await createIncome({
        name,
        amount,
        budgetId,
        userId,
        dueDate,
        currency: budget.currency,
      });

      return redirect(`/budgets/${budgetId}`);
    } catch (error: any) {
      return json({ errors: { name: error.message } }, { status: 400 });
    }
  }
};

const TheForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);

  const fetcher = useFetcher();

  useEffect(() => {
    if (fetcher.data?.errors?.name) {
      nameRef.current?.focus();
    } else if (fetcher.data?.errors?.amount) {
      amountRef.current?.focus();
    }
  }, [fetcher.data?.errors?.amount, fetcher.data?.errors?.name]);

  return (
    <fetcher.Form method="post">
      <TextInput
        ref={nameRef}
        error={fetcher.data?.errors?.name}
        name="name"
        label="Name"
      />
      <DatePicker name="dueDate" label="Date" defaultValue={new Date()} />
      <NumberInput
        ref={amountRef}
        error={fetcher.data?.errors?.amount}
        name="amount"
        label="Amount"
        min={0}
      />
      <Button type="submit">
        {fetcher.state === "submitting" ? "Adding..." : "Add Income"}
      </Button>
    </fetcher.Form>
  );
};

const AddIncomePage = () => {
  const { modal } = useOutletContext<{ modal: boolean }>();

  return (
    <>{modal ? <ModalForm Form={TheForm} title="Add Income" /> : <TheForm />}</>
  );
};

export default AddIncomePage;
