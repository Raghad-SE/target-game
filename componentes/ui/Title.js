import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: Colors.neon500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.neon500,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginVertical: 16,
    borderRadius: 8,
    textTransform: "uppercase",
    letterSpacing: 3,
  },
});
export default Title;
