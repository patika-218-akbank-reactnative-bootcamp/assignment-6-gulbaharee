import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Input from "../components/input";
import Button from "../components/button";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const screenHeight = Dimensions.get("screen").height;

const SignUp = () => {

  const auth = getAuth();

  const handleSubmit = () => {
    //firebase authentication
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })

      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
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
      </View>
    </View>
  );
};

export default SignUp;

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
