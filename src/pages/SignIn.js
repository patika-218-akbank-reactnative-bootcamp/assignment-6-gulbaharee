import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Input from "../components/input";
import Button from "../components/button";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from '../utils/firebase';

const screenHeight = Dimensions.get("screen").height;

const SignIn = () => {
  const { navigate } = useNavigation();
  const auth = getAuth(app);

  const handleSubmit = () => {
    //firebase authentication
    signInWithEmailAndPassword(auth,email, password)
      .then(() => {
        navigate('Home');
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Input placeholder="username" onChangeText={(text) => (email = text)} />
        <Input
          placeholder="password"
          onChangeText={(text) => (password = text)}
        />
        <Button placeholder="Sign In" onPress={handleSubmit} />
        <Button placeholder="Sign Up" onPress={() => navigate("Sign Up")} />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    backgroundColor: "#fae1dd",
  },
  innerContainer: {
    alignItems: "center",
    marginTop: 300,
  },
});
