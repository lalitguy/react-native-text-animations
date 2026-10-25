import TabIcon from "@/example/components/TabIcon";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{ title: "Dashboard", tabBarIcon: () => <TabIcon char="D" /> }}
      />
      <Tabs.Screen
        name="swipes"
        options={{ title: "Swipes", tabBarIcon: () => <TabIcon char="S" /> }}
      />
      <Tabs.Screen
        name="loading"
        options={{ title: "Loading", tabBarIcon: () => <TabIcon char="L" /> }}
      />
      <Tabs.Screen
        name="focus"
        options={{ title: "Focus", tabBarIcon: () => <TabIcon char="F" /> }}
      />
      <Tabs.Screen
        name="heartbeat"
        options={{
          title: "Heart Beat",
          tabBarIcon: () => <TabIcon char="H" />,
        }}
      />
      <Tabs.Screen name="index" options={{ href: null }} />
    </Tabs>
  );
};

export default _layout;
