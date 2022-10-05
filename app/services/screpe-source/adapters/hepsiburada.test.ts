import { getHepsiburadaProduct } from "./hepsiburada";

const productUrl = "";

test("getHepsiburadaProduct", () => {
  const product = getHepsiburadaProduct({ source: productUrl, userId: "1" });
  expect(product).toBeUndefined();
});
