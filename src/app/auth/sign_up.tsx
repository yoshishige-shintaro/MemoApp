import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import Button from "../../components/Button";
import { Link, router } from "expo-router";
import { useState } from "react";

const handlePress = (): void => {
  // 会員登録
  router.replace("/memo/list");
};

const SignUp = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          placeholder="email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          placeholder="password"
          autoCapitalize="none"
          secureTextEntry
          textContentType="password"
        />
        <Button label="Submit" onPress={handlePress} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <Link href={"/auth/login"} asChild>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Log In!</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },

  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },

  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },

  input: {
    borderWidth: 1,
    borderColor: "#dddddd",
    backgroundColor: "#ffffff",
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },

  footer: {
    flexDirection: "row",
  },

  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },

  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: "#46F7D3",
  },
});

export default SignUp;
