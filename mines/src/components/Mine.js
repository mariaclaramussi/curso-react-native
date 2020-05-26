import React from 'react'
import {View, StyleSheet, Image} from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
             <Image source={require("../images/bomb.png")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
})

