import React, {Component} from 'react'
import {StyleSheet, TextInput, View, Text} from 'react-native'

export default class Evento extends Component {
    
    state = {
        texto: '' //componente nao controlado -> texto: null
    }

    alterarTexto = texto => {
        //nome do paramento é exatamente o nome do objeto passado
        this.setState({ texto }) //this.setState({texto: texto})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.font40}>{this.state.texto}</Text>
                <TextInput
                    value = {this.state.texto}
                    style = {styles.input}
                    onChangeText = {this.alterarTexto}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        height: 70,
        fontSize: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        width: 300
    },

    font40: {
        fontSize: 40
    }
})