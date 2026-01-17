import {
  ActionIcon,
  Badge,
  Box,
  Card,
  Group,
  Stack,
  Tabs,
  Text,
} from "@mantine/core";

import { IconDots, IconUsers } from "@tabler/icons-react";
import AppLayout from "../components/AppLayout";


type ActivityEntry = {
  id: number;
  title: string;
  series?: string;
  meta: string;
  facilitator: string;
  learners: number;
  statusLabel: string;
  statusColor: string;
};

const upcomingSessions: ActivityEntry[] = [
  {
    id: 101,
    title: "Masterclass: Lead Through Change",
    series: "Manager Lab",
    meta: "Starts Jan 24 · 9:00 AM GMT",
    facilitator: "Nicolle Merrill",
    learners: 28,
    statusLabel: "Upcoming",
    statusColor: "hone-primary",
  },
  {
    id: 102,
    title: "Workshop: Deliver Impactful Feedback",
    meta: "Starts Feb 04 · 11:00 AM GMT",
    facilitator: "Amanda Halle",
    learners: 22,
    statusLabel: "Upcoming",
    statusColor: "hone-primary",
  },
  {
    id: 103,
    title: "Series: Coaching Moments",
    series: "Leadership Journey",
    meta: "Starts Feb 12 · 4:00 PM GMT",
    facilitator: "Victor Yu",
    learners: 18,
    statusLabel: "Upcoming",
    statusColor: "hone-primary",
  },
];

const completedSessions: ActivityEntry[] = [
  {
    id: 1,
    title: "Masterclass: Start Using AI at Work (Generative AI 101) ",
    series: "Weekly Company All-Hands",
    meta: "Completed Oct 3",
    facilitator: "Nicolle Merrill",
    learners: 35,
    statusLabel: "Completed",
    statusColor: "gray",
  },
  {
    id: 2,
    title: "Masterclass: Unraveling the Power of AI Prompting",
    series: "Weekly Company All-Hands",
    meta: "Completed Jul 18",
    facilitator: "Amanda Halle",
    learners: 34,
    statusLabel: "Completed",
    statusColor: "gray",
  },
  {
    id: 3,
    title: "Overcome Resistance to Change",
    meta: "Completed Mar 18",
    facilitator: "Hayley Wintermantle",
    learners: 26,
    statusLabel: "Completed",
    statusColor: "gray",
  },
  {
    id: 4,
    title: "Embrace Allyship in Your Organization",
    series: "Hone Grown - DEIB Fundamentals",
    meta: "Completed Jul 11",
    facilitator: "Jacqueline Iloh",
    learners: 15,
    statusLabel: "Completed",
    statusColor: "gray",
  },
  {
    id: 5,
    title: "Bridge Cultural Differences Across Your Organization",
    series: "Hone Grown - DEIB Fundamentals",
    meta: "Completed Jun 27",
    facilitator: "Abe Medoff",
    learners: 11,
    statusLabel: "Completed",
    statusColor: "gray",
  },
];

const missedSessions: ActivityEntry[] = [
  {
    id: 301,
    title: "Skill Lab: Navigating Difficult Conversations",
    meta: "Missed Sep 15",
    facilitator: "Emily Vargas",
    learners: 19,
    statusLabel: "Missed",
    statusColor: "red",
  },
  {
    id: 302,
    title: "Workshop: Hybrid Team Rituals",
    series: "Future of Work",
    meta: "Missed Aug 09",
    facilitator: "Jonah Patel",
    learners: 24,
    statusLabel: "Missed",
    statusColor: "red",
  },
];

const savedSessions: ActivityEntry[] = [
  {
    id: 401,
    title: "Inclusive Leadership Foundations",
    series: "DEIB Core",
    meta: "Saved Oct 12",
    facilitator: "Jacqueline Iloh",
    learners: 42,
    statusLabel: "Saved",
    statusColor: "hone-pink",
  },
  {
    id: 402,
    title: "Manager Mastery Sprint",
    meta: "Saved Sep 02",
    facilitator: "Nicole Bliss",
    learners: 38,
    statusLabel: "Saved",
    statusColor: "hone-pink",
  },
];

const ACTIVITY_SECTIONS = [
  { value: "upcoming", label: "Upcoming", entries: upcomingSessions },
  { value: "completed", label: "Completed", entries: completedSessions },
  { value: "missed", label: "Missed", entries: missedSessions },
  { value: "saved", label: "Saved for later", entries: savedSessions },
];

function SectionCard({ entry }: { entry: ActivityEntry }) {
  return (
    <Card withBorder radius="lg" padding="lg">
      <Group justify="space-between" align="flex-start">
        <Group gap="md">
          <Stack gap={6} align="center">
            <Badge color={entry.statusColor} radius="sm" variant="light">
              {entry.statusLabel}
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
              {entry.meta}
            </Text>
            <Group gap="sm" mt="sm" c="dimmed">
              <Box
                w={32}
                h={32}
                style={{
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #FFE2F2, #E9EDFF)",
                }}
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
    <AppLayout activeItemId="activity">
      <Tabs defaultValue="completed" radius="md" color="hone-pink">
        <Tabs.List grow>
          {ACTIVITY_SECTIONS.map((section) => (
            <Tabs.Tab key={section.value} value={section.value}>
              {section.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {ACTIVITY_SECTIONS.map((section) => (
          <Tabs.Panel key={section.value} value={section.value} pt="xl">
            <Stack gap="md">
              {section.entries.map((entry) => (
                <SectionCard key={entry.id} entry={entry} />
              ))}
            </Stack>
          </Tabs.Panel>
        ))}
      </Tabs>
    </AppLayout>
  );
}


export default Activity;
