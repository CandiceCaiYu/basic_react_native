
import React, { Component } from 'react';
import { Text, View, YellowBox } from 'react-native';
import { createStackNavigator  } from 'react-navigation';
import Logo from './src/components/logo'
import Home from './src/components/home'
// import DetailPage2 from './src/components/detailPage2'

YellowBox.ignoreWarnings([ 'warning: isMounted(...)is deprecated', 'Module RCTImageLoader' ] )

const RootStack = createStackNavigator(
  {
    Logo: Logo,
    Home: Home,
    // DetailPage2,
  },
  {
    initialRouteName: 'Logo',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  },
  
)

export default class App extends Component {
  render() {
    return (
      <RootStack />
    )
  }
}

