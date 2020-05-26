import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Button from './src/components/Button'
import Display from './src/components/Display'

const initialState = {
  displayValue: '0',
  clearDisplay: false, //limpa o display para receber o novo numero da operacao
  operation: null,
  values: [0, 0], //valores da operacao
  current: 0 //valor que vai ser setado na operacao
}

export default class App extends Component {
  state = {
    ...initialState //spread que faz um 'clone' dos objetos de initialState para state
  }

  addDigit = n => {
    //evita de adicionar varios 0 a esquerda
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay 

    //evita de ter mais de um . no mesmo numero
    if(n === '.' && !clearDisplay && this.state.displayValue.includes('.')) return

    const currentValue = clearDisplay ? '' : this.state.displayValue
  
    //concatena os valores como string
    const displayValue = currentValue + n
    this.setState({displayValue, clearDisplay: false})

    if(n !== '.') {
      //add o valor de acordo com a posicao 
      const newValue = parseFloat(displayValue) //tira da string
      const values = [...this.state.values] //clona o vetor
      values[this.state.current] = newValue 
      this.setState({values}) //values: values
    }
  }

  //como nao recebe parametro, o parametro padrao é o evento do botao
  clearMemory = () => { 
    this.setState({...initialState})
  }

  setOperation = operation => {
    //se a operacao nao foi setada ainda
    if (this.state.current === 0) {
      this.setState({operation, current: 1, clearDisplay: true})
    } else {
      const equals = operation === '='
      const values = [...this.state.values]
      try { // por usar eval, pode ter alguma exceção
        values[0] = 
        eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      } catch (e) {
        values[0] = this.state.values[0]
      }

      this.setState({
        displayValue: `${values[0]}`, //garante que sempre vai ser uma string
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true,
        values
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label="AC" onClick={this.clearMemory} triple/>
          <Button label="/" onClick={this.setOperation} operation/>
          {/* <Button label="7" /onClick = {() => this.addDigit(7)} />*/}
          <Button label="7" onClick={this.addDigit}/>
          <Button label="8" onClick={this.addDigit}/>
          <Button label="9" onClick={this.addDigit}/>
          <Button label="*" onClick={this.setOperation} operation/>
          <Button label="4" onClick={this.addDigit}/>
          <Button label="5" onClick={this.addDigit}/>
          <Button label="6" onClick={this.addDigit}/>
          <Button label="-" onClick={this.setOperation} operation/>
          <Button label="1" onClick={this.addDigit}/>
          <Button label="2" onClick={this.addDigit}/>
          <Button label="3" onClick={this.addDigit}/>
          <Button label="+" onClick={this.setOperation} operation />
          <Button label="0" double onClick={this.addDigit}/>
          <Button label="." onClick={this.addDigit}/>
          <Button label="=" onClick={this.setOperation} operation/>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

