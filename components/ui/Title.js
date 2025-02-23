import { Text, StyleSheet } from "react-native";
import { Children } from "react";
import Colors from "../../constants/colors";
function Title({children}) {
    return <Text style={styles.title}>{children}</Text>;
}

export default Title;
const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "white",
        padding: 12,
    },
});