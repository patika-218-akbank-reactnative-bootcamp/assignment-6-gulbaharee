import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SharePhoto from '../pages/SharePhoto';
import Map from '../pages/Map';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

const BottomNavigator=()=>{

    return(
        <Tab.Navigator>
            <Tab.Screen name='Share Photo' options={{headerShown:false}} component={SharePhoto}/>
            <Tab.Screen name='Map' options={{headerShown:false}} component={Map}/>
            <Tab.Screen name='Profile' options={{headerShown:false}} component={Profile}/>
        </Tab.Navigator>
    )
}
export default BottomNavigator;