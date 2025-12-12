
import { Stack } from "expo-router"
import { StatusBar } from "react-native"
import { colors } from "../constants/colors"

export default function RootLlayout() {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} style="light" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false}}/>
        <Stack.Screen name="+not-found"/>
      </Stack>
    </>
  )  
}
