import { StyleSheet, Text, View } from "react-native";
import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { router, useNavigation } from "expo-router";
import { useEffect } from "react";
import LogoutButton from "../../components/LogoutButton";

const handlePressCircleButton = (): void => {
  router.push("/memo/create");
};

const List = (): JSX.Element => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <LogoutButton />;
      },
    });
  }, []);

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
