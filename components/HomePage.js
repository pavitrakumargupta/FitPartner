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
import {Appbar, TextInput, Button, List} from 'react-native-paper';
// import Carousel from 'react-native-reanimated-carousel';
import Carousel from 'react-native-reanimated-carousel';
import EvilIcons from 'react-native-vector-icons/EvilIcons'


const HomePage = ({allMovie,handleSelectedMovie}) => {
  
    const width = Dimensions.get('window').width;
  return (
    <ScrollView style={styles.container}>
        <Image
        source={require("../image/logo.png")} // Displaying the first image from the arr array
        style={styles.logo} // Adjust the dimensions as needed
      />
        <View style={styles.tabWrapper} >
            <Text style={styles.tab}>Popular</Text>
            <Text style={styles.tab}>Upcoming</Text>
            <Text style={styles.tab}>Classics</Text>
            <Text style={styles.tab}>Top 10</Text>
        </View>
        <Text style={styles.heading}>Now Playing</Text>
        <Carousel
            loop
            sliderWidth={width}
            sliderHeight={width}
            itemWidth={width - 60}
            width={width}
            height={350}
            data={allMovie}
            mode="parallax"
            autoplay={true} // Enable autoplay
            autoplayInterval={2000}
            scrollAnimationDuration={1000}
            style={{ marginTop: -20 }}
            onSnapToItem={(index) => console.log('current index:', index)}
            renderItem={({ item, index }) => (
                <View   style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => handleSelectedMovie(item)}>
                    <Image
                        
                        source={{ uri: item.Thumbnail }}
                        style={{ width: width-100, height: 300, position: 'relative' }}
                        resizeMode="cover"
                    />
                    <View style={styles.movieWrapper}>
                        <View>
                        <Text style={styles.heading}>{item.movieName}</Text>
                        <Text style={styles.normText}>{item.subheading}</Text>
                        </View>
                        <Button
                        mode="contained"
                        style={styles.button}
                        >
                        <EvilIcons name={'play'} size={15} color={'white'} />
                        Watch Trailer
                        </Button>
                    </View>
                    </TouchableOpacity>
                </View>
            )}
            />
            <Text style={styles.heading}>Popular</Text>
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
            <Text style={styles.heading}>Upcoming</Text>
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
        gap:10,
        paddingBottom:50,
        marginBottom:90
    },
    logo:{
        width: 30, 
        height: 30, 
        marginLeft:10,
        marginBottom:10
    },
    tabWrapper:{
        flexDirection:"row",
        gap:7,
        marginLeft:10,
        marginBottom:10
    },
    tab:{
        borderRadius:15,
        borderWidth: 0.7,
        borderColor: 'white',
        paddingHorizontal: 8,
        paddingVertical: 2,
        fontSize:12
    },
    heading:{
        color:"white",
        fontSize:20,
        fontWeight:"400",
        marginLeft:10,
        marginBottom:10
    },
    normText:{
        color:"white",
        fontSize:12,
        fontWeight:"400",
        marginLeft:10
    },
    movieWrapper:{
        flexDirection:"row",
        width:245,
        justifyContent:"space-between",
        marginTop:10,
        marginLeft:10
    },
    button:{
        backgroundColor:"#E33939",
        color:'white',
        paddingHorizontal: 0,
        paddingVertical: 0,
        borderRadius:15,
        width: 129,
        fontSize:11,
        justifyContent: 'center',
        alignItems: 'center',
      }
  });


export default HomePage