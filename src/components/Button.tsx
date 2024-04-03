import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  label: string;
  onPress?: () => void;
}

const Button = (props: Props): JSX.Element => {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#80D1FF",
    borderRadius: 24,
    alignSelf: "flex-start",
    marginBottom: 24,
  },

  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: "#ffffff",
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
});

export default Button;
