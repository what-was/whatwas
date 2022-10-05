import { Select } from "@mantine/core";

export const getSelectOptions = (options: string[]) => {
  return options.map((option) => ({
    label: option,
    value: option,
  }));
};

export const currencyFormatter = ({
  currency,
  value,
}: {
  currency: string;
  value: number;
}) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(value);
};
