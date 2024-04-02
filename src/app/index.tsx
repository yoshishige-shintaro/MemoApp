import { StyleSheet, View } from "react-native";
import Header from "../components/Header ";
import MemoListItem from "../components/MemoListItem";
import CircleButton from "../components/CircleButton";

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* ヘッダー */}
      <Header />

      {/* メモリスト */}
      <View>
        {[1, 2, 3, 4, 5].map(() => {
          return <MemoListItem />;
        })}
      </View>

      {/* サークルボタン */}
      <CircleButton>+</CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export default Index;
