import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  Text,
  ImageBackground,
} from 'react-native';
import {Appbar, TextInput, Button, List} from 'react-native-paper';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import ProfilePage from './components/ProfilePage';
import MoviePage from './components/MoviePage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'



const Tab = createBottomTabNavigator();


const App = () => {
  const [userVerified,setUserVerified]=useState(false)
  const [openSignUpPage,setopenSignUpPage]=useState(false)
  const [moviePage,setMoviePage]=useState(false)
  const [allMovie,setAllMovie]=useState()
  const [selectedMovie,setSelectedMovie]=useState()
  const [user,setUser]=useState(undefined)


  const setSignupFunc=(value)=>{
    setopenSignUpPage(value)
  } 

  const handleUser=(value,verifiedValue)=>{
    
    setUser(value)
    setUserVerified(verifiedValue)
    console.log(value);
  }

  const handleSelectedMovie=(value)=>{
    setMoviePage(value)
    setSelectedMovie(value)
    console.log(value);
  }

  useEffect(()=>{
    getAllMovie()
  },[])

  

  const getAllMovie = async () => {
    try {
      let data = await fetch('https://moviedata-qror.onrender.com/getAllMovie');
      data = await data.json(); // Corrected from result.json() to data.json()
      setAllMovie(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  

  if(!allMovie){ 
    return <Text>....Loading</Text>
  }

  if( userVerified){
    if(!selectedMovie){
      return <NavigationContainer>
      <Tab.Navigator 
          initialRouteName='Movies'
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === 'Movies') {
                iconName = 'videocam-outline';
              } else if (rn === 'Search') {
                iconName ='search-outline';
              } else if (rn === 'Profile') {
                return <AntDesign name={'user'} size={size} color={'white'} style={focused?{backgroundColor:'#E33939',borderRadius:25,padding:10}:{}}/>
              }
              return <Ionicons name={iconName} size={size} color={'white'} style={focused?{backgroundColor:'#E33939',borderRadius:25,padding:10}:{}} />
            },
            headerShown: false,
            tabBarStyle: {
              height: 90,
              paddingHorizontal: 5,
              paddingTop: 0,
              backgroundColor: 'black',
              position: 'absolute',
              borderTopWidth: 0,
          },
          tabBarShowLabel: false,
          })}
        >
        <Tab.Screen  name="Movies" children={()=><HomePage handleSelectedMovie={handleSelectedMovie}  allMovie={allMovie} />} />
        <Tab.Screen  name="Search" children={()=><SearchPage handleSelectedMovie={handleSelectedMovie} allMovie={allMovie} />} />
        <Tab.Screen  name="Profile" children={()=><ProfilePage user={user}  handleUser={handleUser}/>} />
      </Tab.Navigator>
    </NavigationContainer>
    }else{
      return <MoviePage allMovie={allMovie} selectedMovie={selectedMovie} handleSelectedMovie={handleSelectedMovie}/>
    }
  }else{
    if(openSignUpPage){
      return <SignupPage setSignupFunc={setSignupFunc}/>
    }else{
      return <LoginPage handleUser={handleUser} setSignupFunc={setSignupFunc}/>
    }
  }
};



export default App;
