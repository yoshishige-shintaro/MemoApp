import { createIconSetFromIcoMoon } from "@expo/vector-icons";
// アイコンが読み込まれているかどうを判定するためのもの
import { useFonts } from "expo-font";

import fontData from "../../assets/fonts/icomoon.ttf";
import fontSelection from "../../assets/fonts/selection.json";

const CustomIcon = createIconSetFromIcoMoon(fontSelection, "IcoMoon", "Icomoon.ttf");

interface Props {
  name: string;
  size: number;
  color: string;
}

const Icon = (props: Props): JSX.Element | null => {
  const [fontsLoaded] = useFonts({
    IcoMoon: fontData,
  });

  if (!fontsLoaded) {
    return null;
  }
  return <CustomIcon {...props} />;
};

export default Icon;
