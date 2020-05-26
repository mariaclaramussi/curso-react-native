import React, {Component} from 'react'
import{View, Text, StyleSheet} from 'react-native'

const fonte = {style: {fontSize: 30}}

//concatena o sobrenome do pai nos filhos
function filhosProps(props) {
    return React.Children.map(props.children,
        c => React.cloneElement(c, {...props, ...c.props}))
}

export const Filho = props => 
    <View>
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
    </View>


export const Pai = props =>
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {/* acessa os filhos do Pai */}
        {/* {props.children}  */}
        {filhosProps(props)}
    </View> 


export const Avo = props =>
    <View>
        <Text {...fonte}>Avô: {props.nome} {props.sobrenome}</Text>
        <Pai nome='Bernardo' sobrenome={props.sobrenome}>
            <Filho nome='Ana' />
            <Filho nome='Gui' />
            <Filho nome='Bia' />
        </Pai>
        <Pai {...props}>
            <Filho nome='Maria' />
            <Filho nome='Sofia' />
        </Pai>
    </View> 

