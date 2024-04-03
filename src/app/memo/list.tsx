import { StyleSheet, View } from "react-native";
import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { router } from "expo-router";

const handlePressCircleButton = (): void => {
  router.push("/memo/create");
};

const List = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* メモリスト */}
      <View>
        {[1, 2, 3, 4, 5].map(() => {
          return <MemoListItem />;
        })}
      </View>

      {/* サークルボタン */}
      <CircleButton onPress={handlePressCircleButton}>
        <Icon name="plus" size={40} color="#ffffff" />
      </CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  memoHeader: {
    backgroundColor: "#80D1FF",
  },
});

export default List;
