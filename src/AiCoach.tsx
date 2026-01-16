import { useNavigate } from "react-router-dom";
import {
  AppShell,
  Avatar,
  Badge,
  Button,
  Card,
  Group,
  NavLink,
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
  IconUsers,
} from "@tabler/icons-react";

const navItems = [
  { label: "Dashboard", icon: IconUsers, to: "/demo" },
  { label: "AI Coach", icon: IconUsers, active: true },
  { label: "AI Sessions", icon: IconUsers },
  { label: "Live Classes", icon: IconUsers, to: "/catalog" },
  { label: "Class Finder", icon: IconUsers },
  { label: "Activity", icon: IconUsers, to: "/activity" },
];

const prompts = [
  "Craft helpful feedback",
  "Coach me through a challenge",
  "Improve my 1:1 agenda",
  "Prep for my presentation",
  "Resolve a conflict",
  "Explore my career development",
];

const recommendedSessions = [
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

const skills = [
  "Craft helpful feedback",
  "Improve my 1:1 agenda",
  "Manage a performance issue",
  "Write better performance reviews",
];

function Sidebar() {
  const navigate = useNavigate();

  return (
    <Stack h="100%" justify="space-between" p="md">
      <Stack gap="lg">
        <div>
          <Title order={3}>Hone</Title>
          <Group mt="md">
            <Avatar
              radius="xl"
              src="https://placehold.co/48x48"
              alt="Profile"
            />
            <div>
              <Text fw={600}>Roque Cuello</Text>
              <Text size="sm" c="dimmed">
                Manager
              </Text>
            </div>
          </Group>
        </div>
        <Stack gap="sm">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              active={item.active}
              label={item.label}
              leftSection={<item.icon size={18} />}
              variant="subtle"
              style={{ borderRadius: 12 }}
              onClick={item.to ? () => navigate(item.to) : undefined}
            />
          ))}
        </Stack>
      </Stack>
      <Text size="xs" c="dimmed">
        © Hone 2026
      </Text>
    </Stack>
  );
}

function CoachActions() {
  return (
    <Card withBorder radius="lg" padding="lg">
      <Stack gap="md">
        <Button variant="light" leftSection={<IconPlus size={16} />}>
          New chat
        </Button>
        <Button variant="light" leftSection={<IconSparkles size={16} />}>
          New voice chat
        </Button>
        <Button variant="light" leftSection={<IconSparkles size={16} />}>
          Personalize
        </Button>
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
        {prompts.map((prompt) => (
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
        {skills.map((skill) => (
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
        {recommendedSessions.map((session) => (
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
        <Sidebar />
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
