import { StyleSheet, View, TextInput, Alert, Text, Dimensions
  ,ScrollView,useWindowDimensions, KeyboardAvoidingView } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../componentes/ui/primaryButton";
import Colors from "../constants/colors";
import Title from "../componentes/ui/Title";
import Card from "../componentes/ui/Card";
import InstructionText from "../componentes/ui/InstructionText";

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    console.log('StartGameScreen mounted');
  }, []);
  function numberInputHandler(enteredText) {
    console.log('enteredText', enteredText)
    setEnteredNumber(enteredText);
  }

  function confirmInputHandler() {
    console.log('confirmInputHandler called');
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
    console.log('resetInputHandler called');
    setEnteredNumber("");
  }

  const marginTopDistance = height < 380 ? 40 : 100;

  return (
    // ScrollView must be the OUTER wrapper so it gets a bounded height from
    // SafeAreaView. KeyboardAvoidingView goes inside; on iOS "position" shifts
    // the content up when the keyboard opens.
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.screenContent}
      keyboardShouldPersistTaps="handled"
    >
      {/* <KeyboardAvoidingView style={styles.screen} behavior="position"> */}
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
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
      {/* </KeyboardAvoidingView> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenContent: {
    flexGrow: 1,
  },
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

