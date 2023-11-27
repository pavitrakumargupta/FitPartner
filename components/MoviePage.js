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
  Dimensions,
  TouchableOpacity 
  
} from 'react-native';
import {Appbar, Button, List} from 'react-native-paper';
// import Carousel from 'react-native-reanimated-carousel';
import Carousel from 'react-native-reanimated-carousel';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import VideoPlayer from  "react-native-video-player"


const MoviePage = ({selectedMovie,handleSelectedMovie,allMovie}) => {

    let arr=[
        "https://lumiere-a.akamaihd.net/v1/images/p_disney_wish_799_v2_9b93081b.jpeg?region=0%2C0%2C540%2C810",
        "https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg",
        "https://assets.vogue.in/photos/5f16b3bc9ffca08d1848369b/2:3/w_2560%2Cc_limit/must-watch%2520action%2520movies.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-624,w-40,l-end/et00313411-kzwupkjajz-portrait.jpg",
        "https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/force-2-et00035930-17-02-2021-09-19-22.jpg"

    ]
    
  return (
    <ScrollView style={styles.container}>
        <TouchableOpacity onPress={() => handleSelectedMovie(undefined)}>
         <Ionicons  name={'arrow-back'} size={20} color={'white'} />

        </TouchableOpacity>
        <VideoPlayer
            video={{ uri: selectedMovie.Video }}
            videoWidth={1600}
            videoHeight={900}
            thumbnail={{ uri: selectedMovie.Thumbnail}}
        />
        <Text style={styles.heading}>{selectedMovie.movieName}: {selectedMovie.subheading}</Text>
        <View style={{flexDirection:"row",marginVertical:10,marginHorizontal:10,alignItems:"center", gap:10}}>
            <MaterialCommunityIcons name={'clock-time-four-outline'} size={20} color={'white'} />
            <Text style={{color:'white'}}>2h 50m</Text>
        </View>
        <View style={styles.buttons}>
            <Button style={styles.button}>
                <AntDesign name={'download'} size={20} color={'white'} />
                <Text  style={{color:'white'}}>Download</Text>
            </Button>
            <Button style={styles.button}>
                <AntDesign name={'plus'} size={20} color={'white'} />
                <Text style={{color:'white'}}>My List</Text>
            </Button>
        </View>
        <View
            style={{
                borderBottomColor: 'white',
                borderBottomWidth:0.7,
                margin:10,
                marginBottom:15
            }}
        />
        <View style={styles.tabWrapper} >
            <Text style={styles.tab}>Action</Text>
            <Text style={styles.tab}>Thriller</Text>
            <Text style={styles.tab}>Crime</Text>
        </View>
        <Text style={styles.normText}>{selectedMovie.description}</Text>
        <Text style={styles.heading}>Top Cast</Text>
        <ScrollView style={styles.marginSection} horizontal={true} >
                {selectedMovie.cast.map((item, index) => (
                    <View key={index} style={{ marginRight: 20 }}>
                    <Image
                        source={{ uri: item }}
                        style={{ width: 70, height: 100, borderRadius: 50 }}
                        resizeMode="cover"
                    />
                    {/* Optionally, add a caption or index */}
                    </View>
                ))}
            </ScrollView>
            <Text style={styles.heading}>More like This</Text>
            <ScrollView horizontal={true}  >
                {allMovie.map((item, index) => (
                    <View key={index} style={{ marginRight: 10 }}>
                        <TouchableOpacity onPress={() => handleSelectedMovie(item)}>
                            <Image
                                source={{ uri: item.Thumbnail }}
                                style={{ width: 90, height: 120, borderRadius: 10 }}
                                resizeMode="cover"
                            />
                            {/* Optionally, add a caption or index */}
                            <Text style={{ textAlign: 'center' }}>{item.movieName}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"black",
        gap:20,
        padding:10, 
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },

    heading:{
        color:"white",
        fontSize:20,
        fontWeight:"400",
        marginLeft:10
    },
    tabWrapper:{
        flexDirection:"row",
        gap:17,
        marginLeft:10,
        marginBottom:10
    },
    tab:{
        borderRadius:15,
        borderWidth: 0.7,
        borderColor: 'white',
        paddingHorizontal: 8,
        paddingVertical: 2,
        fontSize:12,
        color:"white"
    },
    marginSection:{
        marginVertical:20
    },
    buttons:{
        flexDirection:'row',
        gap:20,
        marginVertical:20
    },
    button:{
        borderRadius:25,
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 8,
        paddingVertical: 2,
        fontSize:12,
        color:"white",
        gap:20,
        alignItems:"center",
        justifyContent:"space-between"
    },
    normText:{
        color:"white",
        fontSize:12,
        fontWeight:"400",
        margin:10
    },
  });


export default MoviePage