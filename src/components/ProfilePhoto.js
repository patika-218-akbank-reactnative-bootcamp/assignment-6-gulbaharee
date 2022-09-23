import React from "react";
import { Image, StyleSheet, View } from "react-native";

const ProfilePhoto = ({URL}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: URL}}
        style={styles.image}
      />
    </View>
  );
};

export default ProfilePhoto;

const styles = StyleSheet.create({
  image: {
    height: 140,
    width: 140,
    borderRadius: 70,
  },
  container: {
    marginTop:50,
    alignItems: "center",
  },
});
