import { useColorScheme } from "@/hooks/useColorScheme";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { AppState, Dimensions, Platform } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf")
  });

  useEffect(() => {
    if (Platform.OS !== "android") return;

    const hideNavBar = async () => {
      try {
        await NavigationBar.setVisibilityAsync("hidden");
      } catch {}
    };

    const startBurst = () => {
      const startedAt = Date.now();
      const interval = setInterval(() => {
        hideNavBar();
        if (Date.now() - startedAt > 2000) {
          clearInterval(interval);
        }
      }, 250);
    };

    requestAnimationFrame(() => {
      hideNavBar();
      startBurst();
    });

    const appStateSub = AppState.addEventListener("change", state => {
      if (state === "active") {
        hideNavBar();
        startBurst();
      }
    });

    const dimSub = Dimensions.addEventListener("change", () => {
      hideNavBar();
      startBurst();
    });

    return () => {
      appStateSub.remove();
      dimSub.remove();
    };
  }, []);

  if (!loaded) {
    return null;
  }
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" hidden={Platform.OS === "android"} />
    </ThemeProvider>
  );
}
