import { Title, Text, Group, Box } from '@mantine/core';

export function Header() {
  return (
    <Box py="xl" ta="center">
      <Title order={1} c="discord.6" size="h2">
        Discord Colored Text Generator
      </Title>
      <Text c="dimmed" size="md" mt="xs">
        Generate colorful messages for Discord using code blocks
      </Text>
    </Box>
  );
}