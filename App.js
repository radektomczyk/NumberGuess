import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { use, useState } from "react";

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
            colors={["#4e0329", "#ddb52f"]}
            style={styles.rootScreen}
        >
            <ImageBackground
                source={require("./assets/images/background.png")}
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                {screen}
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
