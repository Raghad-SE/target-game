import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../componentes/ui/Title";
import NumberContainer from "../componentes/game/NumberContainer";
import { useState, useEffect } from "react";
import PrimaryButton from "../componentes/ui/primaryButton";
import Card from "../componentes/ui/Card";
import InstructionText from "../componentes/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../componentes/game/GuessLogItem";
import Colors from "../constants/colors";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currrentGuess, setCurrrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currrentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currrentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currrentGuess < userNumber) ||
      (direction === "higher" && currrentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currrentGuess;
    } else {
      minBoundary = currrentGuess + 1;
    }
    const newGuess = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currrentGuess,
    );
    setCurrrentGuess(newGuess);
    setGuessRounds((prevGuessRounds) => [newGuess,...prevGuessRounds]);
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currrentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="arrow-down-circle" size={26} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="arrow-up-circle" size={26} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Guess History</Text>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => (
            <GuessLogItem roundNumber={guessRounds.length - index} guess={item} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 4,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  listTitle: {
    fontFamily: "open-sans-bold",
    color: Colors.neon600,
    fontSize: 13,
    letterSpacing: 3,
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 8,
  },
});

export default GameScreen;

