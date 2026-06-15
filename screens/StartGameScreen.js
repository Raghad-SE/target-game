import { StyleSheet, View, TextInput, Alert, Text } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../componentes/ui/primaryButton";
import Colors from "../constants/colors";
import Title from "../componentes/ui/Title";
import Card from "../componentes/ui/Card";
import InstructionText from "../componentes/ui/InstructionText";

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Enter a number between 1 and 99.", [
        { text: "Got it!", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.iconContainer}>
        <Ionicons name="game-controller" size={64} color={Colors.neon500} />
      </View>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Pick a number</InstructionText>
        <Text style={styles.range}>between 1 – 99</Text>
        <TextInput
          placeholder="??"
          placeholderTextColor={Colors.neon700}
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 60,
    alignItems: "center",
  },
  iconContainer: {
    marginBottom: 4,
  },
  range: {
    fontFamily: "open-sans",
    color: Colors.neon600,
    fontSize: 14,
    letterSpacing: 1,
    marginBottom: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    width: 100,
    fontSize: 38,
    marginVertical: 10,
    borderBottomColor: Colors.neon500,
    borderBottomWidth: 2,
    color: Colors.neon500,
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
});

