import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Init } from './src/screens/Init';
import { List } from './src/screens/List';
import { Weather } from './src/weather/Weather';
import { Stack } from './src/nav/Stack';
import { TabNav } from './src/nav/TabNav';
import { Drawer } from './src/nav/Drawer';

StatusBar.setHidden(true);

export default class App extends Component {
  render() {
    return <Drawer />;
  }
}
