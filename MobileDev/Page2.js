import React, { Component } from 'react';
import { Button, Image } from 'react-native';

export default class Page2 extends Component {
    static navigationOptions = {
      title: 'Choose your seat !',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Image source={require('./cafet.png')} />
      );
    }
  }