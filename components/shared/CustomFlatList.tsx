import { RomanticData } from "@/store/romantic.store";
import { useRouter } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";

interface Props {
  className?: string;
  data?:
    | RomanticData["peliculas"]
    | RomanticData["canciones"]
    | RomanticData["historias"];
}

const CustomFlatList = ({ data, className }: Props) => {
  const router = useRouter();
  if (!data || data.length === 0) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-primary-900">
          No se han encontrado datos avalibles
        </Text>
      </View>
    );
  }

  const handlePress = (item: any) => {
    if ("director" in item) {
      router.push({
        pathname: "/movies/[id]",
        params: { id: item.id.toString() },
      });
    } else if ("artist" in item) {
      router.push({
        pathname: "/songs/[id]",
        params: { id: item.id.toString() },
      });
    } else if ("author" in item) {
      router.push({
        pathname: "/stories/[id]",
        params: { id: item.id.toString() },
      });
    }
  };

  const renderItem = ({ item }: { item: any }) => {
    // Detectar tipo por propiedad única
    let subtitle = "";
    if ("director" in item) {
      subtitle = `${item.director} - ${item.year}`;
    } else if ("artist" in item) {
      subtitle = `${item.artist} - ${item.year}`;
    } else if ("author" in item) {
      subtitle = `${item.author} - ${item.year}`;
    }

    return (
      <Pressable
        key={item.id}
        className={`flex-1 justify-center items-start p-4 border border-primary-900 bg-tertiary-200 m-2 mx-4 rounded-lg ${className} `}
        onPress={() => handlePress(item)}
      >
        {/* Si tienes imágenes, puedes descomentar la siguiente línea */}
        {/* <Image source={{ uri: item.imageUrl }} className="w-16 h-16 rounded mb-2" /> */}
        <Text className="font-geist-mono-black text-primary-900">
          {item.title}
        </Text>
        <Text className="font-geist-mono-medium text-primary-800">
          {subtitle}
        </Text>
      </Pressable>
    );
  };

  return (
    <View className="bg-secondary-200/80">
      <FlatList
        data={data}
        className={`my-2 ${className}`}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CustomFlatList;
