# Discord Colored Text Generator

A modern web application to generate colored text for Discord messages using code blocks. This tool allows users to easily create vibrant, colorful text that can be pasted directly into Discord.

## ✨ Features

- Generate colored text using Discord's code block syntax
- Choose from CSS or ANSI syntax methods
- Real-time preview of how text will appear in Discord
- Color picker with presets and custom color support
- One-click copy to clipboard
- Mobile-friendly interface

## 🚀 Live Demo

[View Demo](https://your-demo-url-here.com) (Replace with your deployed URL)

## 📋 Prerequisites

- Node.js (v14.x or later)
- npm (v7.x or later)

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jhapriyavart10/discord-text-generator.git
   cd discord-text-generator
   ```
2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
3. Configure Vite:
   Create or modify `vite.config.ts`:
   ```javascript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   
   export default defineConfig({
     plugins: [react()],
     server: {
       port: 3000,
       open: true,
     },
   });
   ```
4. Ensure `index.html` is at the project root (not in the `public` folder).

5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open your browser and navigate to `http://localhost:3000/`.

## 🎮 How to Use

1. Enter your text in the text input area.
2. Select a color using the color picker.
3. Choose syntax type:
   - **CSS** (better color support on desktop)
   - **ANSI** (better for mobile)
4. Preview your text as it will appear in Discord.
5. Copy the generated code using the "Copy to Clipboard" button.
6. Paste into Discord and send your message!

## 🔍 How It Works

Discord supports two main methods for colored text:

- **CSS Method**
- **ANSI Method** (Better for Mobile)

This generator handles the proper formatting automatically so you don't need to worry about the syntax.

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- Mantine UI
- CSS Modules

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌟 Acknowledgements

- Inspired by rebane2001's Discord Colored Text Generator
- Discord for supporting code blocks with syntax highlighting
- Mantine UI for the component library

