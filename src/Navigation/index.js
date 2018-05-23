import React, { Component } from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import Logo from '../components/logo'
import Home from '../components/home'
import AllComponents from '../components/allComponents'
import CheckBox from '../components/checkbox'

export default createBottomTabNavigator(
  {
    Logo,
    Home,
    AllComponents,
    CheckBox,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if(routeName === 'Home') {
          iconName = 'home';
        }else if(routeName === 'Logo') {
          iconName = 'music'
        }else if(routeName === 'AllComponents') {
          iconName = 'tag'
        }else if(routeName === 'CheckBox') {
          iconName = 'flag'
        }
        return <Icon name={iconName} size={25} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }
  }
)