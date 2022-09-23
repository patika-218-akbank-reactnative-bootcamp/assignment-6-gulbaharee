import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "#fff1e6",
    alignItems:'center',
  },
  text: {
    fontSize: 20,
    marginTop:60,
  },
});
