import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import params from '../params'

export default props => {
    return (
        <View style={styles.container}>
            <Image source={require("../images/flag.png")} 
                style={props.bigger ? styles.imageBigger : styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 20,
        resizeMode: 'contain',
    },
    imageBigger: {
        width: 50,
        resizeMode: 'cover'
    }
})