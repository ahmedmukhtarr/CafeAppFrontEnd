import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const CuisineMenuScreen = () => {


  return (
    <ImageBackground
      source={require('./images/231.jpg')} 
      style={styles.backgroundImage}
    >
    <View style={styles.container}>
      <TouchableOpacity style={styles.cuisineContainer}>
        <ImageBackground
          source={require('./images/Asian.jpg')} 
          style={styles.backgroundImages}
        >
          <Text style={styles.cuisineText}>Asian Platter</Text>
          <Text style={styles.priceText}>$20.00</Text>
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cuisineContainer}>
        <ImageBackground
          source={require('./images/American.jpg')} 
          style={styles.backgroundImages}
        >
          <Text style={styles.cuisineText}>American Platter</Text>
          <Text style={styles.priceText}>$20.00</Text>
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cuisineContainer}>
        <ImageBackground
          source={require('./images/Chinese.jpg')}
          style={styles.backgroundImages}
        >
          <Text style={styles.cuisineText}>Chinese Platter</Text>
          <Text style={styles.priceText}>$20.00</Text>
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </ImageBackground>
      </TouchableOpacity>
     
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', 
      },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cuisineContainer: {
    width: '80%',
    height: 200, 
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  backgroundImages: {
    flex: 1,
    justifyContent: 'flex-end', 
    alignItems: 'center', 
  },
  cuisineText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 5,
  },
  priceText: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 5,
  },
  addToCartButton: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 154,
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CuisineMenuScreen;
