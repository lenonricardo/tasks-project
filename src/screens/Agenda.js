import React, { Component } from 'react'
import {StyleSheet, Text, View, ImageBackground} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/imgs/today.jpg'
import commonStyles from '../commonStyles'
import { Font } from 'expo';

import Task from '../components/Task'

export default class Agenda extends Component{
    state = {
        fontLoaded: false,
      };
    
      async componentDidMount() {
        await Font.loadAsync({
          'Lato': require('../../assets/fonts/Lato.ttf'),
        });
    
        this.setState({ fontLoaded: true });
      }
    render(){

        return(
            <View style={styles.container}>
                <ImageBackground source={todayImage} style={styles.background}>
                    <View style={styles.titleBar}>
                    {
                        this.state.fontLoaded ? (                        
                        <Text style={styles.title}>Hoje</Text>
                        ):null}                 
                    {
                        this.state.fontLoaded ? ( 
                        <Text style={styles.subtitle}>
                            {moment().local('pt-br').format('ddd,D [de] MMMM')}
                        </Text>):null}
                        
                        
                        
                                                
                    </View>

                </ImageBackground>
                <View style={styles.tasksContainer}>
               
                   <Task desc='Tarefa pendente' estimateAt={new Date()} doneAt={null}/>
                        
                   <Task desc='Tarefa concluída' estimateAt={new Date()} doneAt={new Date()}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    background:{
        flex:3,
    },
    titleBar:{
        flex: 1,
        justifyContent: 'flex-end',
    },
    title:{
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10,
    },
    subtitle:{
        fontFamily: commonStyles.fontFamily,        
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    },
    tasksContainer:{
        flex: 7,
    }
    
})