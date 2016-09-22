/* @flow  */

import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

import DrawerHeader from './DrawerHeader';
import DrawerItemsLayout from './DrawerItemsLayout';

export default class DrawerContent extends Component {
  render() {
    return (
      <ScrollView>
        <DrawerHeader
          changeScene={this.props.changeScene}/>
        <DrawerItemsLayout
          admHidden={this.props.admHidden}
          changeScene={this.props.changeScene}/>
      </ScrollView>
    );
  }
}
