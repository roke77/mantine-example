import {
  AppShell,
  Badge,
  Button,
  Card,
  FileButton,
  Group,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";
import { IconFileUpload, IconPrompt } from "@tabler/icons-react";
import Sidebar from "../components/Sidebar";

const suggestionPrompts = [
  "I need to deliver feedback to someone.",
  "I'm experiencing a conflict at work.",
  "I'm leading my team through a change.",
  "I want to motivate my team on a project.",
];

function ClassFinder() {
  return (
    <AppShell navbar={{ width: 260, breakpoint: "lg" }} padding="xl">
      <AppShell.Navbar>
        <Sidebar activeItemId="class-finder" />
      </AppShell.Navbar>
      <AppShell.Main>
        <Stack align="center" gap="lg">
          <Text fw={700} size="32px" ta="center">
            AI Class finder
          </Text>
          <Text c="dimmed" ta="center">
            Enter a scenario you need help with or upload a plan for custom class recommendations.
          </Text>

          <Group gap="sm">
            <Button leftSection={<IconPrompt size={16} />} radius="xl" variant="default">
              Enter text
            </Button>
            <FileButton onChange={() => {}} accept="application/pdf">
              {(props) => (
                <Button leftSection={<IconFileUpload size={16} />} radius="xl" {...props}>
                  Upload PDF
                </Button>
              )}
            </FileButton>
          </Group>

          <Card withBorder radius="lg" w="100%" maw={640} padding="md">
            <Textarea
              placeholder="Describe what you need help with..."
              minRows={4}
              autosize
              rightSectionWidth={120}
            />
            <Text size="xs" c="dimmed" ta="right" mt="xs">
              Press Enter ⏎ to submit
            </Text>
          </Card>

          <Text size="sm" c="dimmed">
            Or use one of the examples below.
          </Text>

          <Group gap="sm" justify="center" wrap="wrap">
            {suggestionPrompts.map((prompt) => (
              <Badge key={prompt} radius="md" variant="light" color="gray" px="md" py={12}>
                {prompt}
              </Badge>
            ))}
          </Group>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}

export default ClassFinder;
