import { useState } from 'react';

interface UseClipboardOptions {
  timeout?: number;
}

export const useClipboard = ({ timeout = 2000 }: UseClipboardOptions = {}) => {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string) => {
    if (!navigator.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      
      setTimeout(() => {
        setCopied(false);
      }, timeout);
      
      return true;
    } catch (error) {
      console.error('Failed to copy: ', error);
      setCopied(false);
      return false;
    }
  };

  return { copied, copy };
};