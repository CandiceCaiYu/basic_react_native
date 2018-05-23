import React, { Component } from 'react'
import { createStackNavigation } from 'react-navigation'
import {
  View,
  Text,
  Image
} from 'react-native'
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

const users = [
  {
    name: 'Brynn',
    text: '了深刻的减肥路上看到就分开来说拉丝款减肥路上看到就付了款收到浪费时间对方离开时间到了福克斯老师肯定发了啥快递费',
    avatar: require('../../img/1.jpg')
  }
  
]


export default class allComponents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }
  render() {
    const buttons = ['Hello', 'World', 'Buttons']
    const { selectedIndex } = this.state
    return (
      <View>
        <Badge
          value={33}
          textStyle={{ color: '#fff' }}
          containerStyle={{ backgroundColor: 'violet' }}
          wrapperStyle={{ width: 50, height: 30 }}
          onPress={() => { console.log('pressed && value = 33') }}
        />
       <Button 
        title='BUTTON'
        loading
        loadingProps={{ size: "large", color: "rgba(111,202, 186,1)" }}
        titleStyle={{ fontWeight: "700" }}
        buttonStyle={{ 
          backgroundColor: "rgba(92,99,216,1)",
          width: 200,
          height: 45,
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 5,
        }}
        // disabled
        icon={{
          name:'airplay',
          size: 15,
          color: '#fff'
        }}
        // iconContainerStyle={{ width: 60, height: 60 }}
        containerStyle={{ marginTop: 20, marginLeft: 0 }}
        onPress={() => console.log('This is buuton')}
      />
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 50 }}
        buttonStyle={{ backgroundColor: '#ff0' }}
        selectedButtonStyle={{ backgroundColor:'#0f0' }}
      />
      <Card title='Card width divider'>
        {
          users.map((user, index) => {
            return (
              <View key={index}>
                
                <Image resizeMode='cover' source={user.avatar} />
                <Text style={{ marginTop: 20, marginBottom: 20 }}>{user.text}</Text>
                <Text>{user.name}</Text>
              </View>
            )
          })
        }
      </Card>
      
    </View>
    )
  }
}