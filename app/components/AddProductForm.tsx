import type { SelectItem } from "@mantine/core";
import { Select } from "@mantine/core";
import { Loader } from "@mantine/core";
import {
  NumberInput,
  Box,
  Button,
  MultiSelect,
  TextInput,
} from "@mantine/core";
import { IconLink } from "@tabler/icons";
import type { Product, Tag } from "@prisma/client";
import { useCatch, useFetcher, useOutletContext } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

import { getTagsOfUser } from "~/models/tag.server";
import { requireUserId } from "~/session.server";
import { CurrencySelect } from "./Select/Currency";
import { Currency } from "~/utils/constants";
import { useEffect, useState } from "react";
import { useDebounce } from "~/hooks/useDebounce";

export type NewProductProps = Pick<Product, "name" | "source"> & {
  tags: Array<Pick<Tag, "name">>;
};

export interface AddProductFormProps {
  tags?: Array<Pick<Tag, "id" | "name">>;
}

export const loader: LoaderFunction = async (args) => {
  const userId = await requireUserId(args.request);

  const tags = await getTagsOfUser({ userId });
  return json({
    tags,
  });
};

export const AddProductForm = ({ tags }: AddProductFormProps) => {
  const { budget } = useOutletContext<{ budget: any }>();

  const fetcher = useFetcher();
  const urlSearchFetcher = useFetcher();

  const [sourceSearch, setSourceSearch] = useState("");

  const handleCreateTag = (
    query: string
  ): string | SelectItem | null | undefined => {
    if (!query) return;

    fetcher.submit({ name: query }, { method: "post", action: "/api/tags" });

    return query;
  };

  const handleSearchURL = (e: string) => {
    console.log("e", e);
    // setSourceInput(e.target.value);
  };

  return (
    <>
      <fetcher.Form method="post" action="/api/products">
        <fieldset disabled={fetcher.state !== "idle"}>
          <Box
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              gap: theme.spacing.lg,
            })}
          >
            <Select
              name="source"
              label="Item Source"
              description="Website or store where you will buy the item"
              aria-label="Website or store where you will buy the item"
              placeholder="Item Source"
              searchable
              onSearchChange={setSourceSearch}
              searchValue={sourceSearch}
              nothingFound="No options"
              data={[]}
            />
            <TextInput
              name="source"
              label="Item Source"
              description="Website or store where you will buy the item"
              aria-label="Website or store where you will buy the item"
              placeholder="Item Source"
              icon={<IconLink size={16} />}
              error={fetcher.data?.errors?.source}
            />
            {urlSearchFetcher.data && !urlSearchFetcher.data.errors && (
              <Box
                sx={(theme) => ({
                  display: "flex",
                  flexDirection: "column",
                  gap: theme.spacing.md,
                })}
              >
                <TextInput
                  name="name"
                  label="Item Name"
                  description="Name of the item you want to buy"
                  aria-label="Name of the item you want to buy"
                  placeholder="Item Name"
                  value={urlSearchFetcher.data.name}
                  onChange={(e) => e.preventDefault()}
                  icon={<IconLink size={16} />}
                  error={fetcher.data?.errors?.name}
                />
                <NumberInput
                  name="price"
                  label="Item Price"
                  description="Price of the item you want to buy"
                  aria-label="Price of the item you want to buy"
                  placeholder="Item Price"
                  precision={2}
                  value={parseFloat(urlSearchFetcher.data.price)}
                  error={fetcher.data?.errors?.price}
                />
                <CurrencySelect
                  name="currency"
                  placeholder="Currency"
                  label="Currency"
                  aria-label="Currency of the product"
                  defaultValue={
                    urlSearchFetcher.data.currency || budget.currency
                  }
                />
              </Box>
            )}
            {/* <TextInput
              name="name"
              label="Name"
              aria-label="Name of the product"
              placeholder="Product Name"
              error={fetcher.data?.errors?.name}
            />
            <NumberInput
              name="price"
              label="Price"
              aria-label="Price of the product"
              placeholder="Price"
              min={0}
              max={999_999_999}
              error={fetcher.data?.errors?.price}
            />

            <CurrencySelect
              name="currency"
              placeholder="Currency"
              label="Currency"
              aria-label="Currency of the product"
              defaultValue={budget?.currency ?? Currency.TRY}
            /> */}

            <MultiSelect
              name="tags"
              label="Tags"
              placeholder="Select tags: clothes, etc."
              limit={20}
              data={tags?.map((tag) => tag.name) ?? []}
              error={fetcher.data?.errors?.tags}
              getCreateLabel={(query) => `+ Create ${query}`}
              onCreate={handleCreateTag}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                }
              }}
              searchable
              creatable
            />

            <Box className="flex flex-1 justify-between gap-2">
              <Button variant="outline" fullWidth type="submit">
                {fetcher.state === "idle" ? "Add" : "Adding..."}
              </Button>
            </Box>
          </Box>
        </fieldset>
      </fetcher.Form>
    </>
  );
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return <div>An unexpected error occurred: {error.message}</div>;
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <div>Budget not found</div>;
  }

  if (caught.status === 500) {
    console.log("caught", caught);
    return <div>Server error</div>;
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
