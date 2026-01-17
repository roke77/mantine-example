import {
  Badge,
  Box,
  Card,
  Group,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { IconSearch, IconSparkles } from "@tabler/icons-react";
import AppLayout from "../components/AppLayout";

const highlightBlocks = [
  {
    title: "Start with a lesson",
    description:
      "Learn new skills in personalized, interactive lessons tailored to your role.",
    tag: "Lesson",
    color: "hone-primary",
  },
  {
    title: "Move on to practice",
    description:
      "Perfect your skills in safe environments with facilitator feedback.",
    tag: "Practice",
    color: "hone-pink",
  },
  {
    title: "Use productivity any time",
    description:
      "Get quick coaching prompts to solve problems, plan, and reflect.",
    tag: "Productivity",
    color: "hone-peach",
  },
];

const sessionLibrary = [
  {
    id: 1,
    title: "Coaching the Way Forward",
    type: "Lesson",
    duration: "5-7 minutes",
    gradient: "linear-gradient(135deg, #E7F0FF, #E0FFE9)",
  },
  {
    id: 2,
    title: "Roleplay: A Coaching Conversation",
    type: "Practice",
    duration: "5-7 minutes",
    gradient: "linear-gradient(135deg, #FFE8F6, #FFF2E3)",
  },
  {
    id: 3,
    title: "Give Feedback that Lands",
    type: "Lesson",
    duration: "5-7 minutes",
    gradient: "linear-gradient(135deg, #EAF2FF, #F6E8FF)",
  },
  {
    id: 4,
    title: "Roleplay: Giving Feedback",
    type: "Practice",
    duration: "5-7 minutes",
    gradient: "linear-gradient(135deg, #FFEDE1, #FFF0F8)",
  },
  {
    id: 5,
    title: "Build Trusting Relationships",
    type: "Lesson",
    duration: "8-10 minutes",
    gradient: "linear-gradient(135deg, #E7FFF4, #E8F0FF)",
  },
  {
    id: 6,
    title: "Maximize Every 1:1",
    type: "Lesson",
    duration: "8-10 minutes",
    gradient: "linear-gradient(135deg, #FFF0E1, #FFE8F6)",
  },
  {
    id: 7,
    title: "Practice: Building Trust",
    type: "Practice",
    duration: "3-5 minutes",
    gradient: "linear-gradient(135deg, #EAF2FF, #E7FFF4)",
  },
  {
    id: 8,
    title: "Collaborate with Clarity",
    type: "Lesson",
    duration: "5-7 minutes",
    gradient: "linear-gradient(135deg, #FFF0ED, #E8F0FF)",
  },
  {
    id: 9,
    title: "Practice: Collaborating with Clarity",
    type: "Practice",
    duration: "3-5 minutes",
    gradient: "linear-gradient(135deg, #FFE8F6, #E7FFF4)",
  },
  {
    id: 10,
    title: "Delegate the Right Work",
    type: "Lesson",
    duration: "5-7 minutes",
    gradient: "linear-gradient(135deg, #E7FFF4, #FFF0E1)",
  },
  {
    id: 11,
    title: "Influence with Intention",
    type: "Lesson",
    duration: "8-10 minutes",
    gradient: "linear-gradient(135deg, #EAF2FF, #FFF0E1)",
  },
  {
    id: 12,
    title: "Practice: Influencing with Intention",
    type: "Practice",
    duration: "5-7 minutes",
    gradient: "linear-gradient(135deg, #F1E7FF, #FFE8F6)",
  },
];

function HighlightCard({ block }: { block: (typeof highlightBlocks)[number] }) {
  return (
    <Card withBorder radius="lg" padding="lg">
      <Group gap="xs">
        <Badge color={block.color} variant="light">
          {block.tag}
        </Badge>
        <Text fw={600}>{block.title}</Text>
      </Group>
      <Text size="sm" c="dimmed" mt="xs">
        {block.description}
      </Text>
    </Card>
  );
}

function SessionCard({ session }: { session: (typeof sessionLibrary)[number] }) {
  return (
    <Card withBorder radius="lg" padding="sm" shadow="xs">
      <Card.Section>
        <Box
          h={140}
          style={{
            background: session.gradient,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        />
      </Card.Section>
      <Stack gap={6} mt="sm">
        <Group gap="xs">
          <Badge color={session.type === "Practice" ? "hone-pink" : "hone-primary"} variant="light">
            {session.type}
          </Badge>
          <Group gap={6} c="dimmed">
            <IconSparkles size={14} color="#C2255C" />
            <Text size="xs">{session.duration}</Text>
          </Group>
        </Group>
        <Text fw={600}>{session.title}</Text>
      </Stack>
    </Card>
  );
}

function AiSessions() {
  return (
    <AppLayout activeItemId="ai-sessions">
      <Stack gap="xl">
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          {highlightBlocks.map((block) => (
            <HighlightCard key={block.title} block={block} />
          ))}
        </SimpleGrid>

        <Card withBorder radius="lg" padding="lg">
          <Group align="flex-end" gap="md" grow>
            <TextInput
              label="Search"
              placeholder="Search sessions"
              leftSection={<IconSearch size={16} />}
            />
            <Select
              label="Session type"
              placeholder="All types"
              data={["All types", "Lesson", "Practice", "Productivity"]}
              defaultValue="All types"
            />
            <Select
              label="Skill focus"
              placeholder="All skills"
              data={["All skills", "Coaching", "Trust", "Feedback", "Productivity"]}
              defaultValue="All skills"
            />
          </Group>
        </Card>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          {sessionLibrary.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </SimpleGrid>
      </Stack>
    </AppLayout>
  );
}

export default AiSessions;
