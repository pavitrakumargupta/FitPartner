import React, {useState} from 'react';
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
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
const ProfilePage = ({user,handleUser}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>My Profile</Text>
        <View style={{justifyContent: 'center',alignItems: 'center',textAlign:"center",gap:11}}>
            <Image
            style={styles.proflePic}
            source={{uri:'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1328'}}
        />
            <Text style={styles.normText}>{user}</Text>
        </View>
        <View style={styles.btn}>
            <AntDesign name={'user'} size={20} color={'white'} />
            <View>
                <Text style={styles.normText}>Account</Text>
                <View>
                    <Text style={{color:"rgba(255, 255, 255, 0.15)"}}>Edit Profile</Text>
                    <Text style={{color:"rgba(255, 255, 255, 0.15)"}}>Change Password</Text>
                </View>
            </View>
            <AntDesign name={'right'} size={15} color={'white'} style={{marginLeft:"auto"}} />
        </View>
        <View style={styles.btn}>
            <AntDesign name={'setting'} size={20} color={'white'}  />
            <View>
                <Text style={styles.normText}>Setting</Text>
                <View>
                    <Text style={{color:"rgba(255, 255, 255, 0.15)"}}>Themes</Text>
                    <Text style={{color:"rgba(255, 255, 255, 0.15)"}}>Permission</Text>
                </View>
            </View>
            <AntDesign name={'right'} size={15} color={'white'} style={{marginLeft:"auto"}} />
        </View>
        <Button
          mode="contained" // Use mode to define the appearance
          style={styles.button}
          onPress={() => handleUser(null,false)}
        >
          Log Out
      </Button>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"black",
        justifyContent: 'center',
        alignItems: 'center',
        gap:40
    },
    heading:{
        color:"white",
        fontSize:23,
        fontWeight:"500"
    },
    normText:{
        color:"white",
        fontSize:17,
        fontWeight:"600"
    },
    proflePic:{
        width:50,
        height:50,
        borderRadius:30
    },
    btn:{
        flexDirection:"row",
        gap:25,
        width: 250,
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
        marginTop:150
      }
  });

export default ProfilePage