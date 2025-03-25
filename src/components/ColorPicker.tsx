import { ColorPicker, Stack, Text, useMantineTheme, ColorSwatch, Group } from '@mantine/core';

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

export function TextColorPicker({ color, onChange }: ColorPickerProps) {
  const theme = useMantineTheme();

  // Predefined Discord-friendly colors
  const presetColors = [
    '#5865F2', // Discord brand blue
    '#ED4245', // Discord red
    '#FEE75C', // Discord yellow
    '#57F287', // Discord green
    '#EB459E', // Discord pink
    '#FFFFFF', // White
    '#000000', // Black
  ];

  return (
    <Stack gap="xs">
      <Text fw={500}>Text Color</Text>
      <ColorPicker 
        format="hex"
        value={color} 
        onChange={onChange}
        swatches={Object.keys(theme.colors)
          .map(color => theme.colors[color][5])}
      />
      
      <Text size="sm" fw={500} mt="xs">Quick Colors</Text>
      <Group gap="xs">
        {presetColors.map((presetColor) => (
          <ColorSwatch 
            key={presetColor}
            color={presetColor}
            onClick={() => onChange(presetColor)}
            size={24}
            radius="sm"
            style={{ cursor: 'pointer' }}
          />
        ))}
      </Group>
    </Stack>
  );
}