import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet } from "react-native";
import Header from "../components/header";
import Button from "../components/button";
import { app } from "../utils/firebase";
import { getFirestore, collection, setDoc, doc } from "firebase/firestore/lite";
import {useSelector } from 'react-redux';

const Photos = ({ route }) => {
  const { image } = route.params;
  const db = getFirestore(app);
  const activeUser = useSelector(state=>state.activeUser.registeredUser);
  const sendPhoto = () => {
    setDoc(doc(db, "users", activeUser.id), {
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
