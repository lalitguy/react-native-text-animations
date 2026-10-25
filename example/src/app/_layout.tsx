import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const _layout = () => {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </SafeAreaProvider>
  );
};

export default _layout;
