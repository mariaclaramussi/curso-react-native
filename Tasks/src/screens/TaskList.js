import React, {Component} from 'react'
import {View, Text, ImageBackground, StyleSheet, 
        FlatList, TouchableOpacity, Alert} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import moment from 'moment'
import 'moment/locale/pt-br' //traduz o valor das datas para pt
import commonStyles from '../commonStyles'
import Task from '../components/Task'
import AddTask from './AddTasks'
import Icon from 'react-native-vector-icons/FontAwesome'

const initialState = {
    showDoneTasks: true,
    visibleTasks: [],
    showAddTask: false,
    tasks: []
}

export default class TaskList extends Component {
    state = {
        ...initialState
    }

    componentDidMount = async () => {
        const stateString = await AsyncStorage.getItem('taskState')
        const state = JSON.parse(stateString) || initialState
        this.setState(state) //state: state
    }

    toggleFilter = () => {
        this.setState( {showDoneTasks: !this.state.showDoneTasks}, this.filterTasks )
    }

    filterTasks = () => {
        let visibleTasks = null //variavel local
        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks]
        } else {
            const pending = function(task) {
                return task.doneAt === null
                // const pending = task => task.doneAt === null 
            } 
            visibleTasks = this.state.tasks.filter(pending)
        }

        this.setState({ visibleTasks })
        AsyncStorage.setItem('taskState', JSON.stringify(this.state))
    }

    toggleTask = taskId => {
        const tasks = [...this.state.tasks] //copia do array de tasks
        tasks.forEach(task => {
            if(task.id === taskId) {
                task.doneAt = task.doneAt ? null : new Date() //informa a data de conclusao
            }
        })

        this.setState({tasks}, this.filterTasks)
    }
    
    addTask = newTask => {
        if(!newTask.desc || !newTask.desc.trim()) {
            Alert.alert("Dados inválidos", 'Descrição não informada')
            return
        }

        const tasks = [...this.state.tasks]
        tasks.push({
            id: Math.random(),
            desc: newTask.desc,
            estimate: newTask.date,
            doneAt: null
        })

        this.setState({ tasks, showAddTask: false}, this.filterTasks)
    }

    deleteTask = id => { 
        const tasks = this.state.tasks.filter(task => task.id !== id) //o filter gera um novo array com os resultados
        this.setState({tasks}, this.filterTasks)
    }

    render(){
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

        return (
            <View style={styles.container}>
                <AddTask 
                    isVisible={this.state.showAddTask}
                    onCancel={() => this.setState({showAddTask: false})}
                    onSave={this.addTask}
                />

                <ImageBackground 
                    source={require('../../assets/imgs/today.jpg')}
                    style={styles.imageBackground}
                >
                    <TouchableOpacity
                        style={styles.alignBtn}
                        onPress = {this.toggleFilter}
                    >
                        <Icon name={this.state.showDoneTasks ? "eye-slash" : "eye"} size={20} color={commonStyles.colors.secondary}/>
                    </TouchableOpacity>
                    <View style={styles.contentBackground}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>

                <View style={styles.taskListContainer}>
                    <FlatList 
                        data = {this.state.visibleTasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem = { ({item}) => 
                            <Task {...item} toggleTask={this.toggleTask} onDelete={this.deleteTask}/>
                        }
                    />
                </View>
                
                <TouchableOpacity 
                    onPress={() => this.setState({ showAddTask: true})}
                    activeOpacity={0.7}
                    style={styles.addBtn}
                >
                    <Icon name={"plus"} color={commonStyles.colors.secondary} size={20} />
                </TouchableOpacity>
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
    },

    alignBtn: {
        alignSelf: 'flex-end',
        paddingTop: 20,
        paddingRight: 20
    },

    addBtn: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: commonStyles.colors.today,
        alignItems: 'center',
        justifyContent: 'center'
    }
})