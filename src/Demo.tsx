import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Anchor,
  AppShell,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Divider,
  Group,
  List,
  NumberInput,
  Progress,
  ScrollArea,
  Select,
  SimpleGrid,
  Slider,
  Stack,
  Table,
  Text,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Dropzone } from "@mantine/dropzone";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { useDisclosure } from "@mantine/hooks";
import {
  IconArrowUpRight,
  IconPhoto,
  IconSparkles,
  IconUpload,
} from "@tabler/icons-react";

const sliderMarks = [
  { value: 2, label: "2" },
  { value: 6, label: "6" },
  { value: 10, label: "10" },
  { value: 14, label: "14" },
];

const heroBackground =
  "linear-gradient(120deg, #FFFFFF 6%, #E4E0FF 55%, #FFC2F4 100%)";
const surfaceTint =
  "linear-gradient(165deg, rgba(255,255,255,0.95) 0%, rgba(228,224,255,0.85) 55%, rgba(255,194,244,0.85) 100%)";
const accentGradient = { from: "#6C63D4", to: "#FF8FEA", deg: 118 };

const statCards = [
  { label: "Avg satisfaction", value: "4.9 / 5", delta: "+0.3 vs last month" },
  { label: "Active learners", value: "1,248", delta: "+12% YoY" },
  { label: "Sessions completed", value: "326", delta: "24 this week" },
  { label: "In-flight cohorts", value: "18", delta: "5 preparing content" },
];

const teamMembers = [
  { name: "Maya Cooper", role: "Program Strategist", focus: "AI enablement" },
  {
    name: "Jonah Patel",
    role: "Learning Designer",
    focus: "Hybrid facilitation",
  },
  { name: "Emily Vargas", role: "Coach Ops Lead", focus: "Talent pipeline" },
  { name: "Victor Yu", role: "Data Partner", focus: "Insights delivery" },
];

const resourceRows = [
  {
    id: "AI-101",
    type: "Masterclass",
    coach: "Nicole Bliss",
    date: "Oct 03",
    learners: 35,
  },
  {
    id: "ROLE-202",
    type: "Roleplay",
    coach: "Amanda Halle",
    date: "Jul 18",
    learners: 34,
  },
  {
    id: "ALLY-110",
    type: "Series",
    coach: "Jacqueline Iloh",
    date: "Jul 11",
    learners: 15,
  },
];

const carouselSlides = [
  {
    title: "Inclusive managers, everywhere",
    copy: "Launch a ready-to-run journey with curated facilitators.",
    cta: "Explore playbook",
  },
  {
    title: "AI Coach companion",
    copy: "Blend async nudges with live practice for durable skill growth.",
    cta: "See AI roadmap",
  },
  {
    title: "Trusted outcomes",
    copy: "Use Hone analytics to prove impact and capture sentiment.",
    cta: "View benchmarks",
  },
];

export function Demo() {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState("Hone-style cohort rollout");
  const [teamSize, setTeamSize] = useState(6);
  const [kickoff, setKickoff] = useState<Date | null>(null);
  const [opened, { toggle }] = useDisclosure(true);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleKickoffChange = (value: string | null) => {
    setKickoff(value ? new Date(value) : null);
  };

  const handleDrop = (files: File[]) => {
    setUploadedFiles(files);
  };

  const progressValue = useMemo(
    () => Math.min(96, 25 + teamSize * 4.5),
    [teamSize]
  );
  const kickoffLabel = useMemo(
    () =>
      kickoff
        ? kickoff.toLocaleDateString(undefined, {
            weekday: "short",
            month: "short",
            day: "numeric",
          })
        : "date TBD",
    [kickoff]
  );

  return (
    <AppShell padding="0" header={{ height: 72 }}>
      <AppShell.Header
        style={{
          backgroundColor: "#ffffffd9",
          borderBottom: "1px solid rgba(17, 7, 88, 0.08)",
        }}
      >
        <Group justify="space-between" px="lg" h="100%">
          <Group gap="xs">
            <Badge color="hone-primary" variant="light" radius="sm">
              Concept
            </Badge>
            <Title order={4} c="#1D1841">
              Hone-inspired Enablement Hub
            </Title>
          </Group>
          <Button
            variant="gradient"
            gradient={accentGradient}
            size="md"
            onClick={() => navigate("/catalog")}
          >
            Request live demo
          </Button>
        </Group>
      </AppShell.Header>
      <AppShell.Main style={{ background: heroBackground, minHeight: "100vh" }}>
        <Container size="lg" py="xl">
          <Stack gap="xl">
            <Card
              padding="xl"
              radius="xl"
              shadow="lg"
              style={{ background: surfaceTint }}
            >
              <Group justify="space-between" align="flex-start">
                <div>
                  <Text fw={600} size="lg" c="#615E79">
                    Live, interactive learning for every team
                  </Text>
                  <Title order={1} maw={520} c="#110758">
                    Scale unforgettable learning moments with a Hone-flavored
                    starter
                  </Title>
                  <Text size="lg" mt="sm" c="#4f527a" maw={540}>
                    Borrowing the Hone palette, this mini dashboard pairs
                    radiant gradients with utility-focused controls so you can
                    envision how Mantine components adapt to premium brand
                    systems.
                  </Text>
                </div>
                <Card
                  radius="lg"
                  padding="md"
                  withBorder
                  style={{
                    background: "rgba(17,7,88,0.04)",
                    borderColor: "rgba(17,7,88,0.08)",
                  }}
                >
                  <Text size="xs" c="#615E79" tt="uppercase" fw={600}>
                    Active cohorts
                  </Text>
                  <Title order={2} c="#110758">
                    24
                  </Title>
                  <Text size="sm" c="#615E79">
                    +8% vs last quarter
                  </Text>
                </Card>
              </Group>
              <Group mt="xl" gap="lg" wrap="wrap">
                <Badge size="lg" radius="xl" color="hone-pink" variant="light">
                  Glow gradients
                </Badge>
                <Badge
                  size="lg"
                  radius="xl"
                  color="hone-primary"
                  variant="light"
                >
                  Cohort controls
                </Badge>
                <Badge size="lg" radius="xl" color="hone-peach" variant="light">
                  Progress rhythm
                </Badge>
              </Group>
            </Card>

            <SimpleGrid
              cols={{ base: 1, md: 2 }}
              spacing={{ base: "lg", md: "xl" }}
            >
              <Card
                shadow="md"
                padding="xl"
                radius="xl"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  border: "1px solid rgba(17,7,88,0.08)",
                }}
              >
                <Badge color="hone-pink" variant="light">
                  Planner
                </Badge>
                <Title order={3} mt="sm" c="#110758">
                  Plan your next live program
                </Title>
                <Text size="sm" c="#615E79">
                  Adjust the basics and watch the preview tiles mirror the Hone
                  aesthetic.
                </Text>
                <TextInput
                  label="Program title"
                  placeholder="Leadership accelerator"
                  mt="lg"
                  value={projectName}
                  onChange={(event) =>
                    setProjectName(event.currentTarget.value)
                  }
                />
                <DateInput
                  mt="md"
                  label="Kickoff date"
                  placeholder="Pick a date"
                  value={kickoff}
                  onChange={handleKickoffChange}
                  valueFormat="MMM DD, YYYY"
                  clearable
                  popoverProps={{ shadow: "md" }}
                />
                <Text size="sm" fw={600} mt="lg">
                  Team size: {teamSize} learners
                </Text>
                <Slider
                  value={teamSize}
                  onChange={setTeamSize}
                  min={2}
                  max={14}
                  step={1}
                  marks={sliderMarks}
                  color="hone-primary"
                  thumbSize={22}
                />
                <Button
                  fullWidth
                  mt="lg"
                  variant="gradient"
                  gradient={accentGradient}
                  onClick={toggle}
                >
                  {opened ? "Hide" : "Show"} showcase
                </Button>
              </Card>

              <Stack gap="lg" style={{ minHeight: "100%" }}>
                {opened && (
                  <>
                    <Card
                      padding="xl"
                      radius="xl"
                      shadow="md"
                      style={{ background: "rgba(255, 255, 255, 0.95)" }}
                    >
                      <Group justify="space-between" align="flex-start">
                        <div>
                          <Text size="sm" c="#615E79">
                            Featured experience
                          </Text>
                          <Title order={3} c="#110758">
                            {projectName || "Untitled cohort"}
                          </Title>
                        </div>
                        <Badge size="lg" color="hone-primary" variant="outline">
                          {teamSize} teammates
                        </Badge>
                      </Group>
                      <Text mt="md" c="#4f527a">
                        Kickoff{" "}
                        {kickoff
                          ? `scheduled for ${kickoffLabel}`
                          : kickoffLabel}
                        . Blending structured group coaching with Hone-inspired
                        visual cues keeps everything polished and people-first.
                      </Text>
                      <Divider my="lg" color="rgba(17,7,88,0.1)" />
                      <Text size="sm" fw={600} c="#110758" mb="xs">
                        Prototype progress
                      </Text>
                      <Progress
                        radius="xl"
                        value={progressValue}
                        color="hone-pink"
                        size="lg"
                      />
                      <Group justify="space-between" mt="sm" c="#615E79">
                        <Text size="xs">Launch readiness</Text>
                        <Text size="xs">{progressValue}%</Text>
                      </Group>
                    </Card>

                    <Card
                      padding="xl"
                      radius="xl"
                      shadow="md"
                      style={{
                        background: "rgba(255, 255, 255, 0.9)",
                        border: "1px solid rgba(17,7,88,0.08)",
                      }}
                    >
                      <Group gap="xs" mb="sm">
                        <Badge color="hone-pink" variant="outline">
                          Next steps
                        </Badge>
                        <Badge color="hone-primary" variant="outline">
                          Hone cues
                        </Badge>
                      </Group>
                      <List
                        spacing="md"
                        center
                        icon={
                          <Box
                            w={10}
                            h={10}
                            bg="#FF4476"
                            style={{ borderRadius: 999 }}
                          />
                        }
                      >
                        <List.Item>
                          Drop in notifications, modals, or marquee sliders to
                          mimic Hone hero sections.
                        </List.Item>
                        <List.Item>
                          Mix gradient badges with clean slate surfaces for
                          contrast and clarity.
                        </List.Item>
                        <List.Item>
                          Use Mantine hooks like{" "}
                          <Text span fw={600}>
                            useDisclosure
                          </Text>{" "}
                          for interactive reveals.
                        </List.Item>
                      </List>
                    </Card>
                  </>
                )}
              </Stack>
            </SimpleGrid>

            <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
              {statCards.map((stat) => (
                <Card key={stat.label} withBorder radius="lg" padding="lg">
                  <Text size="sm" c="dimmed">
                    {stat.label}
                  </Text>
                  <Title order={3} mt="xs">
                    {stat.value}
                  </Title>
                  <Text size="sm" c="hone-primary" mt="xs">
                    {stat.delta}
                  </Text>
                </Card>
              ))}
            </SimpleGrid>

            <Card padding="xl" radius="xl" withBorder>
              <Group justify="space-between" mb="md">
                <div>
                  <Title order={4}>Coaching partners</Title>
                  <Text size="sm" c="dimmed">
                    Spotlight the humans behind the experience
                  </Text>
                </div>
                <Button
                  variant="light"
                  radius="md"
                  rightSection={<IconArrowUpRight size={16} />}
                >
                  Manage roster
                </Button>
              </Group>
              <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
                {teamMembers.map((member) => (
                  <Card key={member.name} padding="lg" radius="lg" withBorder>
                    <Group gap="sm">
                      <Avatar
                        radius="xl"
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${member.name}`}
                      />
                      <div>
                        <Text fw={600}>{member.name}</Text>
                        <Text size="sm" c="dimmed">
                          {member.role}
                        </Text>
                      </div>
                    </Group>
                    <Text size="sm" mt="sm">
                      Focus: {member.focus}
                    </Text>
                  </Card>
                ))}
              </SimpleGrid>
            </Card>

            <Card padding="xl" radius="xl" withBorder>
              <Group justify="space-between" mb="md">
                <div>
                  <Title order={4}>Intake request</Title>
                  <Text size="sm" c="dimmed">
                    Showcase a quick Mantine form
                  </Text>
                </div>
                <Badge color="hone-primary" variant="light">
                  Beta flow
                </Badge>
              </Group>
              <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
                <TextInput
                  label="Full name"
                  placeholder="Ada Learner"
                  required
                />
                <TextInput
                  label="Work email"
                  type="email"
                  placeholder="ada@company.com"
                  required
                />
                <Select
                  label="Focus area"
                  placeholder="Pick a program"
                  data={[
                    "AI fluency",
                    "Inclusive leadership",
                    "Manager fundamentals",
                    "Culture building",
                  ]}
                  required
                />
                <NumberInput
                  label="Learners impacted"
                  placeholder="eg. 120"
                  min={1}
                />
                <Textarea
                  label="Context"
                  minRows={3}
                  autosize
                  placeholder="Tell us what you need..."
                />
                <Stack gap="sm">
                  <Checkbox label="Send me prep materials" defaultChecked />
                  <Button
                    variant="gradient"
                    gradient={accentGradient}
                    radius="md"
                  >
                    Submit request
                  </Button>
                </Stack>
              </SimpleGrid>
            </Card>

            <Card padding="xl" radius="xl" withBorder>
              <Group justify="space-between" mb="md">
                <div>
                  <Title order={4}>Upload resources</Title>
                  <Text size="sm" c="dimmed">
                    Mantine Dropzone example
                  </Text>
                </div>
                <Text size="sm" c="dimmed">
                  {uploadedFiles.length
                    ? `${uploadedFiles.length} file(s) ready`
                    : "No files yet"}
                </Text>
              </Group>
              <Dropzone
                onDrop={handleDrop}
                accept={{ "image/*": [], "application/pdf": [] }}
                radius="lg"
                styles={{ inner: { padding: "40px" } }}
              >
                <Group justify="center" gap="md">
                  <IconUpload size={32} />
                  <div>
                    <Text fw={600}>Drag files here or click to browse</Text>
                    <Text size="sm" c="dimmed">
                      PNG, JPG, or PDF up to 25MB
                    </Text>
                  </div>
                </Group>
              </Dropzone>
            </Card>

            <Card padding="xl" radius="xl" withBorder>
              <Group justify="space-between" mb="md">
                <div>
                  <Title order={4}>Recommended content</Title>
                  <Text size="sm" c="dimmed">
                    Tabular example using ScrollArea
                  </Text>
                </div>
                <Anchor size="sm">Export CSV</Anchor>
              </Group>
              <ScrollArea>
                <Table striped highlightOnHover>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>ID</Table.Th>
                      <Table.Th>Type</Table.Th>
                      <Table.Th>Coach</Table.Th>
                      <Table.Th>Date</Table.Th>
                      <Table.Th>Enrollments</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {resourceRows.map((row) => (
                      <Table.Tr key={row.id}>
                        <Table.Td>{row.id}</Table.Td>
                        <Table.Td>{row.type}</Table.Td>
                        <Table.Td>{row.coach}</Table.Td>
                        <Table.Td>{row.date}</Table.Td>
                        <Table.Td>{row.learners}</Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </ScrollArea>
            </Card>

            <Card padding="xl" radius="xl" withBorder>
              <Group justify="space-between" mb="md">
                <div>
                  <Title order={4}>Journey highlights</Title>
                  <Text size="sm" c="dimmed">
                    Mantine Carousel example
                  </Text>
                </div>
                <Button
                  variant="subtle"
                  rightSection={<IconSparkles size={16} />}
                >
                  Surprise me
                </Button>
              </Group>
              <Carousel slideSize="33.3333%" withIndicators slideGap="md">
                {carouselSlides.map((slide) => (
                  <Carousel.Slide key={slide.title}>
                    <Card padding="lg" radius="lg" withBorder h="100%">
                      <Badge color="hone-pink" variant="light">
                        Spotlight
                      </Badge>
                      <Title order={4} mt="sm">
                        {slide.title}
                      </Title>
                      <Text size="sm" c="dimmed" mt="xs">
                        {slide.copy}
                      </Text>
                      <Button
                        mt="lg"
                        variant="light"
                        radius="md"
                        rightSection={<IconArrowUpRight size={14} />}
                      >
                        {slide.cta}
                      </Button>
                    </Card>
                  </Carousel.Slide>
                ))}
              </Carousel>
            </Card>

            <Card padding="xl" radius="xl" withBorder>
              <Group justify="space-between" mb="sm">
                <Title order={4}>Creative inspiration drawer</Title>
                <IconPhoto size={20} color="#DE066A" />
              </Group>
              <Text size="sm" c="dimmed">
                Combine Mantine building blocks to design high-fidelity
                prototypes quickly. This extended demo keeps the original hero
                intact while layering on grids, cards, forms, tables, dropzones,
                and carousels for richer storytelling.
              </Text>
            </Card>
          </Stack>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default Demo;
