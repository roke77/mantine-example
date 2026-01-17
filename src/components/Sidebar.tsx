import { useNavigate } from "react-router-dom";
import {
  Anchor,
  Avatar,
  Group,
  NavLink,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconUsers } from "@tabler/icons-react";

export type SidebarNavItemId =
  | "dashboard"
  | "ai-coach"
  | "ai-sessions"
  | "live-classes"
  | "class-finder"
  | "activity";

const SIDEBAR_TITLE = "Hone";
const SIDEBAR_USER_NAME = "Roque Cuello";
const SIDEBAR_USER_ROLE = "Admin";
const SIDEBAR_AVATAR_SRC = "https://placehold.co/48x48";
const SIDEBAR_AVATAR_ALT = "Profile";

export type SidebarProps = {
  activeItemId: SidebarNavItemId;
};

const NAV_LINK_PROPS = {
  leftSection: <IconUsers size={18} />,
  variant: "subtle" as const,
  style: { borderRadius: 12 },
};

function Sidebar({ activeItemId }: SidebarProps) {
  const navigate = useNavigate();

  return (
    <Stack h="100%" justify="space-between" p="md">
      <Stack gap="lg">
        <div>
          <Anchor onClick={() => navigate("/demo")} underline="never">
            <Title order={3}>{SIDEBAR_TITLE}</Title>
          </Anchor>
          <Group mt="md">
            <Avatar
              radius="xl"
              src={SIDEBAR_AVATAR_SRC}
              alt={SIDEBAR_AVATAR_ALT}
            />
            <div>
              <Text fw={600}>{SIDEBAR_USER_NAME}</Text>
              <Text size="sm" c="dimmed">
                {SIDEBAR_USER_ROLE}
              </Text>
            </div>
          </Group>
        </div>
        <Stack gap="sm">
          <NavLink
            {...NAV_LINK_PROPS}
            active={activeItemId === "dashboard"}
            label="Dashboard"
          />
          <NavLink
            {...NAV_LINK_PROPS}
            active={activeItemId === "ai-coach"}
            label="AI Coach"
            onClick={() => navigate("/ai-coach")}
          />
          <NavLink
            {...NAV_LINK_PROPS}
            active={activeItemId === "ai-sessions"}
            label="AI Sessions"
          />
          <NavLink
            {...NAV_LINK_PROPS}
            active={activeItemId === "live-classes"}
            label="Live Classes"
            onClick={() => navigate("/catalog")}
          />
          <NavLink
            {...NAV_LINK_PROPS}
            active={activeItemId === "class-finder"}
            label="Class Finder"
          />
          <NavLink
            {...NAV_LINK_PROPS}
            active={activeItemId === "activity"}
            label="Activity"
            onClick={() => navigate("/activity")}
          />
        </Stack>
      </Stack>
      <Text size="xs" c="dimmed">
        © Hone 2026
      </Text>
    </Stack>
  );
}

export default Sidebar;
