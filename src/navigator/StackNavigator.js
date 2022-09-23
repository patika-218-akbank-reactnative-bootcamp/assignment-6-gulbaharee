import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Photos from "../pages/Photos";
import Camera from "../pages/Camera";
import Theme from "../pages/Theme";
import Edit from '../pages/Edit';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Sign In"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Photos" component={Photos} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Edit" options={{headerShown:false}} component={Edit} />
        <Stack.Screen name="Theme" options={{headerShown:false}} component={Theme} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
