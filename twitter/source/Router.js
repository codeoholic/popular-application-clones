import React, { Component } from 'react';
import { Image } from 'react-native';
import { Easing, Animated, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    
    Home,
    
    Splash

} from './screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


{/*<Stack.Navigator initialRouteName="Splash" screenOptions={{ gestureEnabled: true }}>
    <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false, animationEnabled: false }}
    />
    <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, animationEnabled: false }}
    />
</Stack.Navigator>*/}


function NavStack() {
    return (
        <Tab.Navigator tabBarOptions={{ showLabel: false, activeTintColor: "#3C2F8E", inactiveTintColor: "#555" }} initialRouteName="Splash">
            <Tab.Screen
                name="Home"
                component={ Home }
                options={{
                    tabBarIcon: ({color}) => (
                        <Image source={require("./assets/home.png")} style={{ width: 20, height: 20 }}/>
                    )
                }} 
            />
            <Tab.Screen
                name="Splash"
                component={ Splash }
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <NavStack />
        </NavigationContainer>
    );
}
