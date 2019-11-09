import React, { Component } from 'react';
import { Button, StyleSheet, View, TouchableHighlight } from 'react-native';

export default class Page1 extends Component {
  _onPressButton() {
    alert('You tapped the button!')
  }
  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
        <View style={styles.buttonContainer}>
          <Button
            /*onPress={this._onPressButton}*/
            title="Choose Your seat"
            color="#841584"
            onPress={() => this.props.navigation.navigate('SecondPage')}
          />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
