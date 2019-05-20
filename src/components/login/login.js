import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image } from 'react-native';
import Background from '../../../assets/login/redBackground.jpg';
export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={Background} style={styles.ImageContainer}></Image>
        </View>
        <View style={styles.body}>
          <Text>Este es el texto de Adrian Barra</Text>
        </View>
        <View style={styles.footer}>
          <Image source={Background} style={[styles.ImageContainer, styles.reverseY, styles.reverseX]}></Image>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    alignItems: 'flex-start'
  },
  footer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  body: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  reverseY: {
    transform: [{
      scaleY: -1
    }]
  },
  reverseX: {
    transform: [{
      scaleX: -1
    }]
  },
  ImageContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    resizeMode: 'stretch',
    height: 300
  }
});

