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
        drawerLabelStyle: {
          fontFamily: "GeistMono-Medium",
        },
        headerTitleStyle: {
          fontFamily: "GeistMono-Black",
          color: "#b91c1c",
        },
        headerStyle: {
          backgroundColor: "#fbcfe8",
        },
      }}
    >
      <Drawer.Screen
        name="(tabs)" // This is the name of the page and must match the url from root
        options={{
          headerShown: false,
          drawerLabel: "Inicio",
          title: "Inicio",
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} name="home" color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="info/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Info",

          title: "Información",
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} name="information-circle" color={color} />
          ),
        }}
      />
    </Drawer>
  );
};
export default DrawerLayout;
