import { SyntaxType } from '../types';

export const generateColoredText = (
  text: string,
  color: string,
  syntaxType: SyntaxType
): string => {
  if (!text) return '';
  
  switch (syntaxType) {
    case SyntaxType.CSS:
      return `\`\`\`css\n[${text}]{color: ${color}}\n\`\`\``;
    case SyntaxType.ANSI:
      // ANSI colors for Discord - limited range
      const ansiColorMap: Record<string, string> = {
        '#ff0000': '31', // Red
        '#00ff00': '32', // Green
        '#ffff00': '33', // Yellow
        '#0000ff': '34', // Blue
        '#ff00ff': '35', // Magenta
        '#00ffff': '36', // Cyan
        '#ffffff': '37', // White
      };
      
      // Find the closest color in the ANSI map
      // This is simplified - in a real app you'd want a better color distance algorithm
      const ansiCode = ansiColorMap[color] || '37';
      return `\`\`\`ansi\n\u001b[${ansiCode}m${text}\u001b[0m\n\`\`\``;
    default:
      return text;
  }
};

export const isValidHexColor = (color: string): boolean => {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
};