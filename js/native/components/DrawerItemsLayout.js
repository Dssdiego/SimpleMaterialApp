/* @flow  */

import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ListView } from 'react-native';

import DrawerItem from './DrawerItem';

// Images Used for the Icons
// Imagens Usadas para os Ícones
var newspaper = require('../../../src/img/icons/newspaper.png');
var music = require('../../../src/img/icons/music-note.png');
var account_plus = require('../../../src/img/icons/account-plus.png');
var account_location = require('../../../src/img/icons/account-location.png');
var file = require('../../../src/img/icons/file-document.png');
var check = require('../../../src/img/icons/briefcase-check.png');
var help = require('../../../src/img/icons/help-circle.png');
var approve = require('../../../src/img/icons/account-check.png');
var team = require('../../../src/img/icons/account-multiple.png');
var reports = require('../../../src/img/icons/chart-areaspline.png');

var listItems = [
  {icon: newspaper, text: 'Page1'},
  {icon: music, text: 'Page2'},
  {icon: account_plus, text: 'Page3'},
  {icon: account_location, text: 'Page4'},
  {icon: file, text: 'Page5'},
  {icon: check, text: 'Page6'},
  {icon: help, text: 'Page7'},
];

var listAdm = [
  {icon: approve, text: 'Adm1'},
  {icon: team, text: 'Adm2'},
  {icon: reports, text: 'Adm3'},
];

export default class DrawerItemsLayout extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      items: ds.cloneWithRows(listItems),
      adm: ds.cloneWithRows(listAdm),
    };
  }

  render() {
    // Hide ADM Menu for Regular User
    // Esconde o Menu de ADM para o Usuário que não tem acesso
    if (this.props.admHidden == true) {
      return (
        <View>
                {/* Main List */}
                {/* Lista Principal */}
          <ListView
            style={styles.container}
            dataSource={this.state.items}
            renderRow={(data) => <DrawerItem changeScene={this.props.changeScene} {...data}/>}
            scrollEnabled={false}
            height={330} />
        </View>
      );
    }
    // If user is ADM, load Modified Layout
    // Se o usuário for ADM, carrega o Layout Modificado
    return (
      <View>
              {/* Main List */}
              {/* Lista Principal */}
        <ListView
          style={styles.container}
          dataSource={this.state.items}
          renderRow={(data) => <DrawerItem changeScene={this.props.changeScene} {...data}/>}
          scrollEnabled={false}
          height={330} />
              {/* Separator */}
              {/* Separador */}
        <View height={1} backgroundColor='silver'/>
              {/* Header - Administration */}
              {/* Header - Administração */}
        <Text style={styles.itemHeader}>Admin.</Text>
              {/* Administration List */}
              {/* Lista Administração */}
        <ListView
          style={styles.container}
          dataSource={this.state.adm}
          renderRow={(data) => <DrawerItem changeScene={this.props.changeScene} {...data}/>}
          scrollEnabled={false}
          height={150} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 10,
  },
  itemHeader: {
    marginTop: 15,
    marginLeft: 15,
  }
});
