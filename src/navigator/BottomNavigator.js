import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SharePhoto from '../pages/SharePhoto';
import Map from '../pages/Map';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

const BottomNavigator=()=>{

    return(
        <Tab.Navigator>
            <Tab.Screen name='SharePhoto' component={SharePhoto}/>
            <Tab.Screen name='Map' component={Map}/>
            <Tab.Screen name='Profile' component={Profile}/>
        </Tab.Navigator>
    )
}
export default BottomNavigator;