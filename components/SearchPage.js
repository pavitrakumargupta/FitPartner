import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchPage = ({ allMovie, handleSelectedMovie }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredMovies = allMovie.filter((item) =>
    item.movieName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const chunkedArr = chunkArray(filteredMovies, 2);

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View>
        <View style={styles.searchWrapper}>
          <TextInput
            placeholder="Search..."
            style={{ backgroundColor: 'transparent', width: 260, color: 'white' }}
            onChangeText={(text) => setSearchQuery(text)}
            value={searchQuery}
          />
          <Ionicons name={'search-outline'} size={20} color={'white'} />
        </View>
      </View>

      {/* Vertical ScrollView */}
      <ScrollView style={{ flex: 1, marginBottom: 80 }}>
        {chunkedArr.map((row, rowIndex) => (
          <ScrollView horizontal key={rowIndex}>
            {row.map((item, index) => (
              <View key={index} style={{ marginRight: 10, marginBottom: 10 }}>
                <TouchableOpacity onPress={() => handleSelectedMovie(item)}>
                  <Image
                    source={{ uri: item.Thumbnail }}
                    style={{ width: 150, height: 150, borderRadius: 10 }}
                    resizeMode="cover"
                  />
                  <Text style={{ textAlign: 'center', color: 'white' }}>
                    {item.movieName}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchWrapper: {
    backgroundColor: 'black',
    flexDirection: 'row',
    borderWidth: 0.7,
    borderColor: '#fff',
    backgroundColor: 'transparent',
    color: 'white',
    marginVertical: 10,
    paddingHorizontal: 5,
    paddingVertical: 0,
    borderRadius: 15,
    width: 300,
    alignItems: 'center',
    height: 40,
  },
});

export default SearchPage;
