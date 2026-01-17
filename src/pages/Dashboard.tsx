import {
  AppShell,
  Badge,
  Box,
  Button,
  Card,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBookmark,
  IconClockHour4,
  IconPlayerPlay,
  IconStars,
} from "@tabler/icons-react";
import Sidebar from "../components/Sidebar";
import tasksIllustration from "../assets/tasks-illustration.svg";

const recommendedClasses = [
  {
    id: 1,
    title: "Manage to Your Team's Strengths",
    upcoming: 6,
    rating: 4.7,
    duration: "60 Minutes",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Get Feedback That Improves Your Performance",
    upcoming: 5,
    rating: 4.8,
    duration: "60 Minutes",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Own Your Day",
    upcoming: 10,
    rating: 4.7,
    duration: "60 Minutes",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
];

function EmptySavedState() {
  return (
    <Stack align="center" gap="xs" pt="md" pb="lg">
      <IconBookmark size={40} color="#C1C2C5" />
      <Text fw={600}>Take control of your development</Text>
      <Text size="sm" c="dimmed" ta="center" maw={360}>
        Select "Save for later" on any class in Hone's catalog to start curating a
        personalized list of classes to take next.
      </Text>
    </Stack>
  );
}

function RecommendedCard({
  entry,
}: {
  entry: (typeof recommendedClasses)[number];
}) {
  return (
    <Card withBorder radius="lg" padding={0} key={entry.id} shadow="xs">
      <Box pos="relative">
        <Card.Section>
          <Image src={entry.image} alt={entry.title} height={170} />
        </Card.Section>
        <Badge
          pos="absolute"
          top={12}
          left={12}
          color="hone-pink"
          radius="sm"
          variant="filled"
        >
          {entry.upcoming} Upcoming
        </Badge>
      </Box>
      <Stack gap="sm" p="lg">
        <Title order={5}>{entry.title}</Title>
        <Group gap="xs" c="dimmed" align="center">
          <IconStars size={16} color="#F08C00" />
          <Text fw={600}>{entry.rating}</Text>
          <Text size="sm">· {entry.duration}</Text>
        </Group>
        <Button variant="light" color="hone-primary" radius="md" size="sm">
          View details
        </Button>
      </Stack>
    </Card>
  );
}

function Dashboard() {
  return (
    <AppShell navbar={{ width: 260, breakpoint: "lg" }} padding="xl">
      <AppShell.Navbar>
        <Sidebar activeItemId="dashboard" />
      </AppShell.Navbar>
      <AppShell.Main>
        <Stack gap="xl">
          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, xl: 9 }}>
              <Card withBorder radius="lg" padding="xl" shadow="sm">
                <Group justify="space-between" align="flex-start">
                  <Stack gap={4}>
                    <Group gap="xs">
                      <IconClockHour4 size={20} color="#DE066A" />
                      <Title order={4}>Tasks</Title>
                    </Group>
                    <Text size="sm" c="dimmed">
                      You're on top of it! Great job!
                    </Text>
                  </Stack>
                  <Button variant="subtle" size="xs" color="dark">
                    See all
                  </Button>
                </Group>
                <Group justify="space-between" mt="xl" align="center" wrap="wrap">
                  <Stack gap="xs" maw={420}>
                    <Text fw={600} size="lg">
                      No open tasks
                    </Text>
                    <Text size="sm" c="dimmed">
                      When new assignments appear, they'll show up here with clear
                      next steps.
                    </Text>
                  </Stack>
                  <Image
                    src={tasksIllustration}
                    alt="Celebration illustration"
                    w={220}
                    miw={160}
                  />
                </Group>
              </Card>
              <Card withBorder radius="lg" padding="xl" mt="xl">
                <Group justify="space-between" align="center">
                  <Group gap="xs">
                    <IconBookmark size={20} color="#DE066A" />
                    <Title order={5}>Saved for later</Title>
                    <Badge radius="xl" color="gray" variant="light">
                      0
                    </Badge>
                  </Group>
                  <Button variant="subtle" size="xs">
                    See all
                  </Button>
                </Group>
                <EmptySavedState />
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, xl: 3 }}>
              <Card
                radius="lg"
                padding="xl"
                style={{ background: "linear-gradient(145deg, #FFE2F2, #F7F2FF)" }}
              >
                <Group gap="xs">
                  <IconPlayerPlay size={20} color="#C2255C" />
                  <Title order={5}>Up Next</Title>
                </Group>
                <Stack gap="sm" mt="md">
                  <Text size="sm" c="#1D1841">
                    Time to start your next learning adventure!
                  </Text>
                  <Button color="hone-pink" radius="xl">
                    Browse Classes
                  </Button>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>

          <Card withBorder radius="lg" padding="xl" shadow="sm">
            <Group justify="space-between" align="center" mb="lg">
              <Group gap="xs">
                <IconStars size={20} color="#DE066A" />
                <Title order={4}>Recommended classes</Title>
              </Group>
              <Button variant="light" size="xs" radius="xl">
                See all
              </Button>
            </Group>
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
              {recommendedClasses.map((entry) => (
                <RecommendedCard key={entry.id} entry={entry} />
              ))}
            </SimpleGrid>
          </Card>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}

export default Dashboard;
