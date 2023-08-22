import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet, ImageBackground } from 'react-native';

export default function SignUpScreen({navigation}){
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSignUp = () => {
  
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Phone Number:', phoneNumber);
    console.log('Agreed to Terms:', agreedToTerms);
  };

  return (
    <ImageBackground
      source={require('./images/231.jpg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style= {styles.SignUptext}>Enter Your Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          onChangeText={(text) => setFullName(text)}
          value={fullName}
        />
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
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
        />
        <View style={styles.checkboxContainer}>
          <Pressable
            style={[styles.checkbox, { backgroundColor: agreedToTerms ? '#007AFF' : 'transparent' }]}
            onPress={() => setAgreedToTerms(!agreedToTerms)}
          />
          <Text style={styles.checkboxText}>I agree to the terms and conditions</Text>
        </View>
        <Pressable style={styles.signUpButton} onPress={() =>navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonText}>Sign Up</Text>
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
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white', 
    opacity: 1, 
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'purple',
    marginRight: 10,
  },
  checkboxText: {
    color: 'purple',
  },
  signUpButton: {
    backgroundColor: 'purple', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  SignUptext: {
    color: 'purple',
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});


