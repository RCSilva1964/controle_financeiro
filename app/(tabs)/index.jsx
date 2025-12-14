import { useContext } from "react"
import { Text } from "react-native"
import { MoneyContext } from "../../contexts/GlobalState"

export default function Transactions() {
    const [transactions] = useContext(MoneyContext)

    return <Text>{transactions[0]?.description}</Text>
}