import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FrontHomeButton from "../FrontHomeButton";

const logo = require("../../icon.png");

export default function LoginScreen() {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    alert('Christivie Login');
  };

  const handleSignUpPress = () => {
    alert('Sign Up Pressed');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Image style = {styles.logo} source = {logo}/>
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
