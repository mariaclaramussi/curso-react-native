import React, {Component} from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

export const Entrada = props => 
    <View>
        <TextInput 
            value={props.texto} 
            style={styles.input}
            onChangeText={props.chamarQuandoMudar}
        />
    </View>

//a classe tem o estado mas nao tem o componente que dispara o evento/mudança de estado
export class TextoSincronizado extends Component {
    state = {
        texto: ''
    }

    alterarTexto = texto => {
        this.setState({ texto }) // ou texto: texto
    }

    render(){
        return (
            <View>
                <Text style={styles.font40}>{this.state.texto}</Text>
                <Entrada texto={this.state.texto}
                    chamarQuandoMudar={this.alterarTexto} />
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