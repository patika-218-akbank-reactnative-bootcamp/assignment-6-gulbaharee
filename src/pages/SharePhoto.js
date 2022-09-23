import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/header";
import Button from "../components/button";
import { useNavigation } from "@react-navigation/native";

const SharePhoto = () => {
  const {navigate} = useNavigation();

  return (
    <View>
      <Header title="Share Photo" />
      <View style={styles.container}>
        <Button
          placeholder="Select From Library"
          onPress={() => navigate("Photos")}
        />
        <Button placeholder="Open Camera" onPress={() => navigate("Camera")} />
      </View>
    </View>
  );
};

export default SharePhoto;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
