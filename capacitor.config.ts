import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'frontend.vuetify',
  appName: 'Sarana Prasarana',
  webDir: './dist',
  bundledWebRuntime: false,
  server: {
    cleartext: true
  }
}

export default config
