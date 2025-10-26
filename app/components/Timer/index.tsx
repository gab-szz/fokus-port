import { StyleSheet, Text } from "react-native";

interface TimerProps {
  totalSeconds: number;
}

export const Timer = ({ totalSeconds }: TimerProps) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    <Text style={styles.timer}>
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </Text>
  );
};

const styles = StyleSheet.create({
  timer: {
    fontSize: 54,
    color: "#FFF",
    textAlign: "center",
  },
});
