import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import Icon from "./Icon";
import { Link } from "expo-router";
import { type Memo } from "../../types/memo";
import { auth, db } from "../config";
import { deleteDoc, doc } from "firebase/firestore";

interface Props {
  memo: Memo;
}

const handlePressDelete = (id: string): void => {
  if (!auth.currentUser) {
    return;
  }
  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, String(id));
  Alert.alert("メモを削除します", "この操作はもとに戻せません", [
    {
      text: "キャンセル",
    },
    {
      text: "削除する",
      style: "destructive",
      onPress() {
        deleteDoc(ref).catch(() => Alert.alert("削除に失敗しました"));
      },
    },
  ]);
};

const MemoListItem = (props: Props): JSX.Element | null => {
  const { memo } = props;
  const { bodyText, updatedAt } = memo;
  if (!bodyText || !updatedAt) {
    return null;
  }
  const dateString = updatedAt.toDate().toLocaleString("ja-jp");
  return (
    <Link href={{ pathname: "/memo/detail", params: { id: memo.id } }} asChild>
      <TouchableOpacity style={styles.memoListItem}>
        <View>
          <Text numberOfLines={1} style={styles.memoListItemTitle}>
            {bodyText}
          </Text>
          <Text style={styles.memoListItemDate}>{dateString}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            handlePressDelete(memo.id);
          }}
        >
          <Icon name="delete" size={40} color="#878686" />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.15)",
  },

  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },

  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#878686",
  },
});

export default MemoListItem;
