import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

function App() {
    return <StartGameScreen />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default App;
