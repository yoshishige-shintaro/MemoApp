import { StyleSheet, TextInput, View, KeyboardAvoidingView, Alert } from "react-native";

import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../../config";
import KeyboardSafeView from "../../components/KeybordAvoidingView";

const handlePressCircleButton = (id: string, bodyText: string): void => {
  if (!auth.currentUser) {
    return;
  }
  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);
  setDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date()),
  })
    .then(() => {
      router.back();
    })
    .catch(() => {
      Alert.alert("更新に失敗しました");
    });
};

const Edit = (): JSX.Element => {
  const id = String(useLocalSearchParams().id);

  const [bodyText, setBodyText] = useState("");
  useEffect(() => {
    if (!auth.currentUser) {
      return;
    }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);
    getDoc(ref)
      .then((doc): void => {
        const remoteBodyText = doc?.data()?.bodyText;
        setBodyText(remoteBodyText);
      })
      .catch((err) => {
        Alert.alert(err.message);
      });
  }, []);
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          autoFocus
          style={styles.input}
          multiline
          value={bodyText}
          onChangeText={(text) => {
            setBodyText(text);
          }}
        />
      </View>

      <CircleButton
        onPress={() => {
          handlePressCircleButton(id, bodyText);
        }}
      >
        <Icon name="check" size={40} color="#ffffff" />
      </CircleButton>
    </KeyboardSafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inputContainer: {
    paddingVertical: 32,
    flex: 1,
  },

  input: {
    paddingHorizontal: 27,
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Edit;
