import { Text, StyleSheet } from "react-native";
import { Children } from "react";
import Colors from "../constants/colors";
function Title({children}) {
    return <Text style={styles.title}>{children}</Text>;
}

export default Title;
const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: Colors.accent500,
        textAlign: "center",
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12,
    },
});