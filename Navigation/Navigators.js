import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../colors/Colors'

import Login from '../screens/login';
import Signup from '../screens/signup';
import Splash from '../screens/splashscreen';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import Appointments from '../screens/Appointments';
import Cpr from '../screens/Cpr';
import Message from '../screens/Message';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Filter from '../screens/Filters';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MyTabs = () =>

    <Tab.Navigator
        activeColor={Colors.primaryColor}
        inactiveColor='white'
        barStyle={{ backgroundColor: 'white' }}
    >
        <Tab.Screen name="Home"
            component={Home}
            options={{
                tabBarColor: Colors.accentColor,
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={26} />
                ),

            }}
        />
        <Tab.Screen name="Message"
            component={Message}
            options={{
                tabBarColor: Colors.accentColor,
                tabBarLabel: 'Message',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name='message-bulleted' size={26} color={color} />
                ),

            }}
        />
        <Tab.Screen name="Cpr"
            component={Cpr}
            options={{
                tabBarColor: Colors.accentColor,
                tabBarLabel: 'Cpr',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name='medical-bag' size={26} color={color} />
                ),

            }}
        />
        <Tab.Screen name="Appoint"
            component={Appointments}
            options={{
                tabBarColor: Colors.accentColor,
                tabBarLabel: 'Appointments',
                tabBarIcon: ({ color }) => (
                    
                    <MaterialCommunityIcons name='clock-time-seven-outline' size={26} color={color} />
                ),

            }}
        />
    </Tab.Navigator>


const RootStackScreen = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name="SplashScreen" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name="LoginScreen" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignUpScreen" component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        
    );
};

const MainNavigator = createDrawerNavigator();
const CustomDrawer = () =>
    <NavigationContainer>
        <MainNavigator.Navigator 
        drawerContentOptions={{
          activeTintColor: Colors.primaryColor,
        }}>
        
            <MainNavigator.Screen
                name="MainScreen"
                component={RootStackScreen}
                
                options={{
                    drawerLabel: 'Meals',
                    drawerIcon: () => <Icon name="ios-home-outline" size={26} />,
                    
                }} />
            
            <MainNavigator.Screen 
            name="Filter" 
            component={Filter} 
            options={{ 
                drawerIcon: () => <Icon name="ios-filter" size={26} />,
                activeTintColor: Colors.primaryColor,
                }} />

        </MainNavigator.Navigator>
    </NavigationContainer>
    

export default CustomDrawer;