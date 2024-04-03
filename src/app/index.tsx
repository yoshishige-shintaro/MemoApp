import { StyleSheet } from "react-native";

import { Redirect, router } from "expo-router";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const Index = (): JSX.Element => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // ユーザーが存在しない場合は早期リターン
      if (!user) {
        return;
      }

      router.replace("memo/list");
    });
  }, []);

  return <Redirect href={"auth/login"} />;
};

const styles = StyleSheet.create({});

export default Index;
