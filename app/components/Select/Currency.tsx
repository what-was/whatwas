import type { SelectProps } from "@mantine/core";
import { Select } from "@mantine/core";

import { Currency } from "~/utils/constants";
import { getSelectOptions } from "~/utils/helpers";

interface CurrencySelectProps extends Omit<SelectProps, "data"> {}

export const CurrencySelect = (props: CurrencySelectProps) => {
  const currencyOptions = getSelectOptions(Object.values(Currency));

  return <Select {...props} data={currencyOptions} />;
};
