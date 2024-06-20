import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sarpras.app',
  appName: 'sarprassebelas',
  webDir: 'dist'
};

export default config;
// keytool -genkey -v -keystore sarpras-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias sarpras-key
