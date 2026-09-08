import React from 'react';
import { View, StyleSheet ,Dimensions} from 'react-native';
import Colors from '../../constants/colors';

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}
const {width}= Dimensions.get("window");
const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginTop: width < 380 ? 18: 36,
    marginHorizontal: 24,
    backgroundColor: Colors.bg700,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.neon700,
    elevation: 8,
    shadowColor: Colors.neon500,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    shadowOpacity: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Card;