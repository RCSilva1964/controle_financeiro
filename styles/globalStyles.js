import { StyleSheet } from 'react-native';
import { colors } from "../constants/colors";

export const globalStyles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        display: 'flex',
    },
    content: {
        gap: 12,
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    input: {
        height: 40,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: colors.secondaryText,
        borderRadius: 8,
        flexGrow: 1,
    },
    inputLabel: {
        fontSize: 16,
        color: colors.primaryText,
        marginBottom: 4,
    },
    line: {
        backgroundColor: colors.secondaryText,
        height: 1
    },
    primaryText: {
        fontSize: 16,
        color: colors.primaryText
    },
    secondaryText: {
        fontSize: 12,
        color: colors.secondaryText
    },
    positiveText: {
        fontSize: 16,
        color: colors.positiveText
    },
    negativeText: {
        fontSize: 16,
        color: colors.negativesText
    },
})