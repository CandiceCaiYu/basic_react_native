import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator, createMaterialTopTabNavigator, createMaterialBottomTabNavigator } from 'react-navigation'
// import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen!</Text>
        <View style={{ width: 30, height: 30 }}>
          <FontAwesome name="music" size={30} color="#900" />
        </View>
      </View>
    )
  }
}

class SettingScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Setting Screen!</Text>
      </View>
    )
  }
}

/*
头部
*/
// export default createMaterialTopTabNavigator({
//   Home: HomeScreen,
//   Setting: SettingScreen,
// })

export default createBottomTabNavigator(
  {
    Home: HomeScreen,
    Setting: SettingScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon:({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if(routeName === 'Home') {
          iconName = `ios-home${focused ? '':'-outline'}`
        }else if(routeName === 'Setting') {
          iconName = `ios-options${focused ? '' : '-outline'}`
        }
        return <FontAwesome name='music' size={25} color={tintColor} />
      }
    }),
    // tabBarComponent: TabBarBottom,
    // tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    // animationEnabled: false,
    // swipeEnabled: false,
  }
)