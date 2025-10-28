import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Link href={"/pomodoro" as any}>
        <Text>Go to Pomodoro</Text>
      </Link>
      <Text>Home Screen</Text>
    </View>
  );
}
