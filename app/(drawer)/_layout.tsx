import CustomDrawer from "@/components/shared/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: "rgba(0, 0, 0, 0.5)", // Optional: Set a semi-transparent overlay color
        headerShadowVisible: false,
        drawerActiveTintColor: "#b91c1c",
      }}
    >
      <Drawer.Screen
        name="(tabs)" // This is the name of the page and must match the url from root
        options={{
          headerShown: false,
          drawerLabel: "Home ",
          title: "Homepage",
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} name="home" color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="info/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Info",
          title: "Info Page",
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} name="information-circle" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="settings/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Settings",
          title: "Settings Page",
          drawerIcon: ({ color }) => (
            <Ionicons size={24} name="settings" color={color} />
          ),
        }}
      />
    </Drawer>
  );
};
export default DrawerLayout;
