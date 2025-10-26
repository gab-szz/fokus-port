import { Pressable, StyleSheet, Text } from "react-native";

interface FocusButtonProps {
  onPress: () => void;
  text: string;
}

export const FokusButton = ({ onPress, text }: FocusButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#B872FF",
    padding: 8,
    borderRadius: 32,
  },
  buttonText: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18,
  },
});
