import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';


const Stack = createNativeStackNavigator();

const StackNavigator = ()=>{
    

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Sign In" component={SignIn} options={{headerShown:false}}/>
                <Stack.Screen name='Sign Up' component={SignUp} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;