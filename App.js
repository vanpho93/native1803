import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Init } from './src/screens/Init';
import { List } from './src/screens/List';

StatusBar.setHidden(true);

export default class App extends Component {
  render() {
    return <List />;
  }
}
