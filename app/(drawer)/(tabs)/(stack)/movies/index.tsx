import CustomFlatList from "@/components/shared/CustomFlatList";
import { romanticData } from "@/store/romantic.store";

const MovieScreen = () => {
  return <CustomFlatList data={romanticData.peliculas} />;
};
export default MovieScreen;
