import { ScrollView, StyleSheet, Text, View } from "react-native";

import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { router, useLocalSearchParams } from "expo-router";
import { type Memo } from "../../../types/memo";
import { useEffect, useState } from "react";
import { auth, db } from "../../config";
import { doc, onSnapshot } from "firebase/firestore";

const handlePressCircleButton = (): void => {
  router.push("/memo/edit");
};

const Detail = (): JSX.Element => {
  const { id } = useLocalSearchParams();
  const [memo, setMemo] = useState<Memo | null>(null);
  useEffect(() => {
    if (!auth.currentUser) {
      return;
    }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, String(id));
    // firestore の変更をかんし
    const unSubscribe = onSnapshot(ref, (memoDoc) => {
      const { bodyText, updatedAt } = memoDoc.data() as Memo;
      setMemo({
        id: memoDoc.id,
        bodyText,
        updatedAt,
      });
    });

    return unSubscribe;
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text numberOfLines={1} style={styles.memoTitle}>
          {memo?.bodyText}
        </Text>
        <Text style={styles.memoDate}>{memo?.updatedAt.toDate().toLocaleString("ja-jp")}</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>{memo?.bodyText}</Text>
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
    paddingHorizontal: 27,
  },

  memoBodyText: {
    paddingVertical: 32,
    fontSize: 16,
    lineHeight: 24,
    color: "#000000",
  },
});

export default Detail;
