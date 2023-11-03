import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import {Appbar, TextInput, Button, List} from 'react-native-paper';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/1200x/ae/c8/3b/aec83b3df7094ff25ee17171038e374b.jpg',
        }}
        resizeMode="cover"
        style={styles.background}>
        <Button
        style={styles.authenticationBtn}
          theme={{colors: {primary: 'red'}}}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          LogIn
        </Button>
        <Button
        style={styles.authenticationBtn}
          theme={{colors: {primary: 'red'}}}
          mode="outlined"
          onPress={() => console.log('Pressed')}>
          SignUp
        </Button>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    gap:10,
    flexDirection:'row',
  },
  authenticationBtn: {
    height:40,
    width:150
  },
});

export default App;
