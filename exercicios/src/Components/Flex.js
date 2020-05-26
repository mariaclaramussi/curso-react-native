import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    norte: {
        flex: 1,
        backgroundColor: '#bdf9ed',
        alignItems: 'center',
        justifyContent: 'center'
    },
    centro: {
        flex: 2, //quantidade de partes que recebe
        flexDirection: 'row',
        backgroundColor: '#f2f9bd',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    sul: {
        flex:1,
        backgroundColor: '#bdf9c4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circulo: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 50
    }
})

const Circulo = props => <View style={styles.circulo}></View>

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.norte}>
                <Circulo />
            </View>
            <View style={styles.centro}>
                <Circulo />
                <Circulo />
                <Circulo />
            </View>
            <View style={styles.sul}>
                <Circulo />
            </View>
        </View>
    )
}