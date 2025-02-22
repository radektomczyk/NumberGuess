import { TextInput, View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <View>
                <TextInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="number-pad"
                    maxLength={2}
                    style={styles.numberInput}
                />
            </View>
            <View>
                <PrimaryButton>Reset</PrimaryButton>
            </View>
            <View>
                <PrimaryButton>Submit</PrimaryButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: "#72063c",
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
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default StartGameScreen;
