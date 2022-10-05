import { useOutletContext } from "@remix-run/react";
import { AddProductForm } from "~/components/AddProductForm";
import { ModalForm } from "~/components/ModalForm";

const AddProductPage = () => {
  const {
    budget: { id: budgetId },
  } = useOutletContext<{ budget: { id: string } }>();
  return (
    <ModalForm
      source={`/budgets/${budgetId}/add-expense`}
      size="md"
      Form={AddProductForm}
      title="Add Product"
      keepOpen
    />
  );
};

export default AddProductPage;
