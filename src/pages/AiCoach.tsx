import {
  AppShell,
  Badge,
  Button,
  Card,
  Group,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import {
  IconArrowUp,
  IconPlus,
  IconSparkles,
} from "@tabler/icons-react";
import Sidebar from "../components/Sidebar";

const PROMPTS = [
  "Craft helpful feedback",
  "Coach me through a challenge",
  "Improve my 1:1 agenda",
  "Prep for my presentation",
  "Resolve a conflict",
  "Explore my career development",
];

const RECOMMENDED_SESSIONS = [
  {
    title: "Give Feedback that Lands",
    type: "Lesson",
    duration: "5-7 minutes",
    description:
      "Learn the SBIW framework for giving structured feedback and apply it to a real world situation.",
  },
  {
    title: "Roleplay: Giving Feedback",
    type: "Practice",
    duration: "5-7 minutes",
    description:
      "Strengthen your ability to deliver clear, timely feedback in a realistic roleplay.",
  },
  {
    title: "Coaching the Way Forward",
    type: "Lesson",
    duration: "5-7 minutes",
    description:
      "Lead structured coaching conversations using the GROW model of coaching.",
  },
];

const SKILLS = [
  "Craft helpful feedback",
  "Improve my 1:1 agenda",
  "Manage a performance issue",
  "Write better performance reviews",
];

const COACH_ACTIONS = [
  { label: "New chat", icon: IconPlus },
  { label: "New voice chat", icon: IconSparkles },
  { label: "Personalize", icon: IconSparkles },
] as const;

function CoachActions() {
  return (
    <Card withBorder radius="lg" padding="lg">
      <Stack gap="md">
        {COACH_ACTIONS.map(({ label, icon: IconComponent }) => (
          <Button key={label} variant="light" leftSection={<IconComponent size={16} />}>
            {label}
          </Button>
        ))}
      </Stack>
    </Card>
  );
}


function PromptInput() {
  return (
    <Stack gap="md">
      <Stack align="center" gap="xs">
        <Title order={2} ta="center">
          How can Hone help you today?
        </Title>
      </Stack>
      <Group align="center" gap="xs">
        <TextInput flex={1} radius="xl" placeholder="Ask Hone anything" />
        <Button
          radius="xl"
          variant="gradient"
          gradient={{ from: "#FF8FEA", to: "#6C63D4" }}
        >
          <IconArrowUp size={16} />
        </Button>
        <Button radius="xl" variant="default">
          <IconSparkles size={16} />
        </Button>
      </Group>
      <Group gap="xs" wrap="wrap">
        {PROMPTS.map((prompt) => (
          <Button key={prompt} variant="default" radius="xl" size="xs">
            {prompt}
          </Button>
        ))}
      </Group>
    </Stack>
  );
}

function SkillList() {
  return (
    <Stack gap="xs">
      <Text fw={500} c="dimmed">
        Craft helpful feedback
      </Text>
      <Stack gap="xs">
        {SKILLS.map((skill) => (
          <Group key={skill} gap="sm">
            <Badge color="hone-pink" variant="light">
              ✦
            </Badge>
            <Text>{skill}</Text>
          </Group>
        ))}
      </Stack>
    </Stack>
  );
}

function RecommendedSessions() {
  return (
    <Stack gap="sm">
      <Group justify="space-between">
        <Title order={4}>Recommended AI Sessions</Title>
        <Button variant="subtle">See all</Button>
      </Group>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
        {RECOMMENDED_SESSIONS.map((session) => (
          <Card key={session.title} withBorder radius="lg" padding="lg">
            <Group gap="xs">
              <Badge color="hone-pink" variant="light">
                {session.type}
              </Badge>
              <Text size="sm" c="dimmed">
                {session.duration}
              </Text>
            </Group>
            <Text fw={600} mt="sm">
              {session.title}
            </Text>
            <Text size="sm" c="dimmed" mt="xs">
              {session.description}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  );
}

function AiCoach() {
  return (
    <AppShell
      navbar={{ width: 260, breakpoint: "lg" }}
      aside={{ width: 260, breakpoint: "lg" }}
      padding="xl"
    >
      <AppShell.Navbar>
        <Sidebar activeItemId="ai-coach" />
      </AppShell.Navbar>
      <AppShell.Aside>
        <Stack gap="lg">
          <CoachActions />
          <SkillList />
        </Stack>
      </AppShell.Aside>
      <AppShell.Main>
        <Stack gap="xl">
          <PromptInput />
          <RecommendedSessions />
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}

export default AiCoach;
