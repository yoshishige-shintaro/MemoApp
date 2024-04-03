import { StyleSheet, TextInput, View, KeyboardAvoidingView } from "react-native";
import Header from "../../components/Header ";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";

const Create = (): JSX.Element => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      {/* ヘッダー */}
      <Header />

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} multiline value={""} />
      </View>

      <CircleButton>
        <Icon name="check" size={40} color="#ffffff" />
      </CircleButton>
    </KeyboardAvoidingView>
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
