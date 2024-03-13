import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation, NavigationContainer, Link } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FrontHomeButton from "./assets/components/FrontHomeButton";
// import LoginScreen from './assets/components/Screens/Login.js';

const homeScreenImage = require("./assets/images/personal finance more green.png");
const homeScreenText = require("./assets/images/homeScreenText.png");
const logo = require("./assets/icon.png");

const Stack = createNativeStackNavigator();

export default function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Front Home" component={FrontHome} options={{ headerShown: false }} />
        <Stack.Screen name="True Layer Login" component={TrueLayerLogin} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function FrontHome() {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate("True Layer Login");
  };
  const handleSignupPress = () => {
    alert("Sign Up Pressed");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Image style={styles.homeScreenImage} source={homeScreenImage} />
        <Image style ={styles.homeScreenText} source={homeScreenText} />
      </View>
      <View style={styles.footerContainer}>
        <FrontHomeButton label="Login" labelColor="#49A172" buttonColor="#B1FFD6" onPress={handleLoginPress} navigation={navigation} />
        <FrontHomeButton label="Sign Up" labelColor="#49A172" buttonColor="#70E6A7" onPress={handleSignupPress} navigation={navigation} />
      </View>
    </View>
  )
}

function TrueLayerLogin() {
  const handleLoginPress = () => {
    
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Image style={styles.logo} source = {logo}/>
      </View>
      <View style = {styles.footerContainer}>
        <FrontHomeButton label="Connect Your Bank Account" labelColor={"#49A172"} buttonColor={"#B1FFD6"} onPress={handleLoginPress}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#49A172',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeScreenImage: {
    width: 310,
    height: 360,
    top: -135,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  logo :{
    position: 'absolute',
    top: 10,
    left: -10,
    width: 130,
    height: 130,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  },
  homeScreenText :{
    position: 'absolute',
    top: 360,
    width: 230,
    height: 230,
    resizeMode: 'contain',
  },
  footerContainer :{
    position: 'absolute',
    color: 'red',
    top: 585,
  }
});
