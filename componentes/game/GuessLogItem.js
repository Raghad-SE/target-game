import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/colors";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <View style={styles.roundBadge}>
        <Text style={styles.roundText}>#{roundNumber}</Text>
      </View>
      <View style={styles.guessContainer}>
        <Ionicons name="game-controller-outline" size={16} color={Colors.neon500} />
        <Text style={styles.guessText}>{guess}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: Colors.bg700,
    borderLeftWidth: 4,
    borderLeftColor: Colors.neon500,
    borderRadius: 10,
    padding: 14,
    marginVertical: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
    shadowColor: Colors.neon500,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
  },
  roundBadge: {
    backgroundColor: Colors.bg600,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  roundText: {
    fontFamily: "open-sans-bold",
    color: Colors.warning500,
    fontSize: 14,
  },
  guessContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  guessText: {
    fontFamily: "open-sans-bold",
    color: Colors.neon500,
    fontSize: 20,
  },
});

export default GuessLogItem;


