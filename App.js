import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import commonStyles from './src/commonStyles'
import { Font } from 'expo'



export default class App extends React.Component {
  

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Lato': require('./assets/fonts/Lato.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
 
  
   render() {
    return (
      <View style={styles.container}>
      {
        this.state.fontLoaded ? (
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        ): null
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome:{
    fontFamily: 'Lato',
    fontSize: 40,
    textAlign: 'center',
    margin:10,
  }
});
