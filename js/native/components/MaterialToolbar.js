/* @flow  */

import React, { Component } from 'react';
import { AppRegistry,StyleSheet, Text, View, StatusBar, ToolbarAndroid, Platform, ToastAndroid } from 'react-native';

import { typography, color } from 'react-native-material-design-styles';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

var statusBarHeight = 24;

var toolbarActions = [
  {title: 'Search (Pesquisar)', iconName: 'search', show: 'always'},
  {title: 'Config.'},
];

if (Platform.Version < 21) {
  statusBarHeight = 0;
}

export default class MaterialToolbar extends React.Component {
  state = {
    toolbarHeight: 55,
    statusBarTranslucent: true,
    statusBarColor: 'rgba(0, 0, 0, 0.2)',
    statusBarHeight: statusBarHeight,
  };

  render() {
    return (
      <View>
              {/* StatusBar */}
        <StatusBar
          translucent={this.state.statusBarTranslucent}
          backgroundColor={this.state.statusBarColor} />
              {/* StatusBar Background*/}
        <ToolbarAndroid
          backgroundColor={this.props.color}
          height={this.state.statusBarHeight}>
        </ToolbarAndroid>
              {/* Toolbar */}
        <MaterialIcon.ToolbarAndroid
          backgroundColor={this.props.color}
          height={this.state.toolbarHeight}
          actions={toolbarActions}
          navIconName='menu'
          title={this.props.title}
          titleColor='white'
          contentInsetStart={72}
          onIconClicked={this.props.openDrawer}
          overflowIcon={require('../../../src/img/icons/dots-vertical.png')} >
          </MaterialIcon.ToolbarAndroid>
    </View>
    );
  }
}
