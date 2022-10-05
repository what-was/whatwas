import { getAuth } from "@clerk/remix/ssr.server";
import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getHepsiburadaProduct } from "~/services/screpe-source/adapters/hepsiburada";
import { getProductBySource } from "~/models/product.server";

export const action: ActionFunction = async ({ request }) => {
  const { userId } = await getAuth(request);
  if (!userId) {
    return json({ errors: { userId: "User is required" } }, { status: 400 });
  }

  switch (request.method) {
    case "POST":
      const formData = await request.formData();
      const source = formData.get("source");
      if (typeof source !== "string") {
        return json(
          { errors: { source: "Source is required" } },
          { status: 400 }
        );
      }

      const urlRegex =
        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
      if (!urlRegex.test(source)) {
        return json(
          { errors: { source: "Source is in invalid format" } },
          { status: 422 }
        );
      }

      try {
        console.log("source", source);
        const productMeta = await getProductBySource({ source });
        if (!productMeta) {
          return json(
            { errors: { source: "Source is in invalid" } },
            { status: 422 }
          );
        }

        return json(productMeta);
      } catch (error: any) {
        return json({ errors: { source: error.message } }, { status: 422 });
      }
    default:
      return { status: 405 };
  }
};
