import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet } from "react-native";
import Header from "../components/header";
import Button from "../components/button";
import { app } from "../utils/firebase";
import { getFirestore, collection, setDoc, doc } from "firebase/firestore/lite";

const Photos = ({ route }) => {
  const { image } = route.params;
  const db = getFirestore(app);

  const sendPhoto = () => {
    setDoc(doc(db, "users", response.user.uid), {
      image:image,
    });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Button placeholder="Send" />
    </View>
  );
};

export default Photos;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    marginTop: 20,
    marginBottom: 40,
    height: 300,
    width: 300,
  },
});
