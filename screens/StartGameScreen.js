import { TextInput, View, Text, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState("");

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    };

    const resetInputHandler = () => {
        setEnteredNumber("");
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid number!", "number has to eb a number 1..99", [
                {
                    text: "Okay",
                    style: "destructive",
                    onPress: resetInputHandler,
                },
            ]);
            return;
        }
        console.log("Correct number, moving to next");
        onPickNumber(chosenNumber);
    };

    return (
        <View style={styles.rootContainer}>
            <Title>Guess my number</Title>
            <Card>
                <InstructionText>Enter a number</InstructionText>
                <TextInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="number-pad"
                    maxLength={2}
                    style={styles.numberInput}
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                />

                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>
                            Reset
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>
                            Confirm
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: "center",
    },

    numberInput: {
        height: 70,
        width: 70,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        // alignSelf: "center",
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    },
});

export default StartGameScreen;
