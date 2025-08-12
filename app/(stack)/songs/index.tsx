import CustomFlatList from "@/components/shared/CustomFlatList";
import { romanticData } from "@/store/romantic.store";

const SongScreen = () => {
  return <CustomFlatList data={romanticData.canciones} />;
};
export default SongScreen;
