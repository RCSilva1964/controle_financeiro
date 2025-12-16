import { StyleSheet, Text, View } from 'react-native';
import { categories } from "../constants/categories";
import { globalStyles } from "../styles/globalStyles";
import CategoryItem from "./CategoryItem";

export default function SummaryItem({ category, value }) {

    const valueStyle =
        category === categories.income.name
            ? globalStyles.positiveText
            : globalStyles.negativeText;

    return (
        <View style={styles.itemContainer}>
            <CategoryItem category={category} />
            <View style={styles.textContainer}>
                <Text style={globalStyles.primaryText}>
                    {categories[category].displayName}
                </Text>
                <Text style={valueStyle}>
                    {value.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 4
    },
    textContainer: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        marginLeft: 12,
        justifyContent: "space-between",
        paddingVertical: 8
    },
    bottomLineContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})