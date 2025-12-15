import AsyncStorage from "@react-native-async-storage/async-storage"
import { useContext, useRef, useState } from "react"
import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Button from "../../components/Button"
import CategoryPicker from "../../components/CategoryPicker"
import CurrencyInput from "../../components/CurrencyInput"
import DatePicker from "../../components/DatePicker"
import DescriptionInput from "../../components/DescriptionInput"
import { categories } from "../../constants/categories"
import { MoneyContext } from "../../contexts/GlobalState"
import { globalStyles } from "../../styles/globalStyles"

const initialForm = {
        description: "",
        value: 0,
        date: new Date(),
        category: categories.income.name
    }

export default function AddTransactions() {
    const [transactions, setTransactions] = useContext(MoneyContext)
    const [form, setForm] = useState(initialForm)
    const valueInputRef = useRef() 
    
    const setAsyncStorage = async (data) => {
        try {
            await AsyncStorage.setItem("transactions", JSON.stringify(data))
        }catch(e) {
            console.log(e)
        }
    }

    const addTransactions = async () => {
        const newTransactions = { id: transactions.length + 1, ...form };
        const updateTransactions = [...transactions, newTransactions]
        setTransactions(updateTransactions)
        setForm(initialForm)
        await setAsyncStorage(updateTransactions)

        Alert.alert("Transactions added successfully.");
    }  

    return (
        <SafeAreaView style={globalStyles.screenContainer}>
            <ScrollView style={globalStyles.content}>
                <KeyboardAvoidingView style={styles.form}>                     
                    
                    <DescriptionInput form={form} setForm={setForm} valueInputRef={valueInputRef}/>
                    <CurrencyInput form={form} setForm={setForm} valueInputRef={valueInputRef}/>
                    <DatePicker form={form} setForm={setForm}/>
                    <CategoryPicker form={form} setForm={setForm}/>           
                    
                </KeyboardAvoidingView>

                <Button onPress={addTransactions}>Adicionar</Button>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    form: {
        gap: 12,
        marginBottom: 40,
        marginTop: 10
    }   
})