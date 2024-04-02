import { StyleSheet, Text, View } from "react-native";

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>Memo App</Text>
          <Text style={styles.headerRight}>Logout</Text>
        </View>
      </View>

      <View>
        {[1, 2, 3, 4, 5].map(() => {
          return (
            <View style={styles.memoListItem}>
              <View>
                <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                <Text style={styles.memoListItemDate}>2023年10月1日 10:00</Text>
              </View>
              <View>
                <Text>X</Text>
              </View>
            </View>
          );
        })}
      </View>

      {/* + アイコン */}
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  header: {
    backgroundColor: "#80D1FF",
    height: 104,
    justifyContent: "flex-end",
  },

  headerInner: {
    alignItems: "center",
  },

  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: "bold",
    color: "#ffffff",
  },

  headerRight: {
    position: "absolute",
    right: 16,
    bottom: 16,
    color: "rgba(255,255,255,0.7)",
  },

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

  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#80D1FF",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 40,
    bottom: 40,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    // google のマテリアルデザインをもとにした、その要素がどのくらいの高さにいるかというもの。Android のスタイリングに対して行う
    elevation: 8,
  },

  circleButtonLabel: {
    color: "#ffffff",
    fontSize: 40,
    lineHeight: 48,
  },
});

export default Index;
