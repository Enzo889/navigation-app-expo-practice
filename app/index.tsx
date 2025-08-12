import { Redirect } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

const App = () => {
  Redirect({
    href: "/home",
  });

  return (
    <SafeAreaView className="pt-6 px-3 bg-tertiary-200 min-w-full min-h-screen">
      <View className="flex flex-col h-full gap-4 items-center justify-center ">
        <Text className="text-3xl font-geist-mono-black text-primary-800">
          App with some love for sure ❤️
        </Text>
        <Text className="text-2xl font-geist-mono-medium text-secondary-800">
          NativeWind and Tailwind CSS support
        </Text>
        <Text className="text-xl font-geist-mono-light text-tertiary-800">
          Enjoy your coding experience!
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default App;
