import {
  AppShell,
  Badge,
  Card,
  Group,
  Image,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { IconSearch, IconSparkles } from "@tabler/icons-react";
import Sidebar from "../components/Sidebar";

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
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Roleplay: A Coaching Conversation",
    type: "Practice",
    duration: "5-7 minutes",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Give Feedback that Lands",
    type: "Lesson",
    duration: "5-7 minutes",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Roleplay: Giving Feedback",
    type: "Practice",
    duration: "5-7 minutes",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Build Trusting Relationships",
    type: "Lesson",
    duration: "8-10 minutes",
    image:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Maximize Every 1:1",
    type: "Lesson",
    duration: "8-10 minutes",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    title: "Practice: Building Trust",
    type: "Practice",
    duration: "3-5 minutes",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    title: "Collaborate with Clarity",
    type: "Lesson",
    duration: "5-7 minutes",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    title: "Practice: Collaborating with Clarity",
    type: "Practice",
    duration: "3-5 minutes",
    image:
      "https://images.unsplash.com/photo-1529333168436-0f0d4a1ad23c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 10,
    title: "Delegate the Right Work",
    type: "Lesson",
    duration: "5-7 minutes",
    image:
      "https://images.unsplash.com/photo-1549921296-3fd62c366ee0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 11,
    title: "Influence with Intention",
    type: "Lesson",
    duration: "8-10 minutes",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 12,
    title: "Practice: Influencing with Intention",
    type: "Practice",
    duration: "5-7 minutes",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
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
        <Image src={session.image} alt={session.title} height={140} />
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
    <AppShell navbar={{ width: 260, breakpoint: "lg" }} padding="xl">
      <AppShell.Navbar>
        <Sidebar activeItemId="ai-sessions" />
      </AppShell.Navbar>
      <AppShell.Main>
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
      </AppShell.Main>
    </AppShell>
  );
}

export default AiSessions;
