import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Link,
  Outlet,
  useLoaderData,
  NavLink,
  useLocation,
} from "@remix-run/react";
import { Button, Divider, NavLink as NavLinkComponent } from "@mantine/core";
import { IconPlus } from "@tabler/icons";

import { getBudgets } from "~/models/budget.server";
import { getAuth } from "@clerk/remix/ssr.server";

export async function loader({ request }: LoaderArgs) {
  const { userId } = await getAuth(request);
  if (!userId) {
    return redirect("/sign-in");
  }

  const budgets = await getBudgets({ userId });
  return json({ budgets });
}

export default function BudgetsPage() {
  const data = useLoaderData<typeof loader>();
  const location = useLocation();
  const activeBudget = location.pathname.split("/")[2];

  return (
    <div className="flex h-full gap-6">
      <div className="flex h-full w-60 flex-col gap-4">
        <Button
          component={Link}
          to="new"
          fullWidth
          variant={activeBudget === "new" ? "light" : "outline"}
          leftIcon={<IconPlus size={20} />}
        >
          New Budget
        </Button>
        {/* <Link to="new" className="block p-4 text-xl text-blue-500"></Link> */}

        <Divider />

        {data.budgets.length === 0 ? (
          <p className="p-4">No budgets yet</p>
        ) : (
          <ol>
            {data.budgets.map((budget) => (
              <li key={budget.id}>
                <NavLinkComponent
                  label={budget.name}
                  component={NavLink}
                  to={budget.id}
                  active={activeBudget === budget.id}
                />
              </li>
            ))}
          </ol>
        )}
      </div>

      <Divider orientation="vertical" />

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
