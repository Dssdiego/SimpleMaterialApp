/* @flow  */

import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ListView, TouchableNativeFeedback, ToastAndroid } from 'react-native';
import { typography, color } from 'react-native-material-design-styles';

export default class DrawerItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableNativeFeedback onPress={() => this.props.changeScene(this.props.text)} delayPressIn={0}>
        <View style={styles.container}>
          <Image source={this.props.icon} style={styles.icon} />
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 11,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 30,
    color: 'black',
    fontSize: 14,
  },
  icon: {
    marginLeft: 7,
    justifyContent: 'center',
    tintColor: 'grey',
  }
});
