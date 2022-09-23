import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ title, goback, onPress }) => {
  return (
    <View style={goback ? styles.containerWithIcon : styles.container}>
      {goback ? (
        <Ionicons
          name="chevron-back"
          style={styles.icon}
          size={24}
          color="black"
          onPress={onPress}
        />
      ) : null}
      <Text style={goback ? styles.textWithIcon : styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "#fff1e6",
    alignItems: "center",
  },
  containerWithIcon: {
    height: 100,
    backgroundColor: "#fff1e6",
    display:'flex',
    flexDirection:'row',
  },
  text: {
    fontSize: 20,
    marginTop: 60,
  },
  textWithIcon: {
    fontSize: 20,
    marginTop: 60,
    marginLeft:140,
  },
  icon: {
    marginTop:60,
  },
});
