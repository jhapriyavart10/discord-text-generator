import { useState } from 'react';
import { Container, Grid, Box, Paper } from '@mantine/core';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TextEditor } from './components/TextEditor';
import { TextColorPicker } from './components/ColorPicker';
import { Preview } from './components/Preview';
import { SyntaxType } from './types';

export default function App() {
  const [text, setText] = useState('');
  const [color, setColor] = useState('#5865F2'); // Discord brand color
  const [syntaxType, setSyntaxType] = useState<SyntaxType>(SyntaxType.CSS);

  return (
    <Container>
      <Header />
      
      <Paper p="md" radius="md" withBorder>
        <Grid gutter="lg">
          <Grid.Col span={{ base: 12, md: 8 }}>
            <TextEditor 
              text={text} 
              onTextChange={setText} 
              syntaxType={syntaxType} 
              onSyntaxTypeChange={setSyntaxType} 
            />
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 4 }}>
            <TextColorPicker 
              color={color} 
              onChange={setColor} 
            />
          </Grid.Col>
          
          <Grid.Col span={12}>
            <Box mt="md">
              <Preview 
                text={text} 
                color={color} 
                syntaxType={syntaxType} 
              />
            </Box>
          </Grid.Col>
        </Grid>
      </Paper>
      
      <Footer />
    </Container>
  );
}