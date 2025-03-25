import { Box, Text, Paper, Button, Stack, Code, CopyButton } from '@mantine/core';
import { generateColoredText } from '../utils/colorUtils';
import { SyntaxType } from '../types';

interface PreviewProps {
  text: string;
  color: string;
  syntaxType: SyntaxType;
}

export function Preview({ text, color, syntaxType }: PreviewProps) {
  const formattedText = generateColoredText(text, color, syntaxType);
  
  return (
    <Stack gap="md">
      <Text fw={500}>Preview</Text>
      
      <Paper 
        p="md" 
        withBorder 
        radius="md"
        style={{
          backgroundColor: '#36393f', // Discord chat background color
          color: '#dcddde',
          fontFamily: 'Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
      >
        <Box 
          style={{ 
            borderRadius: 4,
            padding: '0.5rem',
            backgroundColor: '#2f3136',
            overflowX: 'auto'
          }}
        >
          <Text style={{ color }}>
            {text || 'Preview will appear here'}
          </Text>
        </Box>
      </Paper>
      
      <Box>
        <Text fw={500} mb="xs">Generated Code</Text>
        <Code block style={{ whiteSpace: 'pre-wrap' }}>
          {formattedText || '// Enter some text to see the generated code'}
        </Code>
      </Box>
      
      <CopyButton value={formattedText}>
        {({ copied, copy }) => (
          <Button 
            color={copied ? 'teal' : 'discord'}
            onClick={copy}
            disabled={!formattedText}
            fullWidth
          >
            {copied ? 'Copied!' : 'Copy to Clipboard'}
          </Button>
        )}
      </CopyButton>
    </Stack>
  );
}