import React from "react";
import { View,Pressable,Text,Dimensions,StyleSheet } from "react-native";

const screen_Width = Dimensions.get("screen").width;

const Button = ({ onPress, placeholder }) => {
    return(
        <Pressable onPress={onPress}>
            <View style={styles.buttonStyle}><Text style={styles.text}>{placeholder}</Text></View>
        </Pressable>
    )
};

export default Button;

const styles = StyleSheet.create({
    buttonStyle: {
        borderWidth:0.5,
        borderColor:'grey',
        width:300,
        borderRadius:10,
        height:40,
        marginTop:20,
        backgroundColor:'#98c1d9',
        
    },
    text:{
        fontSize:20,
        textAlign:'center',
    }
  });