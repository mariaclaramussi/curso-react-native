import React, { Component } from 'react'
import { Modal, View, StyleSheet, 
    TouchableWithoutFeedback, Text, TouchableOpacity, 
    TextInput, Platform, Alert} from 'react-native'
import commonStyles from '../commonStyles'
import moment from 'moment'
import DateTimePiker from '@react-native-community/datetimepicker'

const initialState = {
    desc: '',
    date: new Date(),
    showDatePicker: false
}

export default class AddTask extends Component {
    state = {
        ...initialState
    }

    save = () => {
        const newTask = {
            desc: this.state.desc,
            date: this.state.date
        }

        this.props.onSave && this.props.onSave(newTask)
        this.setState({...initialState}) //restaura o estado do componente
    }

    getDatePicker = () => {
        let datePicker = <DateTimePiker value={this.state.date}
                    onChange={(_, date) => this.setState({date, showDatePicker: false})}
                    mode='date'
                />

        const dateString = moment(this.state.date).format('ddd, D [de] MMMM')

        if (Platform.OS === 'android') {
            datePicker = (
                <>
                    <TouchableOpacity onPress={() => this.setState({showDatePicker: true})}>
                        <Text style={styles.date}>{dateString}</Text>
                    </TouchableOpacity>
                    {this.state.showDatePicker && datePicker}
                </>
            )
        }

        return datePicker
    }

    render () {
        return (
            <Modal 
                transparent={true}
                visible={this.props.isVisible}
                onRequestClose={this.props.onCancel}
                animationType="slide"
            >
                <TouchableWithoutFeedback
                    onPress={this.props.onCancel}
                >
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
                
                <View style={styles.container}>
                    <Text style={styles.header}>Nova Tarefa</Text>
                    
                    <TextInput 
                        value={this.state.desc}
                        onChangeText={text => this.setState({ desc: text})}
                        placeholder="Descriçâo"
                        style={styles.input}
                    />

                    {this.getDatePicker()}

                    <View style={styles.alignBtns}>
                        <TouchableOpacity
                            onPress={this.props.onCancel}
                        >
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={this.save}
                        >
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <TouchableWithoutFeedback
                    onPress={this.props.onCancel}
                >
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },

    container: {
        //flex: 2,
        backgroundColor: "#fff"
    },

    header: {
        fontFamily: commonStyles.fontFamily,
        backgroundColor: commonStyles.colors.today,
        color: commonStyles.colors.secondary,
        textAlign: 'center',
        padding: 15,
        fontSize: 18
    },

    input: {
        fontFamily: commonStyles.fontFamily,
        width: '90%',
        height: 40,
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: "#E3E3E3",
        borderRadius: 6
    },

    alignBtns: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    button: {
        margin: 20,
        marginRight: 30,
        color: commonStyles.colors.today
    },

    date: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        width: '90%',
        alignSelf: 'center',
        marginTop: 15
    }
})