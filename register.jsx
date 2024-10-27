import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import UserProfile from '/Users/ericlee/Desktop/PocketCash/PocketCash/scripts/UserProfile.js';

const register = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();



  const handleRegister = () => {
    if (email && password) {
      const formData = new FormData();
      formData.append("email", email)
      formData.append("password", password)

      try{
        fetch("http://127.0.0.1:8000/register", formData)
      } catch{
        console.log("error");
      }
      Alert.alert('Registration Successful', `Welcome, ${email}!`);
      router.push('/login'); 
    } else {
      Alert.alert('Error', 'Please enter both email and password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#98B1B4',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#133C55',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 5,
    color: '#133C55',
  },
});
const setEmail = new UserProfile("setEmail", "setPassword");
export default register;