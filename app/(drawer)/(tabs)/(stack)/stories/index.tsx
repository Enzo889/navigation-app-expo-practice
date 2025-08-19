import CustomFlatList from "@/components/shared/CustomFlatList";
import { romanticData } from "@/store/romantic.store";

const StorieScreen = () => {
  return <CustomFlatList data={romanticData.historias} />;
};
export default StorieScreen;
