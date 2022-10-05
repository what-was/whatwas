import { Box, Button, Text } from "@mantine/core";
import type { Product } from "@prisma/client";
import { Link, useFetcher } from "@remix-run/react";
import { currencyFormatter } from "~/utils/helpers";

export const ProductSummary = ({ product }: { product: any }) => {
  const fetcher = useFetcher();

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing.md,
        border: `1px solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[5]
            : theme.colors.gray[2]
        }`,
        borderRadius: theme.radius.lg,
      })}
    >
      <Box>
        <Text weight={700}>{product.name}</Text>
        <Text
          size="sm"
          variant="link"
          component={Link}
          to={product.source}
          weight={700}
        >
          {product.source}
        </Text>

        <Text>
          {currencyFormatter({
            currency: product.currency,
            value: product.price,
          })}
        </Text>
      </Box>
      <Button
        variant="subtle"
        color="red"
        onClick={() =>
          fetcher.submit(
            { id: product.id },
            { method: "delete", action: "/api/products" }
          )
        }
      >
        {fetcher.state === "submitting" ? "Deleting..." : "Delete"}
      </Button>
    </Box>
  );
};
