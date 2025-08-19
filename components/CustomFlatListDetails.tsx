import { romanticData, RomanticData } from "@/store/romantic.store";
import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

type DataType = "peliculas" | "historias" | "canciones";

interface Props {
  type: DataType;
}

const CustomFlatListDetails = ({ type }: Props) => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const item = romanticData[type].find((i) => i.id.toString() === id);

  useEffect(() => {
    navigation.setOptions({
      title: item?.title || type.toLocaleUpperCase(),
    });
  }, [item]);

  if (!item) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-primary-900">
          No se han encontrado datos avalibles
        </Text>
      </View>
    );
  }

  return (
    <View className="p-4 gap-4 h-full w-full bg-tertiary-300">
      <Stack.Screen options={{ title: `${type.toLocaleUpperCase()}` }} />
      <Text className="text-2xl font-geist-mono-black text-secondary-800 ">
        {item.title}
      </Text>
      <Text className=" font-geist-mono-medium text-secondary-800 ">
        {type === "peliculas" &&
          `Director: ${(item as RomanticData["peliculas"][0]).director}`}
        {type === "historias" &&
          `Autor: ${(item as RomanticData["historias"][0]).author}`}
        {type === "canciones" &&
          `Artista: ${(item as RomanticData["canciones"][0]).artist}`}
      </Text>
      <Text className=" font-geist-mono-medium text-tertiary-800">
        Descripción: {item.description}
      </Text>
      <Text className=" font-geist-mono-medium text-tertiary-800">
        Año: {item.year}
      </Text>
    </View>
  );
};

export default CustomFlatListDetails;
