import {
  Navbar,
  Button,
  ScrollArea,
  NavLink as NavLinkComponent,
} from "@mantine/core";
import { Form, NavLink, useLocation } from "@remix-run/react";

export const Sidebar = ({ sidebarOpen }: { sidebarOpen: boolean }) => {
  const location = useLocation();
  const activePage = location.pathname.split("/")[1];

  return (
    <Navbar
      p="md"
      hidden={!sidebarOpen}
      width={{ sm: 200, lg: 260 }}
      className="justify-between"
    >
      <Navbar.Section grow component={ScrollArea}>
        <NavLinkComponent
          label="Budgets"
          component={NavLink}
          to="budgets"
          active={activePage === "budgets"}
        />
      </Navbar.Section>

      <Navbar.Section>
        <Form action="/logout" method="post">
          <Button type="submit" variant="subtle" color="red" fullWidth>
            Logout
          </Button>
        </Form>
      </Navbar.Section>
    </Navbar>
  );
};
