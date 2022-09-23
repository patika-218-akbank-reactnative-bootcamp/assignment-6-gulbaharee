import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Input from "../components/input";
import Button from "../components/button";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from '../utils/firebase';
import {useSelector,useDispatch } from 'react-redux';
import { setUser } from "../store/userSlice";
import {doc, getDoc,getFirestore} from 'firebase/firestore';

const screenHeight = Dimensions.get("screen").height;

const SignIn = () => {
  const { navigate } = useNavigation();
  const auth = getAuth(app);
  const db = getFirestore(app);
  const dispatch = useDispatch();
  const activeUser = useSelector(state=>state.activeUser.registeredUser);

  const handleSubmit = () => {
    
    //firebase authentication
    signInWithEmailAndPassword(auth,email, password)
      .then(async response=> {
        const userRef=await getDoc(doc(db,'users',response.user.uid));
        if(userRef.exists()){
          console.log(userRef.data());
          dispatch(setUser(userRef.data()));
          console.log(activeUser);
        }
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
