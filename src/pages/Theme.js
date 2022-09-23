import React from "react";
import { View,Text } from "react-native";
import Button from "../components/button";
import Header from "../components/header";
import {useNavigation} from "@react-navigation/native";


const Theme=()=>{
    const {goBack} = useNavigation();

    return(
        <View>
           <Header title="Theme" goback={true} onPress={()=>goBack('Profile')}/>
        </View>
    )
}

export default Theme;