import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";

const StackLayout = () => {
  const navigation = useNavigation();

  function onHeaderLeftClick(canGoBack: boolean) {
    if (canGoBack) {
      router.back();
      return;
    }
    navigation.dispatch(DrawerActions.toggleDrawer);
  }

  return (
    <Stack
      screenOptions={{
        animation: "slide_from_bottom",
        headerStyle: {
          backgroundColor: "#fbcfe8",
        },
        headerShadowVisible: false,
        headerTitleStyle: {
          fontFamily: "GeistMono-Black",
          color: "#b91c1c",
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back" : "menu"}
            className="mr-5"
            size={20}
            onPress={() => onHeaderLeftClick(canGoBack === true)}
          />
        ),
        headerTitleAlign: "left",
        statusBarStyle: "auto",
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Inicio",
        }}
      />
      <Stack.Screen
        name="movies/index"
        options={{
          title: "Peliculas",
        }}
      />
      <Stack.Screen
        name="songs/index"
        options={{
          title: "Canciones",
        }}
      />
      <Stack.Screen
        name="stories/index"
        options={{
          title: "Historias",
        }}
      />
    </Stack>
  );
};
export default StackLayout;
