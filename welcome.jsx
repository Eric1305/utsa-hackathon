import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import myImage from '/Users/ericlee/Desktop/PocketCash/PocketCash/assets/images/PocketCash.png';

const Welcome = () => { 
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View>
        <Image style={{
          width:400,
          height:400,
          marginTop:0
        }} source={myImage}></Image>
      </View>
      <Text style={styles.title}>Pocket Cash</Text>
      <Text style={styles.subtitle}>Making bank-free asset tracking accessible</Text> 
      <View style={styles.buttonContainer}>
        <Button style={styles.buttonContainer} title="Sign In" onPress={() => router.push('/login')} />
        <Button style={{backgroundColor:'#50B093'}} title="Register" onPress={() => router.push('/register')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#98B1B4',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#133C55',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
    textAlign: 'center',
    color: '#133C55',
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'space-between',
    backgroundColor:'#50B093'
  },
});

export default Welcome;
