import React, { Component } from 'react';
import Search from './Search';
import Result from './Result';

import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const HomeNavigator = createStackNavigator({
    Search: {
        screen: Search,
        path: '/'
      },
      Result: {
          screen: Result,
          path: '/result'
      }
});

const HomeContainer = createAppContainer(HomeNavigator);

export default class Home extends Component {

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./icons/home_white.png')}/>
        }
    }



    render() {
        return (
           <HomeContainer /> 
        )
    }
}

