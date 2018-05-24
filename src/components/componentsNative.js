import React, { Component } from 'react'
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  Button,
  DatePickerIOS,
  DrawerLayoutAndroid,   //侧边栏
  FlatList,              //列表（ul）
  Image,
  MaskedViewIOS,
  Modal,
  TouchableHighlight,
} from 'react-native'



export default class ComponentsNative extends Component {
  constructor(){
    super()
    this.state = {
      modalVisible: false,
    }
  }
  setModalVisible = (visible) => {
    this.setState({
      modalVisible: visible
    })
  }
  render() {
    const navigationView = (
      <View style={{ flex:1, backgroundColor: '#fff' }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign:'left' }}>I'm in the Drawer!</Text>
      </View>
    )
    console.log('render Native')
    return (
      <ScrollView style={{marginBottom: 50}}>
       <ActivityIndicator size={20} color='#00f' />
       <Button
         title='button'
         onPress={() => console.log('button is pressed')}
       />
       <DatePickerIOS 
        date={new Date()}
       />
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={ DrawerLayoutAndroid.positions.Left }
          renderNavigationView={ () => navigationView }>
          <View style={{ flex:1, alignItems: 'center' }}>
            <Text style={{ margin:10, fontSize: 15, textAlign: 'right' }}>Hello</Text>
            <Text style={{ margin:10, fontSize: 15, textAlign: 'right' }}>World!</Text>
          </View>
        </DrawerLayoutAndroid>
        <FlatList
          data={[{ key: 'a' }, { key: 'b' }]}
          renderItem={({ item }) => <Text style={{ borderBottomColor:'#f00' }}>{item.key}</Text>}
          style={{ height: 40 }}
        />
        <View style={{ flex:1, alignItems:'center', justifyContent: 'center', marginBottom: 20, borderWidth:3,borderColor:'#dcd', borderRadius:8, margin:30, padding: 20 }}>
          <Text>Image is Here</Text>
          <Image
            source={require('../../img/3.jpg')}
            style={{width: 250, height: 250, marginTop: 20, resizeMode:'cover'}}
            // getSize={(uri) => console.log(uri)} 静态资源不支持
          />
        </View>
        <MaskedViewIOS
          style={{ flex:1, flexDirection: 'row', height: 100, marginBottom:30 }}
          maskElement={
            <View style={{
              backgroundColor: '#ccd',
              flex:1,
              justifyContent: 'center',
              alignItems: 'center'}}>
              <Text style={{
                fontSize: 60,
                color: '#000',
                fontWeight: 'bold'}}>Basic Mask</Text>
            </View>
            }
          >
          <View style={{ flex:1, height: '100%', backgroundColor: '#324376' }} />
          <View style={{ flex:1, height: '100%', backgroundColor: '#F5DD90' }} />
          <View style={{ flex:1, height: '100%', backgroundColor: '#F76C5E' }} />
        </MaskedViewIOS>
        <View style={{ position: 'relative', flex:1, alignItems: 'center', justifyContent:'center' }}>
          <Modal
            animationType='slide'
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert('modal has been closed')}}
            hardwareAccelerated={true}
          >
            <View style={{ flex: 1, }}>
              <View style={{
              backgroundColor: '#fff', height: 300, width: 300, 
              alignItems: 'center', justifyContent: 'center',
            }}>
              <Text>Hello World</Text>
              <TouchableHighlight
                onPress={() => this.setModalVisible(!this.state.modalVisible)}
                style={{ 
                  width: 100, 
                  height: 50, 
                  borderRadius: 8,
                  backgroundColor: '#00f', 
                }}
              >
                <Text style={{ 
                  color: '#fff',
                  fontWeight: 'bold',
                  lineHeight: 50,
                  textAlign: 'center',
                   }}>Toggle Modal</Text>
              </TouchableHighlight>
              </View>
            </View>
          </Modal>
         
        </View>
        <Button
          title="show modal"
          onPress={() => this.setModalVisible(!this.state.modalVisible)}
         />
      </ScrollView>
    )
  }
}