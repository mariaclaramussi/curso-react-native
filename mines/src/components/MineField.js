import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import Field from './Field'

export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            //tranforma um objeto field em componente do tipo Field
            //as props do componente sao exatamente as mesmas do objeto 
            //a key diferencia os componentes. Dentro do array é importante
            return <Field {...field} key={c} 
                onOpen={() => props.openField(r, c)}
                onSelect={e => props.selectField(r, c)}
            /> 
        })
        //insere as colunas criadas na linha lida
        return <View style={{flexDirection:'row'}}key={r}>{columns}</View> 
    })
    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EEE"
    }
})