import { useState } from "react";
import { Link } from "@remix-run/react";
import {
  AppShell,
  Header,
  Burger,
  useMantineTheme,
  Button,
  MediaQuery,
} from "@mantine/core";
import { Sidebar } from "./Sidebar";

export const Layout = ({
  isLoggedIn,
  children,
}: {
  isLoggedIn: boolean;
  children: React.ReactNode;
}) => {
  const theme = useMantineTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AppShell
      hidden={!isLoggedIn}
      styles={(theme) => ({
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      navbarOffsetBreakpoint="md"
      navbar={<Sidebar sidebarOpen={sidebarOpen} />}
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="md" styles={{ display: "none" }}>
              <Burger
                opened={sidebarOpen}
                onClick={() => setSidebarOpen((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
              />
            </MediaQuery>

            <Button component={Link} to="/" variant="subtle">
              whatwas?
            </Button>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};
