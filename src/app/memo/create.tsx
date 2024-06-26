import { StyleSheet, TextInput, View } from "react-native";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { router } from "expo-router";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { auth, db } from "../../config";
import { useState } from "react";
import KeyboardSafeView from "../../components/KeybordAvoidingView";

const handlePressCircleButton = (bodyText: string): void => {
  if (!auth.currentUser) {
    return;
  }
  const ref = collection(db, `users/${auth.currentUser.uid}/memos`);
  addDoc(ref, {
    title: "",
    bodyText,
    updatedAt: Timestamp.fromDate(new Date()),
  })
    .then((docRef) => {
      console.log(docRef.id);
      router.back();
    })
    .catch((err) => {
      console.log(err);
    });
};

const Create = (): JSX.Element => {
  const [bodyText, setBodyText] = useState("");
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setBodyText(text);
          }}
          multiline
          value={bodyText}
          autoFocus
        />
      </View>

      <CircleButton
        onPress={() => {
          handlePressCircleButton(bodyText);
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
    paddingHorizontal: 27,
    flex: 1,
  },

  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Create;
