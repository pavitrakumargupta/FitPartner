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
import { getAuth, createUserWithEmailAndPassword,updateProfile  } from "firebase/auth";
import app from "./firebase"; // Import your Firebase configuration

const auth = getAuth(app);



const SignupPage = ({setSignupFunc}) => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    password: '',
    email: '',
    error:''
  });

  async function signUp() {
    if (userDetails.email === '' || userDetails.password === '' || userDetails.name === '') {
      setUserDetails({
        ...userDetails,
        error: 'Name, Email, and Password are mandatory.'
      });
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, userDetails.email, userDetails.password);
      // Update user display name (optional)
      await updateProfile(userCredential.user, {
        displayName: userDetails.name
      });
      await setSignupFunc(false)
      // User signed up successfully
      console.log("User signed up:", userCredential.user.uid);
      // You might navigate to another page or perform additional actions here upon successful signup
    } catch (error) {
      // Handle errors here
      console.error("Error signing up:", error.message);
      setUserDetails({
        ...userDetails,
        error: error.message // Display Firebase error message to the user
      });
    }
  }
  

  const setDetails = (value, name) => {
    setUserDetails((prevValue) => ({ ...prevValue, [name]: value }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>

      <View>
        <Text style={styles.label}>Name</Text>
        <TextInput
          placeholder="Enter Name"
          onChangeText={(inputText) => setDetails(inputText, 'name')}
          style={styles.input}
          placeholderTextColor="#9a9a9a"
        />
      </View>
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
     <Button
          mode="contained" // Use mode to define the appearance
          style={styles.button}
          onPress={signUp}
        >
          Sign Up
      </Button>
      <Text style={{ color:'white' }}>
        Already have an account?{' '}
        <Text  onPress={() => setSignupFunc(false)} style={{ fontWeight: 'bold',color:'white' }}>Login</Text>
    </Text>
    </View>
  );
};

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
    width:45,
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

export default SignupPage;
