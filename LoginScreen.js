

import React, { useState } from 'react';

import { View, TextInput, Pressable, Text, StyleSheet, ImageBackground } from 'react-native';

export default function LoginScreen({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
  
    console.log('Email:', email);
    console.log('Password:', password);
  };
 


  return ( 
   
    <ImageBackground
      source={require('./images/231.jpg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
      <Text style={styles.headerText}>Bhatti's Cafe</Text>
      <Text style={styles.caption}>The Ultimate Experience</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Pressable style={styles.loginButton} onPress={() =>navigation.navigate('HomeScreen')}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Pressable onPress={() =>navigation.navigate('SignUpScreen')} style={styles.signUpLink}>
            <Text style={styles.signUpLinkText}>Don't have an account? Sign up here</Text>
          </Pressable>
        
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
  headerText: {
    color: 'purple',
    fontSize: 50,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  caption: {
    fontStyle: 'italic',
    color: 'purple',
    fontSize: 20,
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    width: '85%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: 'black',
    backgroundColor:'white', 
    opacity: 1, 
  },
  loginButton: {
   
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor:'purple'
    
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    

  },
  signUpLink: {
    marginTop: 10,
  },
  signUpLinkText: {
    color: 'purple',
    textDecorationLine: 'underline',
  },
});

