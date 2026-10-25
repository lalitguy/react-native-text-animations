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
