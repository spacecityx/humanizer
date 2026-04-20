import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.spacecityx.humanizer',
  appName: 'Humanizer',
  webDir: '.',
  server: {
    androidScheme: 'https'
  }
};

export default config;
