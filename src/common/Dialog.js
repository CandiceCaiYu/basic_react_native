import React, { Component } from 'react'
import {
  Modal,
  Text,
  View,
  TouchableHighlight,
} from 'react-native'

export default class CommonModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: this.props.modalVisible || false,
    }
  }
  setModalVisible = visible => {
    this.setState({
      modalVisible: visible
    })
  }
  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal 
          animationType= 'slide'
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { alert('Modal has been closed!') }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World</Text>
              <TouchableHighlight
                onPress={ () => this.setModalVisible(!this.state.modalVisible) }
              >
                <Text>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}