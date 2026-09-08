import React from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import Colors from '../../constants/colors';

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>CPU GUESS</Text>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: Colors.neon500,
    paddingHorizontal: width < 380 ? 12 : 36,
    paddingVertical: 20,
    margin: 20,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.bg800,
    elevation: 6,
    shadowColor: Colors.neon500,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 14,
    shadowOpacity: 0.4,
  },
  label: {
    fontFamily: 'open-sans',
    color: Colors.neon600,
    fontSize: 11,
    letterSpacing: 4,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  number: {
    color: Colors.neon500,
    fontSize: 52,
    fontFamily: 'open-sans-bold',
  },
});

export default NumberContainer;