import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/header";
import ProfilePhoto from "../components/ProfilePhoto";
import Button from "../components/button";
import { useNavigation } from "@react-navigation/native";
import {useSelector } from 'react-redux';
const Profile = () => {
  const { navigate } = useNavigation();
  const user = useSelector(state=>state.user.registeredUser);
  console.log(user);
  return (
    <View>
      <Header title="Profile" />
      <ProfilePhoto URL={"https://picsum.photos/200/200"} />
      <View style={styles.buttonContainer}>
        <Button placeholder="Setting" onPress={()=>navigate('Edit')}/>
        <Button placeholder="Theme" onPress={()=>navigate('Theme')}/>
        <Button placeholder="Log Out" />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    marginTop: 40,
  },
});
