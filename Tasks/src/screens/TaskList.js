import React, {Component} from 'react'
import {View, Text, ImageBackground, StyleSheet} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br' //traduz o valor das datas para pt
import commonStyles from '../commonStyles'
import Task from '../components/Task'

export default class TaskList extends Component {
    render(){
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

        return (
            <View style={styles.container}>
                <ImageBackground 
                    source={require('../../assets/imgs/today.jpg')}
                    style={styles.imageBackground}
                >
                    <View style={styles.contentBackground}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskListContainer}>
                    <Task desc="Tarefa #01" estimate={new Date()} doneAt={new Date()}/>
                    <Task desc="Tarefa #02" estimate={new Date()} doneAt={null}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    imageBackground: {
        flex: 3,
    },

    taskListContainer: {    
        flex: 7
    },

    contentBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingLeft: 20,
        paddingBottom: 20
    },

    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginBottom: 20
    },

    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
    }
})