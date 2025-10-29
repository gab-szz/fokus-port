import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import longImg from "../assets/images/long.png";
import pomodoroImg from "../assets/images/pomodoro.png";
import shortImg from "../assets/images/short.png";
import { ActionButton } from "./components/ActionButton";
import { FokusButton } from "./components/FokusButton";
import { Timer } from "./components/Timer";

const pomodoro = [
  { initialValue: 25, img: pomodoroImg, text: "Foco" },
  { initialValue: 5, img: shortImg, text: "Pausa curta" },
  { initialValue: 15, img: longImg, text: "pausa longa" },
];

export default function Pomodoro() {
  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue * 60); // Converte minutos para segundos
  const [timerRunning, setTimerRunning] = useState(false);
  const [activeButton, setActiveButton] = useState(0);

  const timerRef = useRef<null | number>(null);

  const clear = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  };

  const toggleTimerType = (newTimerType: (typeof pomodoro)[0]) => {
    clear();
    setTimerType(newTimerType);
    setSeconds(newTimerType.initialValue * 60); // Converte minutos para segundos
  };

  function definirBotaoAtivo(index: number) {
    console.log(`Botão ${index} pressionado`);
    setActiveButton(index);
    toggleTimerType(pomodoro[index]);
  }

  function toggleTime() {
    if (timerRef.current) {
      clear();
      return;
    }

    setTimerRunning(true);

    const id = setInterval(() => {
      setSeconds((oldState) => {
        if (oldState === 0) {
          clear();
          return timerType.initialValue * 60; // Reinicia o timer
        }
        return oldState - 1;
      });
    }, 1000);

    timerRef.current = id;
  }

  return (
    <SafeAreaView style={styles.container}>
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
        <Timer totalSeconds={seconds} />
        <FokusButton
          onPress={toggleTime}
          text={timerRunning ? "Pausar" : "Começar"}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>Desenvolvido por Alura.</Text>
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
