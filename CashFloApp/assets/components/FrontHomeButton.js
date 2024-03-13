import { StyleSheet, View, Pressable, Text } from 'react-native';
import AppLoading from "expo-app-loading";
import {useFonts, Outfit_400Regular, Outfit_500Medium, Outfit_700Bold} from "@expo-google-fonts/outfit";

export default function FrontHomeButton({ label, labelColor, buttonColor, onPress }) {
    let [fontsLoaded] = useFonts({
        Outfit_400Regular,
        Outfit_500Medium,
        Outfit_700Bold
    });

    const buttonLabelColor = { color: labelColor || 'white' };
    const buttonContainerColor = { backgroundColor: buttonColor || 'white' };

    if(!fontsLoaded){
        return <AppLoading />
    } else {
        return(
            <View style={[styles.buttonContainer, buttonContainerColor] }>
                <Pressable style={styles.button} onPress={onPress}>
                    <Text style={[styles.buttonLabel, buttonLabelColor]}>{label}</Text>
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        borderRadius: 40,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        backgroundColor: '#B1FFD6',
    },
    button: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonLabel: {
        color: 'green',
        fontSize: 21,
        fontFamily: "Outfit_700Bold"
    }
})