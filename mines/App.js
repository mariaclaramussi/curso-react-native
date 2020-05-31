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
  View,
  Alert,
  TouchableOpacity
} from 'react-native';
import params from './src/params'
import MineField from './src/components/MineField'
import {createMinedBoard, cloneBoard, openField, 
  hasExplosion, wonGame, showMines, invertFlag,
  flagUsed} from './src/functions'
import Flag from './src/components/Flag'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  //quantidade de minas do jogo
  minesAmount = () => {
    const rows = params.qtdRowsAmount()
    const columns = params.qtdColumnsAmount()
    return Math.ceil(columns * rows * params.difficultLevel)
  }

  createState = () => {
    const rows = params.qtdRowsAmount()
    const columns = params.qtdColumnsAmount()
    return {
      board: createMinedBoard(rows, columns, this.minesAmount()),
      won: false,
      lost: false
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hasExplosion(board)
    const won = wonGame(board)

    if(lost){
      showMines(board)
      Alert.alert("Voce Perdeu!!")
    }
    if (won) {
      Alert.alert("Voce Ganhou!")
    }

    this.setState({board, lost, won})
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if(won) {
      Alert.alert("Voce Ganhou!")
    }

    this.setState({board, won})
  }

  render() {
    return (
      <View style={styles.container}>
       <View style={styles.header}>
         <View>
          <TouchableOpacity
            style={styles.flagButton}
          >
            <Flag bigger/>
          </TouchableOpacity>
          <Text style={styles.flagLeft}>{this.minesAmount() - flagUsed(this.state.board)}</Text>
         </View>
          <TouchableOpacity
            onPress={() => this.setState(this.createState())}
            style={styles.button}
          >
            <Text style={styles.buttonLabel}>Novo Jogo</Text>
          </TouchableOpacity>
       </View>

        <View style={styles.board}>
          <MineField board={this.state.board} 
            openField={this.onOpenField}
            selectField={this.onSelectField}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'space-between',
 },

  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  flagButton: {
    minWidth: 30
  },

  flagLeft: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 30
  },

  button: {
    backgroundColor: "#999",
    padding: 5
  },

  buttonLabel: {
    fontSize: 20,
    color: "#DDD",
    fontWeight: 'bold'
  },

  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});

