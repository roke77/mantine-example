import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  Anchor,
  AppShell,
  type AppShellProps,
  Burger,
  Group,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import Sidebar, { type SidebarNavItemId } from "./Sidebar";

export type AppLayoutProps = {
  activeItemId: SidebarNavItemId;
  children: ReactNode;
  title?: string;
  headerRightSection?: ReactNode;
  navbarCollapsed?: boolean;
  onToggleNavbar?: () => void;
  navbarBreakpoint?: string;
  padding?: AppShellProps["padding"];
};

function AppLayout({
  activeItemId,
  children,
  title = "Hone",
  headerRightSection,
  navbarCollapsed,
  onToggleNavbar,
  navbarBreakpoint = "md",
  padding = { base: "md", sm: "lg", lg: "xl" },
}: AppLayoutProps) {
  const navigate = useNavigate();
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const theme = useMantineTheme();
  const resolvedNavbarBreakpoint =
    theme.breakpoints[navbarBreakpoint as keyof typeof theme.breakpoints] ??
    navbarBreakpoint;
  const shouldRenderHeader = useMediaQuery(
    `(max-width: ${resolvedNavbarBreakpoint})`,
  );
  const headerProps = shouldRenderHeader ? { height: 64 } : undefined;

  const isControlled = typeof navbarCollapsed === "boolean";
  const collapsed = isControlled ? navbarCollapsed : !mobileOpened;
  const toggle = onToggleNavbar ?? toggleMobile;

  return (
    <AppShell
      padding={padding}
      header={headerProps}
      navbar={{
        width: 260,
        breakpoint: navbarBreakpoint,
        collapsed: { mobile: collapsed },
      }}
    >
      {shouldRenderHeader && (
        <AppShell.Header hiddenFrom={navbarBreakpoint}>
          <Group justify="space-between" h="100%" px="md">
            <Group gap="sm">
              <Burger
                opened={!collapsed}
                onClick={toggle}
                hiddenFrom={navbarBreakpoint}
                size="sm"
                aria-label="Toggle navigation"
              />
              <Anchor onClick={() => navigate("/demo")} underline="never">
                <Title order={3}>{title}</Title>
              </Anchor>
            </Group>
            {headerRightSection}
          </Group>
        </AppShell.Header>
      )}
      <AppShell.Navbar>
        <Sidebar
          activeItemId={activeItemId}
          title={title}
          navbarBreakpoint={navbarBreakpoint}
        />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

export default AppLayout;
