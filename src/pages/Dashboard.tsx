import {
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
import AppLayout from "../components/AppLayout";
import tasksIllustration from "../assets/tasks-illustration.svg";

const recommendedClasses = [
  {
    id: 1,
    title: "Manage to Your Team's Strengths",
    upcoming: 6,
    rating: 4.7,
    duration: "60 Minutes",
    gradient: "linear-gradient(135deg, #E7F0FF, #FFE8F6)",
  },
  {
    id: 2,
    title: "Get Feedback That Improves Your Performance",
    upcoming: 5,
    rating: 4.8,
    duration: "60 Minutes",
    gradient: "linear-gradient(135deg, #FFF0E1, #FFE0F2)",
  },
  {
    id: 3,
    title: "Own Your Day",
    upcoming: 10,
    rating: 4.7,
    duration: "60 Minutes",
    gradient: "linear-gradient(135deg, #E6FFF4, #E7E3FF)",
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
          <Box
            h={170}
            style={{
              background: entry.gradient,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
            }}
          />
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
    <AppLayout activeItemId="dashboard">
      <Stack gap="xl">
        <Grid gutter="xl" align="stretch">
          <Grid.Col span={{ base: 12, xl: 9 }} style={{ display: "flex" }}>
            <Card withBorder radius="lg" padding="xl" shadow="sm" w="100%" h="100%">
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
          </Grid.Col>
          <Grid.Col span={{ base: 12, xl: 3 }} style={{ display: "flex" }}>
            <Card
              radius="lg"
              padding="xl"
              style={{
                background: "linear-gradient(145deg, #FFE2F2, #F7F2FF)",
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              h="100%"
            >
              <Group gap="xs">
                <IconPlayerPlay size={20} color="#C2255C" />
                <Title order={5}>Up Next</Title>
              </Group>
              <Stack gap="sm" mt="md" style={{ flexGrow: 1 }} justify="space-between">
                <Text size="sm" c="#1D1841">
                  Time to start your next learning adventure!
                </Text>
                <Button color="hone-pink" radius="xl" mt="auto">
                  Browse Classes
                </Button>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>

        <Card withBorder radius="lg" padding="xl">
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
    </AppLayout>
  );
}

export default Dashboard;
