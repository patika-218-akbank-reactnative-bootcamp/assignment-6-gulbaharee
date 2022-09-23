import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Input from "../components/input";
import Button from "../components/button";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, setDoc, doc } from "firebase/firestore/lite";
import { app } from "../utils/firebase";
import { useNavigation } from "@react-navigation/native";
import {useSelector } from 'react-redux';

const screenHeight = Dimensions.get("screen").height;

const SignUp = () => {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const { navigate } = useNavigation();
  const theme = useSelector(state=>state.theme.activeTheme);
  const handleSubmit = () => {
    //firebase authentication
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (response) => {
        await setDoc(doc(db, "users", response.user.uid), {
          email: email,
          password: password,
          username: username,
          id:response.user.uid,
        });
        navigate("Sign In");
      })

      .catch((error) => console.log(error.message));
  };

  return (
    <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
      <View style={styles.innerContainer}>
        <Input
          placeholder="username"
          onChangeText={(text) => (username = text)}
        />
        <Input placeholder="e-mail" onChangeText={(text) => (email = text)} />
        <Input
          placeholder="password"
          onChangeText={(text) => (password = text)}
        />
        <Button placeholder="Sign Up" onPress={handleSubmit} />
        <Button placeholder="Sign In" onPress={()=>navigate('Sign In')} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
  },
  innerContainer: {
    alignItems: "center",
    marginTop: 300,
  },
});
