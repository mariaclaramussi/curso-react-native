import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    {id: 1, nome: 'Joao', nota: 7.9},
    {id: 2, nome: 'Bianca', nota: 8.9},
    {id: 3, nome: 'Bernardo', nota: 6.9},
    {id: 4, nome: 'Maria', nota: 7.2},
    {id: 5, nome: 'Laura', nota: 9.2},
    {id: 6, nome: 'Clara', nota: 9.9},
    {id: 7, nome: 'Rafaela', nota: 10.0},
    {id: 8, nome: 'Leandro', nota: 6.2},
    {id: 9, nome: 'Pedro', nota: 9.0},
]

const estilo = {
   padding: 20,
   backgroundColor: '#DDD',
   borderWidth: 0.5,
   borderColor: 'gray',
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between'
}

export const Aluno = props => {
    return (
        <View style={estilo}>
            <Text>Nome: {props.nome}</Text>
            <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
        </View>
    )
}

export default props => {
    const renderItem = ({item}) => { //obrigatoriamente chamar item, é um atributo de um objeto, como x.item
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList 
                data={alunos} 
                keyExtractor={(_, index) => `${index}`}
                renderItem={renderItem}
            />
        </ScrollView>
    )
}
