import React from 'react'
import {StyleSheet, View, Text, 
    TouchableWithoutFeedback, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import commonStyles from '../commonStyles'
import moment from 'moment'
import 'moment/locale/pt-br'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import IconFont from 'react-native-vector-icons/FontAwesome'

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

    const doneOrNot = props.doneAt != null ?
        { textDecorationLine: 'line-through'}
        : {}

    //mostra a data de conclusao ou nao
    const date = props.doneAt ? props.doneAt : props.estimate
    const dateText = moment(date).locale('pt-br').format('ddd, D [de] MMMM')


    const getRightContent = () => {
        return (
            <TouchableOpacity
                style={styles.rightBtn}
                onPress={() => props.onDelete && props.onDelete(props.id)}
            >
                <IconFont name="trash" size={30} color={"#FFF"} />
            </TouchableOpacity>
        )
    }

    const getLeftContent = () => {
        return (
            <View style={styles.leftBtn}>
                <IconFont name="trash" size={20} color={"#FFF"} />
                <Text style={styles.deleteText}>Excluir</Text>
            </View>
        )
    }

    return (
        <Swipeable
            renderRightActions={getRightContent}
            renderLeftActions={getLeftContent}
            onSwipeableLeftOpen={() => props.onDelete && props.onDelete(props.id)}
        >
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPress={() => props.toggleTask(props.id)}
                >
                    <View style={styles.checkTaskContainer}>
                        {getCheckView(props.doneAt)}
                    </View>
                </TouchableWithoutFeedback>
                <View>
                    <Text style={[styles.desc, doneOrNot]}>{props.desc}</Text>
                    <Text style={styles.date}>{dateText}</Text>
                </View>
            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: "#AAA",
        borderBottomWidth: 1,
        padding: 15,
        alignItems: 'center',
        backgroundColor: "#fff"
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
    },

    desc: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 15,
        textDecorationColor: commonStyles.colors.mainText
    },

    date: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
    },

    rightBtn: {
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    },

    leftBtn: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
    },

    deleteText: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        color: "#fff",
        margin: 10
    }
})