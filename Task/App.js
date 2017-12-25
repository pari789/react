import React, {Component} from 'react';
import {StatusBar,AppRegistry,View} from 'react-native';

import TabMain from './src/Tabs/index.js';
import Search from './src/Tabs/Search.js';
import { Button,Text,Container,Card,CardItem,Body,Content,Icon,Thumbnail,Header,Tab,Tabs,TabHeading,Title,Left,Right} from 'native-base';

export default class App extends Component{
  render(){
    return <TabMain/>






  }
}
AppRegistry.registerComponent('Task',() =>App);
