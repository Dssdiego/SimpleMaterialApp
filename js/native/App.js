/* @flow  */

import React, { Component } from 'react';
import { Text, View, DrawerLayoutAndroid, Image, ListView } from 'react-native';
import { typography, color } from 'react-native-material-design-styles';

import MaterialToolbar from './components/MaterialToolbar';
import DrawerContent from './components/DrawerContent';
import DrawerHeader from './components/DrawerHeader';

import Page1 from '../../js/native/scenes/Page1';
import Page2 from '../../js/native/scenes/Page2';
import Page3 from '../../js/native/scenes/Page3';
import Page4 from '../../js/native/scenes/Page4';
import Page5 from '../../js/native/scenes/Page5';
import Page6 from '../../js/native/scenes/Page6';
import Page7 from '../../js/native/scenes/Page7';

import Profile from '../../js/native/scenes/Profile';

var scene = <Page1/>;

export default class App extends Component {
  constructor() {
    super();
    this.openDrawer = this.openDrawer.bind(this);
    this.changeScene = this.changeScene.bind(this);
  }

  openDrawer() {
    this.drawer.openDrawer();
  }

  changeScene = (title) => {
    var toolbarColor = color.paperTeal500.color;

    switch (title) {
    case 'Profile':
      toolbarColor = '#123456';
      scene = <Profile/>;
      break;
    case 'Page1':
      toolbarColor = color.paperTeal500.color;
      scene = <Page1/>;
      break;
    case 'Page2':
      toolbarColor = color.paperRed500.color;
      scene = <Page2/>;
      break;
    case 'Page3':
      toolbarColor = color.paperIndigo500.color;
      scene = <Page3/>;
      break;
    case 'Page4':
      toolbarColor = color.paperGreen500.color;
      scene = <Page4/>;
      break;
    case 'Page5':
      toolbarColor = color.paperOrange500.color;
      scene = <Page5/>;
      break;
    case 'Page6':
      toolbarColor = color.paperBlueGrey500.color;
      scene = <Page6/>;
      break;
    case 'Page7':
      toolbarColor = color.paperBlue500.color;
      scene = <Page7/>;
      break;
    }

    this.drawer.closeDrawer();
    this.setState({
      toolbarTitle: title,
      toolbarColor: toolbarColor,
    });
  }

  // Initial State of Toolbar Title, Toolbar Color and Adm Menu Visibility
  // Estado Inicial do Título do Toolbar,Cor do Toolbar e Visibilidade do Meu de Administração
  state = {
    toolbarTitle: 'Page1',
    toolbarColor: color.paperTeal500.color,
    admHidden: false
  };

  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={260}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <DrawerContent
                                      admHidden={this.state.admHidden}
                                      changeScene={this.changeScene}/>}
        ref={(_drawer) => this.drawer = _drawer}>
        <MaterialToolbar
          title={this.state.toolbarTitle}
          color={this.state.toolbarColor}
          openDrawer={this.openDrawer}/>
          {scene}
      </DrawerLayoutAndroid>
    );
  }
}
