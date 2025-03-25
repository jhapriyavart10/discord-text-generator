import { Textarea, Radio, Group, Stack, Text, Box } from '@mantine/core';
import { SyntaxType } from '../types';

interface TextEditorProps {
  text: string;
  onTextChange: (value: string) => void;
  syntaxType: SyntaxType;
  onSyntaxTypeChange: (value: SyntaxType) => void;
}

export function TextEditor({ 
  text, 
  onTextChange, 
  syntaxType, 
  onSyntaxTypeChange 
}: TextEditorProps) {
  return (
    <Stack gap="md">
      <Box>
        <Text fw={500} mb="xs">Enter your text</Text>
        <Textarea
          placeholder="Type your message here..."
          value={text}
          onChange={(event) => onTextChange(event.currentTarget.value)}
          minRows={4}
          autosize
          maxRows={8}
        />
      </Box>
      
      <Box>
        <Text fw={500} mb="xs">Syntax Type</Text>
        <Radio.Group
          value={syntaxType}
          onChange={(value) => onSyntaxTypeChange(value as SyntaxType)}
        >
          <Group>
            <Radio value={SyntaxType.CSS} label="CSS (Better color support)" />
            <Radio value={SyntaxType.ANSI} label="ANSI (For mobile)" />
          </Group>
        </Radio.Group>
      </Box>
    </Stack>
  );
}