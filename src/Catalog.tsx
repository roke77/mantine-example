import { useNavigate } from "react-router-dom";
import {
  AppShell,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Group,
  NavLink,
  SegmentedControl,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconClock, IconSearch, IconUsers } from "@tabler/icons-react";

const navItems = [
  { label: "Dashboard", icon: IconUsers, to: "/demo" },
  { label: "AI Coach", icon: IconUsers, to: "/ai-coach" },
  { label: "AI Sessions", icon: IconUsers },
  { label: "Live Classes", icon: IconUsers, active: true },
  { label: "Class Finder", icon: IconUsers },
  { label: "Activity", icon: IconUsers, to: "/activity" },
];

const recommendedClasses = [
  {
    id: "manage-strengths",
    title: "Manage to Your Team's Strengths",
    stats: "⭐ 4.7   ·   60 Minutes",
    upcomingLabel: "6 upcoming",
  },
  {
    id: "microaggressions",
    title: "Address Microaggressions on Your Team",
    stats: "⭐ 4.9   ·   60 Minutes",
    upcomingLabel: "5 upcoming",
  },
  {
    id: "influence",
    title: "Influence Without Authority",
    stats: "⭐ 4.8   ·   60 Minutes",
    upcomingLabel: "10 upcoming",
  },
];

const classCatalog = [
  {
    id: 1,
    dateLabel: "JAN 16",
    weekday: "FRI",
    title: "Utilize Your Strengths (Individual Version)",
    time: "Fri, Jan 16 · 6:00 PM GMT+1",
    duration: "60 Minutes",
    coach: "Nicole Bliss",
    summary:
      "Discuss how to utilize your strengths effectively to deliver impact at work and drive a more fulfilling life and career.",
    cta: "Register",
  },
  {
    id: 2,
    dateLabel: "JAN 16",
    weekday: "FRI",
    title: "Create a Culture of Belonging",
    time: "Fri, Jan 16 · 10:00 PM GMT+1",
    duration: "60 Minutes",
    coach: "Hanadi Chehabeddine",
    summary:
      "Explore concrete actions that managers can take to foster psychological safety and belonging within hybrid teams.",
    cta: "Register",
  },
];

function Sidebar() {
  const navigate = useNavigate();

  return (
    <Stack h="100%" justify="space-between" p="md">
      <Stack gap="lg">
        <div>
          <Title order={3} c="#1D1841">
            Hone
          </Title>
          <Group mt="md">
            <Avatar
              radius="xl"
              src="https://placehold.co/48x48"
              alt="Profile"
            />
            <div>
              <Text fw={600}>Roque Cuello</Text>
              <Text size="sm" c="dimmed">
                Admin
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

function RecommendedCards() {
  return (
    <Card withBorder radius="lg" padding="md">
      <Group justify="space-between" align="flex-start">
        <div>
          <Group gap="xs">
            <Badge color="hone-pink" variant="light">
              ⭐ Recommended
            </Badge>
            <Title order={4}>Recommended classes</Title>
          </Group>
        </div>
        <Button variant="subtle">See all</Button>
      </Group>
      <SimpleGrid cols={{ base: 1, lg: 3 }} spacing="lg" mt="lg">
        {recommendedClasses.map((course) => (
          <Card key={course.id} radius="lg" padding="sm" withBorder>
            <Stack gap="sm">
              <Box
                h={120}
                style={{
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #EAE7FF, #FFE4F3)",
                }}
              />
              <Group gap="xs" justify="space-between">
                <Badge color="gray" variant="light" radius="md">
                  {course.upcomingLabel}
                </Badge>
              </Group>
              <Text fw={600}>{course.title}</Text>
              <Text size="sm" c="dimmed">
                {course.stats}
              </Text>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Card>
  );
}

function CatalogFilters() {
  return (
    <Group justify="space-between" align="center" wrap="wrap">
      <TextInput
        placeholder="Search classes"
        leftSection={<IconSearch size={16} stroke={1.5} />}
        w={280}
        radius="md"
      />
      <Group gap="xs" wrap="wrap">
        {[
          "All statuses",
          "All audiences",
          "All skills",
          "All times",
          "All coaches",
          "All formats",
        ].map((filter) => (
          <Button
            key={filter}
            variant="default"
            radius="md"
            color="gray"
            leftSection={<IconUsers size={14} />}
          >
            {filter}
          </Button>
        ))}
      </Group>
      <SegmentedControl radius="md" data={["Popular", "Upcoming"]} />
    </Group>
  );
}

function CatalogList() {
  return (
    <Stack gap="lg">
      {classCatalog.map((entry) => (
        <Card key={entry.id} withBorder radius="lg" padding="lg">
          <Group align="flex-start" gap="lg">
            <Box>
              <Box
                w={64}
                h={64}
                style={{
                  borderRadius: 12,
                  border: "1px solid #E5E6EB",
                  backgroundColor: "#FFF7F1",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Text fw={700}>{entry.dateLabel.split(" ")[0]}</Text>
                <Text size="sm" fw={500} c="dimmed">
                  {entry.weekday}
                </Text>
              </Box>
            </Box>
            <Stack gap="xs" style={{ flex: 1 }}>
              <Group justify="space-between" align="flex-start">
                <div>
                  <Title order={4}>{entry.title}</Title>
                  <Group gap="lg" mt={4} c="dimmed">
                    <Group gap={4}>
                      <IconClock size={16} />
                      <Text size="sm">{entry.time}</Text>
                    </Group>
                    <Group gap={4}>
                      <IconClock size={16} />
                      <Text size="sm">{entry.duration}</Text>
                    </Group>
                    <Group gap={4}>
                      <IconUsers size={16} />
                      <Text size="sm">{entry.coach}</Text>
                    </Group>
                  </Group>
                </div>
                <Group gap="xs">
                  <Button radius="md" color="hone-pink">
                    {entry.cta}
                  </Button>
                  <Button radius="md" variant="default">
                    View more sessions
                  </Button>
                </Group>
              </Group>
              <Text size="sm" c="dimmed">
                {entry.summary}
              </Text>
            </Stack>
          </Group>
        </Card>
      ))}
    </Stack>
  );
}

function Catalog() {
  return (
    <AppShell navbar={{ width: 260, breakpoint: "lg" }} padding="xl">
      <AppShell.Navbar>
        <Sidebar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Stack gap="xl">
          <RecommendedCards />
          <CatalogFilters />
          <Divider />
          <CatalogList />
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}

export default Catalog;
