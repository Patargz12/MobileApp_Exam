import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "Restaurant_app",
  webDir: "dist",
  plugins: {
    SplashScreen: {
      launchShowDuration: 5000, // duration in milliseconds
      launchAutoHide: true,
      backgroundColor: "#d71a21", // Background color
      androidSplashResourceName: "splash", // Filename of splash screen image for Android
      iosSplashStoryboard: "LaunchScreen", // Storyboard name for iOS
    },
  },
};

export default config;
