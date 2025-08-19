import { Linking, Text, TouchableOpacity, View } from "react-native";
const InfoScreen = () => {
  const handlePress = () => {
    Linking.openURL("read.cv/enzobustamante");
  };
  return (
    <View className="flex-1 justify-center items-center gap-2 p-10 text-center">
      <Text className="text-center text-pretty">
        Esta app esta hecha con la idea de practicar mis habilidades con expo,
        usando Stacks, Tabs y Drawers.{" "}
      </Text>
      <View className="flex-row gap-2">
        <Text>Atentamente:</Text>
        <TouchableOpacity onPress={handlePress}>
          <Text className="underline text-primary-900 decoration-primary-900">
            Enzo Bustamante
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default InfoScreen;
