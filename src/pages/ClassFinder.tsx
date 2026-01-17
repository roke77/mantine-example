import {
  Button,
  Card,
  FileButton,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";
import { IconFileUpload, IconPrompt } from "@tabler/icons-react";
import AppLayout from "../components/AppLayout";

const suggestionPrompts = [
  "I need to deliver feedback to someone.",
  "I'm experiencing a conflict at work.",
  "I'm leading my team through a change.",
  "I want to motivate my team on a project.",
];

function ClassFinder() {
  return (
    <AppLayout activeItemId="class-finder">
      <Stack align="center" gap="lg">
        <Text fw={700} size="32px" ta="center">
          AI Class finder
        </Text>
        <Text c="dimmed" ta="center">
          Enter a scenario you need help with or upload a plan for custom class
          recommendations.
        </Text>

        <Group gap="sm">
          <Button
            leftSection={<IconPrompt size={16} />}
            radius="xl"
            variant="default"
          >
            Enter text
          </Button>
          <FileButton onChange={() => {}} accept="application/pdf">
            {(props) => (
              <Button
                leftSection={<IconFileUpload size={16} />}
                radius="xl"
                {...props}
              >
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

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" w="100%" maw={640}>
          {suggestionPrompts.map((prompt) => (
            <Card key={prompt} withBorder radius="lg" padding="md" ta="center">
              <Text size="sm">{prompt}</Text>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </AppLayout>
  );
}

export default ClassFinder;
