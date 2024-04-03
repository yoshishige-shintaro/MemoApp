import { signOut } from "firebase/auth";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import { auth } from "../config";
import { router } from "expo-router";

const handlePress = (): void => {
  signOut(auth)
    .then(() => {
      router.replace("auth/login");
    })
    .catch(() => {
      Alert.alert("ログアウトに失敗しました");
    });
};

const LogoutButton = (): JSX.Element => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>ログアウト</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 24,
    color: "rgba(255,255,255,0.9)",
  },
});

export default LogoutButton;
