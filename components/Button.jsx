import { StyleSheet, Text, TouchableHighlight } from "react-native";
import { colors } from "../constants/colors";

export default function AddButton({ children, onPress }) {
    return (
        <TouchableHighlight style={style.background} onPress={onPress}>
                <Text style={style.text}>{children}</Text>
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    background: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 44,
        borderRadius: 8,
       backgroundColor: colors.primary,
    },
    text: {
        color: colors.primaryContrast,
        fontSize: 18,
        fontWeight: 600
    },
    button: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        padding: 15,
    },
})