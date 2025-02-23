import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title>Opponent guess</Title>
            <View>
                <Text>Higher or lower</Text>
                <View>
                    <PrimaryButton>+</PrimaryButton>
                </View>
                <View>
                    <PrimaryButton>-</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#ddb52f",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "#ddb52f",
        padding: 12,
    },
});
