import React, { useEffect } from 'react';
import { Text, View, Image, StyleSheet, StatusBar, ImageBackground } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    
    const timeout = setTimeout(() => {
      navigation.replace('LoginScreen'); 
    }, 2000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ImageBackground source={require('./images/231.jpg')} style={styles.image}>
    <View style={styles.container}>
      <StatusBar hidden />
      
      
      <Text style={styles.SplashText}>Pakhair</Text>
      
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    padding: 0.5,
    resizeMode: 'contain',

  },
  SplashText: {
    color: '#C71585',
    fontSize: 60,
    fontStyle: 'italic',
    fontWeight: 'bold',
    alignItems: 'center',
    
   
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default SplashScreen;
