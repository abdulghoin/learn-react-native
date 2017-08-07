/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView
} from 'react-native';

export default class tahfidz extends Component {
  render() {
    let list = [];
    let max = 50;
    for (var i = 0; i < max; i++) {
      let item = <Text key={i}>List ke {i}</Text>;
      list.push(item);
    };

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.header_image}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          />
          <View style={styles.header_title_container}>
            <Text style={styles.header_title}>
              Halaqoh
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <ScrollView>
            {list}
          </ScrollView>
        </View>
        <View style={styles.input}>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'skyblue'
  },

  header_image: {
    width: 50,
    height: 50,
    borderRadius: 50
  },

  header_title_container: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },

  header_title: {
    // textAlign: 'center',
    fontWeight: 'bold',
  },

  content: {
    flex: 9
  },

  input: {
    flex: 1,
    backgroundColor: 'skyblue'
  }
})

AppRegistry.registerComponent('tahfidz', () => tahfidz);
