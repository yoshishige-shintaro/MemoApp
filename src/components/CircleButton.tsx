import { StyleSheet, Text, View, TouchableOpacity, type ViewStyle } from "react-native";

interface Props {
  children: JSX.Element;
  style?: ViewStyle;
}

const CircleButton = (props: Props) => {
  const { children, style } = props;
  return (
    <TouchableOpacity style={[styles.circleButton, style]}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default CircleButton;
