import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/login';
import Signup from '../screens/signup';
import Splash from '../screens/splashscreen';
import Home from '../screens/Home'

const Stack = createStackNavigator();

const RootStackScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SplashScreen" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name="LoginScreen" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignUpScreen" component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStackScreen;