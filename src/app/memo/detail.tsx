import { ScrollView, StyleSheet, Text, View } from "react-native";

import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { router } from "expo-router";

const handlePressCircleButton = (): void => {
  router.push("/memo/edit");
};

const Detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2023年10月1日 10:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          買い物リスト たくさん買います。たくさん買います。 たくさん買います。たくさん買います。
          たくさん買います。たくさん買います。 たくさん買います。たくさん買います。
          たくさん買います。たくさん買います。 たくさん買います。たくさん買います。
          たくさん買います。 たくさん買います。
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 60, bottom: "auto" }} onPress={handlePressCircleButton}>
        <Icon name="pencil" size={40} color="#ffffff" />
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
    height: 96,
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 19,
  },

  memoTitle: {
    color: "#ffffff",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
  },

  memoDate: {
    color: "#ffffff",
    fontSize: 12,
    lineHeight: 16,
  },

  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },

  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#000000",
  },
});

export default Detail;
