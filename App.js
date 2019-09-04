import React from 'react';

import { View, StatusBar } from "react-native";

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import About from "./components/About";
import Home from "./components/Home";



const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    path: '/',
    navigationOptions: () => ({
      title: "Home page"
    })
  },
  About: {
    screen: About,
    path: '/about',
    navigationOptions: () => ({
      title: "About page"
    })
  }
}, {
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: 'white',
    showLabel: false,
    labelStyle: {
      fontSize: 16,
      paddingBottom: 15
    },
    style: {
      backgroundColor: '#74d2ff',
      color: 'black',
    },
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render(){
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
        <AppContainer/>
      </View>
    )
  }
};