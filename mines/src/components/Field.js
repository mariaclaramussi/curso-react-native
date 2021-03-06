import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import params from '../params'
import Mine from './Mine'
import Flag from './Flag'

export default props => {
    const {mined, opened, nearMines, exploded, flagged} = props //extrai de props os atributos

    const styleField = [styles.field]
    
    if(opened) styleField.push(styles.opened)
    if(exploded) styleField.push(styles.exploded)
    if(flagged) styleField.push(styles.flagged)
    if(!opened && !exploded) styleField.push(styles.regular) //se tiver um unico estilo

    //cor dos textos de acordo com a qtd de minas proximas
    let color = null
    if(nearMines > 0) {
        if (nearMines == 1 ) color = "#2a2bd7"
        if (nearMines == 2 ) color = "#2b520f"
        if (nearMines > 2 && nearMines < 6 ) color = "#f9060a"
        if (nearMines == 6 ) color = "#f221a9"
    }

    return(
        <TouchableWithoutFeedback
            onPress={props.onOpen}
            onLongPress={props.onSelect}
        >
            <View style={styleField}>
                {!mined && opened && nearMines > 0 ?
                    <Text style={[styles.label, {color: color}]}>{nearMines}</Text>
                    : null
                }
                {mined && opened ? <Mine/> : null }
                {flagged && !opened ? <Flag /> : null} 
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },

    regular: {
        backgroundColor: '#999',
        borderLeftColor: "#ccc",
        borderTopColor: "#ccc",
        borderRightColor: "#333",
        borderBottomColor: "#333"
    },

    opened: {
        backgroundColor: "#999",
        borderColor: "#777",
        alignItems: 'center',
        justifyContent: 'center'
    },

    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize
    },

    exploded: {
        backgroundColor: 'red',
        borderColor: 'red'
    },
    
    flagged: {

    }
})