import {
  ActionIcon,
  AppShell,
  Avatar,
  Badge,
  Card,
  Group,
  SegmentedControl,
  Stack,
  Text,
} from "@mantine/core";
import { IconDots, IconUsers } from "@tabler/icons-react";
import Sidebar from "../components/Sidebar";

const ACTIVITY_TABS = ["Upcoming", "Completed", "Missed", "Saved for later"];

const completedClasses = [
  {
    id: 1,
    title: "Masterclass: Start Using AI at Work (Generative AI 101) ",
    series: "Weekly Company All-Hands",
    completedDate: "Completed Oct 3",
    facilitator: "Nicolle Merrill",
    learners: 35,
  },
  {
    id: 2,
    title: "Masterclass: Unraveling the Power of AI Prompting",
    series: "Weekly Company All-Hands",
    completedDate: "Completed Jul 18",
    facilitator: "Amanda Halle",
    learners: 34,
  },
  {
    id: 3,
    title: "Overcome Resistance to Change",
    completedDate: "Completed Mar 18",
    facilitator: "Hayley Wintermantle",
    learners: 26,
  },
  {
    id: 4,
    title: "Embrace Allyship in Your Organization",
    series: "Hone Grown - DEIB Fundamentals",
    completedDate: "Completed Jul 11",
    facilitator: "Jacqueline Iloh",
    learners: 15,
  },
  {
    id: 5,
    title: "Bridge Cultural Differences Across Your Organization",
    series: "Hone Grown - DEIB Fundamentals",
    completedDate: "Completed Jun 27",
    facilitator: "Abe Medoff",
    learners: 11,
  },
];

function ActivityTabs() {
  return (
    <SegmentedControl
      fullWidth
      radius="md"
      data={ACTIVITY_TABS}
      value="Completed"
      styles={{
        root: { border: "none", background: "transparent" },
        label: { padding: "12px 16px" },
      }}
    />
  );
}

type CompletedClass = (typeof completedClasses)[number];

function CompletedCard({
  entry,
}: {
  entry: CompletedClass;
}) {

  return (
    <Card withBorder radius="lg" padding="lg">
      <Group justify="space-between" align="flex-start">
        <Group gap="md">
          <Stack gap={6} align="center">
            <Badge color="hone-pink" radius="sm" variant="light">
              Live
            </Badge>
            <IconUsers size={20} color="#DE066A" />
          </Stack>
          <div>
            <Text fw={600}>{entry.title}</Text>
            {entry.series && (
              <Text size="sm" c="dimmed">
                part of {entry.series}
              </Text>
            )}
            <Text size="sm" c="dimmed">
              {entry.completedDate}
            </Text>
            <Group gap="sm" mt="sm" c="dimmed">
              <Avatar
                size={28}
                radius="xl"
                src="https://placehold.co/32x32"
                alt={entry.facilitator}
              />
              <Text size="sm">{entry.facilitator}</Text>
              <Text size="sm">· {entry.learners} learners</Text>
            </Group>
          </div>
        </Group>
        <ActionIcon variant="subtle" radius="xl">
          <IconDots size={18} />
        </ActionIcon>
      </Group>
    </Card>
  );
}


function Activity() {
  return (
    <AppShell navbar={{ width: 260, breakpoint: "lg" }} padding="xl">
      <AppShell.Navbar>
        <Sidebar activeItemId="activity" />
      </AppShell.Navbar>
      <AppShell.Main>
        <Stack gap="xl">
          <ActivityTabs />
          <Stack gap="md">
            {completedClasses.map((entry) => (
              <CompletedCard key={entry.id} entry={entry} />
            ))}
          </Stack>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}

export default Activity;
