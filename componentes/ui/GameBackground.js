import React, { useMemo } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const { width, height } = Dimensions.get("window");

const NUMBERS = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  value: Math.floor(Math.random() * 99) + 1,
  top: Math.random() * height,
  left: Math.random() * width,
  size: Math.random() * 18 + 10,
  opacity: Math.random() * 0.12 + 0.04,
}));

function GameBackground() {
  const items = useMemo(() => NUMBERS, []);

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {items.map((item) => (
        <Text
          key={item.id}
          style={[
            styles.number,
            {
              top: item.top,
              left: item.left,
              fontSize: item.size,
              opacity: item.opacity,
            },
          ]}
        >
          {item.value}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  number: {
    position: "absolute",
    color: Colors.neon500,
    fontFamily: "open-sans-bold",
  },
});

export default GameBackground;
