import { Fragment, useEffect, useRef, useState } from "react";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  Link,
  Outlet,
  useActionData,
  useLoaderData,
  useOutletContext,
  useParams,
} from "@remix-run/react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import type { Budget, Product, Tag } from "@prisma/client";
import {
  Box,
  Button,
  NumberInput,
  Textarea,
  TextInput,
  Text,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";

import { requireUserId } from "~/session.server";
import { getBudget } from "~/models/budget.server";
import { createExpense } from "~/models/expense.server";
import { getTagsOfUser } from "~/models/tag.server";
import { ModalForm } from "~/components/ModalForm";
import { today } from "~/utils/initialValues";
import { getProductsOfUser } from "~/models/product.server";
import { ProductSummary } from "~/components/ProductSummary";

type LoaderData = {
  budget: Budget;
  tags: Tag[];
  products: Product[];
};

export const loader: LoaderFunction = async (args) => {
  const userId = await requireUserId(args.request);

  if (!args.params.budgetId) {
    return redirect("/budgets");
  }

  const budget = await getBudget({ id: args.params.budgetId, userId });
  if (!budget) {
    return redirect("/budgets");
  }

  const products = await getProductsOfUser({ userId });
  const tags = await getTagsOfUser({ userId });

  return { tags, budget, products };
};

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
    if (typeof name !== "string" || name.length < 1) {
      return json({ errors: { name: "Name is required" } }, { status: 400 });
    }

    const products = formData.getAll("products") as Array<Product["id"]>;
    console.log("products", products);

    const expense = await createExpense({
      name,
      priority: 1,
      description: "",
      products,
      budgetId,
      userId,
    });

    console.log("expense", expense);

    return redirect(`/budgets/${budgetId}`);
  }
};

const TheForm = () => {
  const { budget, tags, products } = useLoaderData<LoaderData>();
  const actionData = useActionData();

  const nameRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (actionData?.errors?.name) {
      nameRef.current?.focus();
    } else if (actionData?.errors?.amount) {
      amountRef.current?.focus();
    }
  }, [actionData]);

  return (
    <>
      <Form method="post">
        <Box className="flex flex-col gap-4">
          {/* TODO: Category */}

          <TextInput
            ref={nameRef}
            error={actionData?.errors?.name}
            name="name"
            label="Name"
            placeholder="Name"
          />
          <Textarea
            name="description"
            label="Description"
            placeholder="Description"
            maxRows={4}
          />
          <DatePicker
            defaultValue={today}
            name="date"
            label="Date"
            placeholder="Expense Date"
          />
          <Box>
            <Text size="sm" color="dimmed" mb={8}>
              Products:
            </Text>
            {products.map((product) => (
              <Fragment key={product.id}>
                <ProductSummary product={product} />
                <input type="hidden" name="products" value={product.id} />
              </Fragment>
            ))}
          </Box>

          <Box className="flex flex-col gap-4">
            <Button
              variant="subtle"
              color="green"
              component={Link}
              to="add-product"
              prefetch="intent"
            >
              {products.length > 0 ? "Add Alternative Product" : "Add Product"}
            </Button>

            <Button type="submit">Add Expense</Button>
          </Box>
        </Box>
      </Form>

      <Outlet context={{ budget }} />
    </>
  );
};

const AddExpensePage = () => {
  const { modal } = useOutletContext<{ modal: boolean }>();
  const { budgetId } = useParams();

  return (
    <>
      {modal ? (
        <ModalForm
          source={`/budgets/${budgetId}`}
          size="lg"
          Form={TheForm}
          title="Add Expense"
          keepOpen
        />
      ) : (
        <TheForm />
      )}
    </>
  );
};

export default AddExpensePage;
