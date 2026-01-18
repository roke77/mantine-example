import {
  Badge,
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconArrowUp, IconSparkles } from "@tabler/icons-react";
import AppLayout from "../components/AppLayout";

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
      <Group gap="xs" wrap="wrap" justify="center">
        {PROMPTS.map((prompt) => (
          <Button key={prompt} variant="default" radius="xl" size="xs">
            {prompt}
          </Button>
        ))}
      </Group>
    </Stack>
  );
}

function RecommendedSessions() {
  return (
    <Stack gap="sm">
      <Title order={4} ta="center">
        Recommended AI Sessions
      </Title>
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
      <Group justify="center">
        <Button variant="subtle">See all</Button>
      </Group>
    </Stack>
  );
}

function AiCoach() {
  return (
    <AppLayout activeItemId="ai-coach">
      <Container size="sm">
        <Stack gap="xl">
          <PromptInput />
          <RecommendedSessions />
        </Stack>
      </Container>
    </AppLayout>
  );
}

export default AiCoach;
