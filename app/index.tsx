import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FokusButton } from "./components/FokusButton";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/images/logo.png")} />
      <View>
        <Text style={styles.title}>
          Otimize sua{"\n"}produtividade, {"\n"}
          <Text style={styles.bold}>mergulhe no que{"\n"}importa</Text>
        </Text>
        <Image source={require("../assets/images/home.png")} />
        <FokusButton
          text={"Quero iniciar!"}
          onPress={() => router.push("/pomodoro")}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>Desenvolvido por Gabriel Silvio.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  title: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 26,
  },
  bold: {
    fontWeight: "bold",
  },
  footer: {
    width: "80%",
  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5,
  },
  inner: {
    gap: 16,
  },
});
