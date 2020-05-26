import React from 'react';
import {Button, Alert, ToastAndroid, Platform} from 'react-native'

export default props => {
    const notificar = msg => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            Alert.alert('Info', msg)
        }
    }

    return (
        <Button title='Alerta' onPress={() => notificar('Mensagem de Alerta')} />
    )
}