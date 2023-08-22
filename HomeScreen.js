import React from 'react';
import { View, Text, StyleSheet,ImageBackground, Image, Pressable } from 'react-native';

export default function HomeScreen ({navigation})  {
  return (
    <ImageBackground
      source={require('./images/231.jpg')}
      style={styles.backgroundImage}
    >
    
    <View style={styles.container}>
        <Pressable style={styles.categoryContainer} onPress={() =>navigation.navigate('CuisineMenuItems')}>
          <ImageBackground
            source={require('./images/cuisines.jpg')}
            style={styles.categoryBackground}
          >
            <Text style={styles.categoryText}>Cuisines</Text>
          </ImageBackground>
        </Pressable>
      <View style={styles.categoryContainer}>
      <ImageBackground
            source={require('./images/mains.jpg')}
            style={styles.categoryBackground}
          >
        <Text style={styles.categoryText}>Mains</Text></ImageBackground>
      </View>
      <View style={styles.categoryContainer}>
      <ImageBackground
            source={require('./images/deserts.jpg')}
            style={styles.categoryBackground}
          >
        <Text style={styles.categoryText}>Deserts</Text></ImageBackground>
    
      </View>
      <View style={styles.categoryContainer}>
      <ImageBackground
            source={require('./images/sides.jpg')}
            style={styles.categoryBackground}
          >
        <Text style={styles.categoryText}>Sides</Text></ImageBackground>
      </View>
      <View style={styles.categoryContainer}>
      <ImageBackground
            source={require('./images/beverages.jpg')}
            style={styles.categoryBackground}
          >
        <Text style={styles.categoryText}>beverages</Text></ImageBackground>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center', 
  
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 20,
  },
  categoryContainer: {
    width: '80%',
    height: 100, 
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden', 
    borderWidth: 0.6, 
  },
  categoryBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20, 
    padding: 10,
  },
});


