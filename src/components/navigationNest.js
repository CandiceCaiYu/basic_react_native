import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class LogoTitle extends Component {
  render() {
    return (
      <Image 
        source={require("../../img/1.jpg")}
        style={{ width: 30, height: 30 }}
      />
    )
  }
}

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: <LogoTitle />,
      headerLeft: (
        <Button 
          onPress={() => navigation.navigate('myModal')}
          title='Info'
          color='#000'
        />
      ),
      headerRight: (
        <Button
          onPress={ () => params.increaseCount } 
          title='+1'
          color='#f0f'
        />
      )
    }
  }
  componentWillMount() {
    this.props.navigation.setParams({
      increaseCount: this._increaseCount
    })
  }
  state = {
    count: 0,
  }
  _increaseCount = () => {
    this.setState({
      count: this.state.count+1
    })
  }
  render() {
    return (
      <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>Count: {this.state.count}</Text>
        <Button 
          title='Go to Details'
          onPress={() => {
            this.props.navigation.push('Details', {
              itemId: 86,
              otherParam: 'First Details'
            })
          }}
        />
      </View>
    )
  }
}

class DetailsScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.otherParam : 'A nested detail screen',
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    }
  }
  render() {
    const { params } = this.props.navigation.state
    const itemId = params ? params.itemId : null
    const otherParam = params ? params.otherParam: null
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail Screen</Text>
        <Text>itemId: { JSON.stringify(itemId) }</Text>
        <Text>otherParam: { JSON.stringify(otherParam) }</Text>
        <Button 
          title="Update the title"
          onPress={() => this.props.navigation.setParams({ otherParam: 'Updated' })}
        />
        <Button 
          title="Go to Details......again"
          onPress={() => this.props.navigation.push('Details',{
            itemId: 666,
            otherParam: 'Second Details'
          })}
        />
        <Button 
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        
      </View>
    )
  }
}

class ModalScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a Modal</Text>
        <Button 
          title='Dismiss'
          onPress={ () => this.props.navigation.goBack() }
        />
      </View>
    )
  }
}

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f00',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
)

const RootStack = createStackNavigator(
  {
    Main: MainStack,
    MyModal: ModalScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

export default class NavigationNest extends Component {
  render() {
    return <RootStack />
  }
}