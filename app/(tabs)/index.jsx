import { useContext } from "react"
import { FlatList, Text, View } from "react-native"
import TransactionItem from "../../components/TransactionItem"
import { MoneyContext } from "../../contexts/GlobalState"
import { globalStyles } from "../../styles/globalStyles"

export default function Transactions() {
    const [transactions] = useContext(MoneyContext)

    return (
        <View styte={globalStyles.screenContainer}>
            <FlatList
                data={transactions}
                renderItem={({item}) => <TransactionItem {...item}/>}
                ListEmptyComponent={
                    <Text style={globalStyles.secondaryText}>Ainda não há nenhuma transação!</Text>
                }
                style={globalStyles.content}
            />
        </View>
    )
}