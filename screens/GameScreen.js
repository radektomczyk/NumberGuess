import { View, Text, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from '@expo/vector-icons';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let min = 1;
let max = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    const nextGuessHandler = (direction) => {
        if (
            (direction === "lower" && currentGuess < userNumber) ||
            (direction === "greater" && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [
                { text: "Sorry!", style: "cancel" },
            ]);
            return;
        }

        if (direction === "lower") {
            max = currentGuess;
        } else {
            min = currentGuess + 1;
        }
        console.log(min, max);
        const newRndNumber = generateRandomBetween(min, max, currentGuess);

        setCurrentGuess(newRndNumber);
    };
    console.log(userNumber, currentGuess);
    return (
        <View style={styles.screen}>
            <Title>Opponent guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>
                    Higher or lower
                </InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, "lower")}
                        >
                            <Ionicons name="remove" size={24} color="white"/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, "greater")}
                        >
                            <Ionicons name="add" size={24} color="white"/>
                            </PrimaryButton>
                    </View>
                </View>
            </Card>
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
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    },
    instructionText: {
        marginBottom: 12,
    },
});
