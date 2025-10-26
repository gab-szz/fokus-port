import { Pressable, StyleSheet, Text } from "react-native";

interface ActionButtonProps {
  active: boolean;
  onPress: (index: number) => void;
  text: string;
  index: number;
}

export const ActionButton = ({
  active,
  onPress,
  text,
  index,
}: ActionButtonProps) => {
  return (
    <Pressable
      onPress={() => onPress(index)}
      style={active ? styles.contextButtonActive : undefined}
    >
      <Text style={styles.contextButtonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contextButtonText: {
    fontSize: 12.5,
    color: "#FFF",
    padding: 8,
  },
  contextButtonActive: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },
});
