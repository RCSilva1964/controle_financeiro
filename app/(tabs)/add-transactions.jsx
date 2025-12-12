import { useState } from "react"
import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Button from "../../components/Button"
import { globalStyles } from "../../styles/globalStyles"


export default function AddTransactions() {
    const initialForm = {
        description: "",
        value: 0,
        date: "",
        category: "Renda"
    }

    const [form, setForm] = useState(initialForm)

    const addTransactions = () => {
        Alert.alert(`${form.description} | ${form.value} | ${form.date} | ${form.category}`)
    }

    return (
        <SafeAreaView style={globalStyles.screenContainer}>
            <ScrollView style={globalStyles.content}>
                <View style={styles.form}>
                    <View>
                        <Text style={globalStyles.inputLabel}>Descrição</Text>
                        <TextInput
                            value={form.description}
                            onChangeText={(text) => setForm({...form, description: text})}
                            style={globalStyles.input}/>
                    </View>

                    <View>
                        <Text style={globalStyles.inputLabel}>Valor</Text>
                        <TextInput
                            value={form.value}
                            onChangeText={(text) => setForm({...form, value: text})}
                            keyboardType="numeric" 
                            style={globalStyles.input}/>
                    </View>

                    <View>
                        <Text style={globalStyles.inputLabel}>Data</Text>
                        <TextInput 
                            value={form.date}
                            onChangeText={(text) => setForm({...form, date: text})}
                            style={globalStyles.input}/>
                    </View>

                    <View>
                        <Text style={globalStyles.inputLabel}>Categoria</Text>
                        <TextInput 
                            value={form.category}
                            onChangeText={(text) => setForm({...form, category: text})}
                            style={globalStyles.input}/>
                    </View>
                </View>

                <Button onPress={addTransactions}>Adicionar</Button>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    form: {
        gap: 12,
        marginBottom: 40
    }
})