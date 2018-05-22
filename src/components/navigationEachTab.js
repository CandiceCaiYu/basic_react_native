import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { TabBarBottom, createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details!</Text>
      </View>
    )
  }
}

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="go to details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    )
  }
}

class SettingScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button 
          title="go to details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    )
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
})

const SettingStack = createStackNavigator({
  Settings: SettingScreen,
  Details: DetailsScreen,
})

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if(routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`
        }else if(routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />
      }
    }),
    // tabBarComponent: TabBarBottom,
    // tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
)