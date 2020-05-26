import React from 'react'
import {View, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Simple from './Components/Simple';
import ParImpar from './Components/ParImpar';
import Contador from './Components/Contador';
import Notificacao from './Components/Notificacao';
import Evento from './Components/Evento';
import { Avo } from './Components/ComunicacaoDir';
import { TextoSincronizado } from './Components/ComunicacaoInd';
import ListaFlex from './Components/ListaFlex';
import Flex from './Components/Flex';


function CirucloScreen({ }) {
    return (
        <Flex />
    )
}

function FlexScreen({ }) {
    return (
        <ListaFlex />
    )
}

function CallbackScreen({ }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <TextoSincronizado />
        </View>
    )
}

function AvoScreen({ }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Avo nome='Joao' sobrenome='Silva' />
        </View>
    )
}

function EventoScreen({ }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Evento />
        </View>
    )
}

function NotificacaoScreen({ }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Notificacao />
        </View>
    )
}

function ContadorScreen({ }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Contador numero={10}/>
        </View>
    )
}

function ParImparScreen({ }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <ParImpar numero = {20}/>
        </View>
    )
}

function SimpleScreen({ }) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Simple text="Componente Simples" />
        </View>
    )
}

const Drawer = createDrawerNavigator();

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Circulos" component={CirucloScreen} />
                <Drawer.Screen name="Lista de Alunos" component={FlexScreen} />
                <Drawer.Screen name="Callback - Com. Indireta" component={CallbackScreen} />
                <Drawer.Screen name="Avo - Com. Direta" component={AvoScreen} />
                <Drawer.Screen name="Evento" component={EventoScreen} />
                <Drawer.Screen name="Notificacao" component={NotificacaoScreen} />
                <Drawer.Screen name="Contador" component={ContadorScreen} />
                <Drawer.Screen name="Par ou Impar" component={ParImparScreen} />
                <Drawer.Screen name="Simples" component={SimpleScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}