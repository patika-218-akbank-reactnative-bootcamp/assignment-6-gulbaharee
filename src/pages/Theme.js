import React from "react";
import { View, StyleSheet,Dimensions } from "react-native";
import Button from "../components/button";
import Header from "../components/header";
import { useNavigation } from "@react-navigation/native";
import {toggleTheme} from '../store/themeSlice';
import {useSelector,useDispatch} from 'react-redux';

const screenHeight= Dimensions.get('screen').height;

const Theme = () => {
  const { goBack } = useNavigation();
    const dispatch = useDispatch();
    const theme = useSelector(state=>state.theme.activeTheme);


  return (
    <View>
      <Header title="Theme" goback={true} onPress={() => goBack("Profile")} />
      <View style={[styles.container,{backgroundColor: theme.backgroundColor}]}>
        <Button placeholder="Change Theme" onPress={()=>dispatch(toggleTheme())}/>
      </View>
    </View>
  );
};

export default Theme;

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        height:screenHeight,
    }
})
