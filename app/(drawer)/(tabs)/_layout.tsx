import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#b91c1c",
        tabBarLabelStyle: {
          fontFamily: "GeistMono-Medium",
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fbcfe8",
        },
      }}
    >
      <Tabs.Screen
        name="(stack)"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="bookmark" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
export default TabsLayout;
