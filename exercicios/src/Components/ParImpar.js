import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

function parOuImpar(num) {
    const valor = num % 2 == 0 ? 'Par' : 'Impar'

    return <Text style={styles.textoPadrao}>{valor}</Text>
}

export default props => { 
    return (
        <View>
            {/* {
                props.numero % 2 == 0
                ? <Text style={styles.textoPadrao}>Par</Text> 
                : <Text style={styles.textoPadrao}>Impar</Text>
            } */}

            {parOuImpar(props.numero)}
        </View>
    )
}

const styles = StyleSheet.create({
    textoPadrao: {
        fontSize: 24,
        color: "#000"
    }
})