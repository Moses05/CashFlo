import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation, NavigationContainer, Link } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as WebBrowser from 'expo-web-browser';

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
  const [userData, setUserData] = useState(null);

  const handleLoginPress = async () => {
    const url = "https://auth.truelayer-sandbox.com/?response_type=code&client_id=sandbox-moses-10d0d3&scope=accounts%20balance%20cards%20direct_debits%20info%20offline_access%20standing_orders%20transactions&redirect_uri=https://console.truelayer.com/redirect-page&providers=uk-cs-mock%20uk-ob-all%20uk-oauth-all"
    
    const response = await WebBrowser.openBrowserAsync(url);
    if (response) {
      setUserData(response.data);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Image style={styles.logo} source = {logo}/>
        <Text>User Data: {userData ? JSON.stringify(userData) : "No Data"}</Text>
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
