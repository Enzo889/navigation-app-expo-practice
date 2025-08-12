import CustomBtn from "@/components/shared/CustomBtn";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView className="pt-6 px-3 bg-tertiary-200 min-h-screen items-center justify-center">
      <View className="flex flex-col gap-14 items-center justify-center">
        <Text className="text-primary-700 font-geist-mono-black text-xl text-center ">
          {" "}
          Welcome to: THE ROMANCE AREA{" "}
        </Text>
        <View className="flex flex-col gap-4 items-center justify-center">
          <Link href="/stories" asChild>
            <CustomBtn color="primary" size="large" rounded="lg">
              Stories
            </CustomBtn>
          </Link>
          <Link href="/movies" asChild>
            <CustomBtn color="secondary" size="large" rounded="lg">
              Movies
            </CustomBtn>
          </Link>
          <Link href="/songs" asChild>
            <CustomBtn color="tertiary" size="large" rounded="lg">
              Songs
            </CustomBtn>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
