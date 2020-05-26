/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import params from './src/params'
import Field from './src/components/Field'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Iniciando Mines</Text>
        <Text style={styles.instructionsText}>Tamanho da grade: 
        {params.qtdRowsAmount()}x{params.qtdColumnsAmount()}
        </Text>
        <Field />
        <Field opened nearMines={2}/>
        <Field mined opened exploded/>
        <Field flagged/>
        <Field flagged opened/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
 }
});

