import { Prisma } from "@prisma/client";
import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getBudget } from "~/models/budget.server";
import { createProduct, deleteProduct } from "~/models/product.server";
// import { getHepsiburadaProduct } from "~/services/screpe-source/adapters/hepsiburada";

import { requireUserId } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);

  switch (request.method) {
    case "POST": {
      const formData = await request.formData();

      const name = formData.get("name");
      const source = formData.get("source");
      const tags = formData.getAll("tags") as string[];
      const price = formData.get("price");
      const currency = formData.get("currency");

      if (typeof name !== "string" || name.length < 4) {
        return json({ errors: { name: "Name is required" } }, { status: 400 });
      }

      const urlRegex =
        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
      if (typeof source !== "string" || !urlRegex.test(source)) {
        return json(
          { errors: { source: "Source is required" } },
          { status: 400 }
        );
      }

      if (
        typeof price !== "string" ||
        price.length < 1 ||
        isNaN(parseInt(price)) ||
        parseInt(price) < 0
      ) {
        return json(
          { errors: { price: "Price is required" } },
          { status: 400 }
        );
      }

      try {
        // const pp = await getHepsiburadaProduct({ source, userId });
        // console.log("pp", pp);

        const product = await createProduct({
          name,
          source,
          userId,
          price: parseInt(price),
          currency: (currency || "EUR") as string,
        });

        const referer = new URL(request.headers.get("referer") || "");
        const redirectUrl = referer.pathname.split("/").slice(0, -1).join("/");

        return redirectUrl ? redirect(redirectUrl) : json({ product });
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          if (error.code === "P2002") {
            if ((error.meta?.target as string)?.includes("source")) {
              return json(
                { errors: { source: "Source is already in use" } },
                { status: 400 }
              );
            }
          }
        }

        return json({ error }, { status: 500 });
      }
    }
    case "PUT": {
      /* handle "PUT" */
    }
    case "PATCH": {
      /* handle "PATCH" */
    }
    case "DELETE": {
      const formData = await request.formData();
      const id = formData.get("id");

      if (typeof id !== "string" || id.length < 1) {
        return json({ errors: { id: "Id is required" } }, { status: 400 });
      }

      try {
        const product = await deleteProduct({ id, userId });

        const referer = new URL(request.headers.get("referer") || "");
        const redirectUrl = referer.pathname;

        return redirectUrl ? redirect(redirectUrl) : json({ product });
      } catch (error) {
        return json({ error }, { status: 500 });
      }
    }
  }
};
