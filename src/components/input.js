import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Input = ({ placeholder, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputs}
        placeholder={placeholder}
        onChangeText={onChangeText}
        autoCapitalize="none"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputs: {
    borderWidth: 0.5,
    width: 300,
    borderRadius: 10,
    height: 40,
    textAlign: "center",
    backgroundColor: "#f8edeb",
  },
  container: {
    marginBottom: 20,
  },
});
