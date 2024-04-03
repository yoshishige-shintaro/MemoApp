import { FlatList, StyleSheet, Text, View } from "react-native";
import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { router, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import LogoutButton from "../../components/LogoutButton";
import { auth, db } from "../../config";
import {
  collection,
  connectFirestoreEmulator,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { Memo } from "../../../types/memo";

const handlePressCircleButton = (): void => {
  router.push("/memo/create");
};

const List = (): JSX.Element => {
  const [memos, setMemos] = useState<Memo[]>([]);
  useEffect(() => {
    if (!auth.currentUser) {
      return;
    }
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`);
    const q = query(ref, orderBy("updatedAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapShot): void => {
      const remoteMemos: Memo[] = [];
      snapShot.forEach((doc) => {
        const { bodyText, updatedAt } = doc.data();
        remoteMemos.push({
          id: doc.id,
          bodyText,
          updatedAt,
        });
      });
      setMemos(remoteMemos);
    });

    return unsubscribe;
  }, []);

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
      <FlatList data={memos} renderItem={({ item }) => <MemoListItem memo={item} />} />

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
