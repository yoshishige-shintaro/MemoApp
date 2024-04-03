import { StyleSheet } from "react-native";

import { Redirect } from "expo-router";

const Index = (): JSX.Element => {
  return <Redirect href={"auth/sign_up"} />;
};

const styles = StyleSheet.create({});

export default Index;
