import { Stack } from "expo-router";

const StackLayout = () => {
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
