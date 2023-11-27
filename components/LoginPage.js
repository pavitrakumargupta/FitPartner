import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  Text,
  ImageBackground,
  TextInput
} from 'react-native';
import {Appbar, Button, List} from 'react-native-paper';
import { app } from './firebase'; // Import your initialized Firebase app
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';



const auth = getAuth(app);



const LoginPage = ({setSignupFunc,handleUser}) => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password:'',
    error:''
  });

  async function signIn() {
    if (userDetails.email === '' || userDetails.password === '') {
      setUserDetails({
        ...userDetails,
        error: 'Email and password are mandatory.',
      });
      return;
    }
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, userDetails.email, userDetails.password);
      // User signed in successfully
      // `userCredential` contains information about the signed-in user
      const user = userCredential.user;
      // Assuming user is a JSON object, you can parse it if needed
      const userData = JSON.parse(JSON.stringify(user));

      // Access the displayName property
      const displayName = userData.displayName;

      handleUser(displayName,true)
      
      // You can now navigate to another screen or perform any other actions needed upon successful sign-in
    } catch (error) {
      console.error('Error signing in:', error.message);
      // Handle sign-in errors, display an error message, etc.
    }
  }

  const setDetails = (value, name) => {
    setUserDetails((prevValue) => ({ ...prevValue, [name]: value }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Log In</Text>

      
      <View>
      <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter Email"
          onChangeText={(inputText) => setDetails(inputText, 'email')}
          style={styles.input}
          placeholderTextColor="#9a9a9a"
        />
      </View>
      <View>
        <Text style={styles.label}>Passsword</Text>
        <TextInput
          placeholder="Enter Password"
          onChangeText={(inputText) => setDetails(inputText, 'password')}
          style={styles.input}
          placeholderTextColor="#9a9a9a"
          secureTextEntry={true} // Use secureTextEntry to hide entered text
        />

      </View>

      <Text style={{color:"red"}}>{userDetails.error}</Text>
     <Button
          mode="contained" // Use mode to define the appearance
          color="white" // Define the text color
          style={styles.button}
          onPress={signIn}
        >
          Log In
      </Button>
      <Text style={{ color:'white' }}>
        Don't have an account?{' '}
        <Text onPress={() => setSignupFunc(true)} style={{ fontWeight: 'bold',color:'white' }}>Signup</Text>
    </Text>
    </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  heading:{
    color:"white",
    fontSize:23,
    marginBottom:20,
    fontWeight:"600"
  },
  label:{
    color:'white',
    backgroundColor: 'black',
    left:15,
    position:"relative",
    bottom:-17,
    zIndex:2,
    width:70,
    paddingHorizontal: 6,
    fontWeight:"600"
  },
  input: {
    width: 250,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'transparent',
    color:'white',
    marginVertical: 10,
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius:15
  },
  button:{
    backgroundColor:"#E33939",
    color:'white',
    marginVertical: 10,
    paddingHorizontal: 16,
    paddingVertical: 0,
    borderRadius:15,
    width: 250,
    fontSize:20,
    marginTop:270
  }
});

export default LoginPage