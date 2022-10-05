import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { createTag } from "~/models/tag.server";
import { requireUserId } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);

  switch (request.method) {
    case "POST": {
      const formData = await request.formData();
      const name = formData.get("name");

      if (typeof name !== "string" || name.length < 4) {
        return json({ errors: { name: "Name is required" } }, { status: 400 });
      }

      const tag = await createTag({ name, userId });

      return json({ tag });
    }
    case "PUT": {
      /* handle "PUT" */
    }
    case "PATCH": {
      /* handle "PATCH" */
    }
    case "DELETE": {
      /* handle "DELETE" */
    }
  }
};
