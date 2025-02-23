import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    ImageBackground,
    Text,
    View,
    SafeAreaView,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { use, useState } from "react";
import Colors from "./constants/colors";

function App() {
    const [userNumber, setUserNumber] = useState();

    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber);
    };

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

    if (userNumber) {
        screen = <GameScreen />;
    }

    return (
        <LinearGradient
            colors={[Colors.primary700, Colors.accent500]}
            style={styles.rootScreen}
        >
            <ImageBackground
                source={require("./assets/images/background.png")}
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        // backgroundColor: "#ddb52f",
    },
    backgroundImage: {
        opacity: 0.15,
    },
});

export default App;
