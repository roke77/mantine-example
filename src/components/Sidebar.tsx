import { useNavigate } from "react-router-dom";
import { Avatar, Group, NavLink, Stack, Text } from "@mantine/core";
import {
  IconDashboard,
  IconRobot,
  IconMessages,
  IconVideo,
  IconSearch,
  IconActivity,
} from "@tabler/icons-react";

export type SidebarNavItemId =
  | "dashboard"
  | "ai-coach"
  | "ai-sessions"
  | "live-classes"
  | "class-finder"
  | "activity";

const SIDEBAR_USER_NAME = "Roque Cuello";
const SIDEBAR_USER_ROLE = "Admin";
const SIDEBAR_USER_INITIALS = "RC";

export type SidebarProps = {
  activeItemId: SidebarNavItemId;
};

const NAV_LINK_BASE_PROPS = {
  variant: "subtle" as const,
  style: { borderRadius: 12 },
};

const ICON_SIZE = 18;

function Sidebar({ activeItemId }: SidebarProps) {
  const navigate = useNavigate();

  return (
    <Stack h="100%" justify="space-between" p="md">
      <Stack gap="lg">
        <Group>
          <Avatar radius="xl" color="hone-pink">
            {SIDEBAR_USER_INITIALS}
          </Avatar>
          <div>
            <Text fw={600}>{SIDEBAR_USER_NAME}</Text>
            <Text size="sm" c="dimmed">
              {SIDEBAR_USER_ROLE}
            </Text>
          </div>
        </Group>
        <Stack gap="sm">
          <NavLink
            {...NAV_LINK_BASE_PROPS}
            leftSection={<IconDashboard size={ICON_SIZE} />}
            active={activeItemId === "dashboard"}
            label="Dashboard"
            onClick={() => navigate("/dashboard")}
          />
          <NavLink
            {...NAV_LINK_BASE_PROPS}
            leftSection={<IconRobot size={ICON_SIZE} />}
            active={activeItemId === "ai-coach"}
            label="AI Coach"
            onClick={() => navigate("/ai-coach")}
          />
          <NavLink
            {...NAV_LINK_BASE_PROPS}
            leftSection={<IconMessages size={ICON_SIZE} />}
            active={activeItemId === "ai-sessions"}
            label="AI Sessions"
            onClick={() => navigate("/ai-sessions")}
          />
          <NavLink
            {...NAV_LINK_BASE_PROPS}
            leftSection={<IconVideo size={ICON_SIZE} />}
            active={activeItemId === "live-classes"}
            label="Live Classes"
            onClick={() => navigate("/catalog")}
          />
          <NavLink
            {...NAV_LINK_BASE_PROPS}
            leftSection={<IconSearch size={ICON_SIZE} />}
            active={activeItemId === "class-finder"}
            label="Class Finder"
            onClick={() => navigate("/class-finder")}
          />
          <NavLink
            {...NAV_LINK_BASE_PROPS}
            leftSection={<IconActivity size={ICON_SIZE} />}
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
