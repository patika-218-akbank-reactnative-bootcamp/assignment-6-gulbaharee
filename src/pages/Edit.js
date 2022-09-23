import React from "react";
import { View, StyleSheet,Dimensions } from "react-native";
import Button from "../components/button";
import Header from "../components/header";
import Input from "../components/input";
import Profile from "./Profile";
import {useSelector,useDispatch} from 'react-redux';
import { useNavigation } from "@react-navigation/native";
const screenHeight= Dimensions.get('screen').height;

const Edit = () => {
    const { goBack } = useNavigation();
    const theme = useSelector(state=>state.theme.activeTheme);
  return (
    <View>
      <Header title="Edit" goback={true} onPress={() => goBack("Profile")} />
      <View
        style={[styles.container, { backgroundColor: theme.backgroundColor }]}
      >
        <Input placeholder='username'/>
        <Input placeholder='email'/>
        <Input placeholder='password'/>
        <Button placeholder='Save'/>
      </View>
    </View>
  );
};

export default Edit;
const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        height:screenHeight,
    }
})