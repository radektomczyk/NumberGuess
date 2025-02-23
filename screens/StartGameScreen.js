import { TextInput, View, Text, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";

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
        <View style={styles.inputContainer}>
            <View>
                <TextInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="number-pad"
                    maxLength={2}
                    style={styles.numberInput}
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                />
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.ButtonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>
                        Reset
                    </PrimaryButton>
                </View>
                <View style={styles.ButtonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>
                        Confirm
                    </PrimaryButton>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 5,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    numberInput: {
        height: 70,
        width: 70,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    ButtonContainer: {
        flex: 1,
    },
});

export default StartGameScreen;
