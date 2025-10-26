import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ActionButton } from "./components/ActionButton";
import { FokusButton } from "./components/FokusButton";
import longImg from "./long.png";
import pomodoroImg from "./pomodoro.png";
import shortImg from "./short.png";

const pomodoro = [
  { initialValue: 25, img: pomodoroImg, text: "Foco" },
  { initialValue: 5, img: shortImg, text: "Pausa curta" },
  { initialValue: 15, img: longImg, text: "pausa longa" },
];

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [activeButton, setActiveButton] = useState(0);

  function definirBotaoAtivo(index: number) {
    console.log(`Botão ${index} pressionado`);
    setActiveButton(index);
    setTimerType(pomodoro[index]);
  }

  return (
    <View style={styles.container}>
      <Image source={timerType.img} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map((button, index) => (
            <ActionButton
              key={index}
              onPress={definirBotaoAtivo}
              text={button.text}
              index={index}
              active={activeButton === index}
            />
          ))}
        </View>
        <Text style={styles.timer}>
          {new Date(timerType.initialValue * 1000).toLocaleTimeString("pt-BR", {
            minute: "2-digit",
            second: "2-digit",
          })}
        </Text>
        <FokusButton />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>Desenvolvido por Alura.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 80,
  },
  text: {
    color: "#FFF",
  },
  actions: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32,
  },
  timer: {
    fontSize: 54,
    color: "#FFF",
    textAlign: "center",
  },

  footer: {
    width: "80%",
  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5,
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
