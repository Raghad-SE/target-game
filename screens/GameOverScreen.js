import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Title from "../componentes/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../componentes/ui/primaryButton";

function GameOverScreen({ userNumber, roundsNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Victory!</Title>
      <View style={styles.trophyContainer}>
        <Ionicons name="trophy" size={60} color={Colors.warning500} />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statsLabel}>YOUR NUMBER</Text>
          <Text style={styles.statsValue}>{userNumber}</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statCard}>
          <Text style={styles.statsLabel}>ROUNDS TAKEN</Text>
          <Text style={styles.statsValue}>{roundsNumber}</Text>
        </View>
      </View>
      <Text style={styles.summaryText}>
        The CPU cracked your number{" "}
        <Text style={styles.highlight}>{userNumber}</Text> in{" "}
        <Text style={styles.highlight}>{roundsNumber}</Text> rounds!
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Play Again</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  trophyContainer: {
    marginVertical: 8,
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: Colors.neon500,
    overflow: "hidden",
    marginVertical: 16,
    elevation: 6,
    shadowColor: Colors.neon500,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 16,
    shadowOpacity: 0.5,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
    backgroundColor: Colors.bg700,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.neon700,
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: "90%",
  },
  statCard: {
    flex: 1,
    alignItems: "center",
  },
  statDivider: {
    width: 1,
    height: "80%",
    backgroundColor: Colors.neon700,
    marginHorizontal: 12,
  },
  statsLabel: {
    fontFamily: "open-sans",
    color: "white",
    fontSize: 11,
    letterSpacing: 3,
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 6,
  },
  statsValue: {
    fontFamily: "open-sans-bold",
    color: Colors.warning500,
    fontSize: 36,
    textAlign: "center",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.neon500,
  },
});

export default GameOverScreen;

