import CustomFlatList from "@/components/shared/CustomFlatList";
import { favorites, romanticData } from "@/store/romantic.store";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { Text, View } from "react-native";
const FavoriteScreen = () => {
  const navigation = useNavigation();

  function drawerButtonToggle() {
    navigation.dispatch(DrawerActions.toggleDrawer);
  }

  const getFavoriteItems = () => {
    return favorites
      .map((fav) => {
        const item = romanticData[fav.type].find((i) => i.id === fav.id);
        return item ? { ...item, type: fav.type } : null;
      })
      .filter(Boolean);
  };

  const data = getFavoriteItems();

  if (data.length === 0) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-primary-900">No tienes favoritos</Text>
      </View>
    );
  }
  return (
    <View className="flex-1 pt-12  bg-primary-200 px-5">
      <View className="flex-row items-center gap-5   ">
        <Ionicons
          name="menu"
          size={20}
          color={"#9d174d"}
          onPress={drawerButtonToggle}
        />
        <Text className="text-[21px] font-geist-mono-black text-secondary-800 ">
          Favoritos
        </Text>
      </View>
      <CustomFlatList className="pt-5 rounded-2xl  " data={data} />
    </View>
  );
};
export default FavoriteScreen;
