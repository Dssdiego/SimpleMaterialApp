/* @flow  */

import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableNativeFeedback } from 'react-native';

export default class DrawerHeader extends Component {
  render() {
    return (
      <TouchableNativeFeedback onPress={() => this.props.changeScene('Profile')} >
        <View style={styles.container}>
          <Image source={require('../../../src/img/components/background.jpg')} style={styles.background} >
            <View style={styles.filter}>
              <View style={styles.content}>
                <Image source={require('../../../src/img/components/profile.jpg')} style={styles.profile} />
                <Text style={styles.textName}> User Name (Usuário) </Text>
                <Text style={styles.textSub}> Description (Descrição) </Text>
              </View>
            </View>
          </Image>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 180,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    marginTop: 30,
  },
  background: {
    width: undefined,
    height: 180,
  },
  filter: {
    height: 180,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  content: {
    alignItems: 'center',
  },
  textName: {
    color: 'white',
    fontFamily: 'sans-serif',
    marginTop: 10,
  },
  textSub: {
    color: 'white',
    fontFamily: 'sans-serif-light',
    marginTop: 2,
  }
});
