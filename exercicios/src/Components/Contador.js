import React, {Component} from 'react'
import{View, Text, TouchableHighlight, StyleSheet} from 'react-native'

//Só é permitido usar state em componentes de classe
export default class Contador extends Component {
    //props são somente para leitura. Para mudancas é necessario usar state
    
    state = {
        numero: this.props.numero //inicializa o estado
    }

    maisUm = () => {
        this.setState({numero: this.state.numero + 1})
    }

    limpar = () => {
        this.setState({numero: 0})
    }

    render() {
        return (
            <View  style={styles.container}>
                <Text style={styles.text}>{this.state.numero}</Text>
                <Text style={styles.text}>Clique para incrementar</Text>
                <Text style={styles.text}>Presisone para Zerar</Text>
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.maisUm}
                    onLongPress = {this.limpar}
                >
                    <Text style={[styles.text, {color: '#fff'}]}>Ação</Text>
                </TouchableHighlight>
            </View>   
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },

    text: {
        fontSize: 20
    },

    button: {
        backgroundColor: 'blue',
        padding: 10,
        marginTop: 30
    }
})