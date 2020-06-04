import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import commonStyles from '../commonStyles'

function getCheckView(doneDate) {
    if(doneDate != null) {
        return (
            <View style={styles.doneTask}>
                <Icon name={'check'} size={16} color={"#fff"} />
            </View>
        )
    } else {
        return (
            <View style={styles.pendingTask}></View>
        )
    }
}

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.checkTaskContainer}>
                {getCheckView(props.doneAt)}
            </View>
            <View>
                <Text>{props.desc}</Text>
                <Text>{props.estimate + ""}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: "#AAA",
        borderBottomWidth: 1,
        padding: 15,
        alignItems: 'center'
    },

    checkTaskContainer: {
        width: '20%',
        alignItems: 'center'
    },

    pendingTask: {
        width: 25,
        height: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: "#AAA"
    },

    doneTask: {
        width: 25,
        height: 25,
        borderRadius: 13,
        backgroundColor: "#4d7031",
        alignItems:'center',
        justifyContent: 'center'
    }
})