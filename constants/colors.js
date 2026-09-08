import { Platform } from 'react-native';

// Two palettes with the same keys so every component can keep using
// `Colors.neon500`, `Colors.bg800`, etc. without knowing the platform.
//
// android: Material-flavoured — indigo-tinted backgrounds, punchy cyan,
//          vivid magenta accent. Reads well against Material elevation/ripple.
// ios:     HIG-flavoured — near-black OLED backgrounds, softer sky-blue,
//          Apple system accent colors (systemPink / systemGreen / systemYellow).

const android = {
  bg900: '#0b0b1f',
  bg800: '#141433',
  bg700: '#1e1e4a',
  bg600: '#2c2c6e',
  neon500: '#22d3ee',
  neon600: '#0ea5c4',
  neon700: '#0b6e85',
  accent500: '#ff2e88',
  accent600: '#d01e6c',
  success500: '#22e06b',
  warning500: '#ffc531',
};

const ios = {
  bg900: '#050509',
  bg800: '#0e0e18',
  bg700: '#1a1a2c',
  bg600: '#2a2a40',
  neon500: '#4fc3f7',
  neon600: '#3aa0d1',
  neon700: '#2c6f8f',
  accent500: '#ff375f',
  accent600: '#d42a4d',
  success500: '#30d158',
  warning500: '#ffd60a',
};

export const Palettes = { android, ios };

const Colors = Platform.select({ ios, android, default: android });

export default Colors;
