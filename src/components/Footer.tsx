import { Text, Container, Group, Anchor } from '@mantine/core';

export function Footer() {
  return (
    <Container py="xl" mt={32}>
      <Group justify="center">
        <Text c="dimmed" size="sm">
          © {new Date().getFullYear()} Priyavart Jha
        </Text>
        <Text c="dimmed" size="sm">
          Inspired by{' '}
          <Anchor href="https://rebane2001.com/discord-colored-text-generator/" target="_blank">
            rebane2001's generator
          </Anchor>
        </Text>
      </Group>
    </Container>
  );
}