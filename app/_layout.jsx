import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import "react-native-reanimated"
import "../global.css"
import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import Navbar from "../components/Header/Navbar"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
        "Poppins-Regular": require("../assets/fonts/poppins/Poppins-Regular.ttf"),
        "Poppins-Bold": require("../assets/fonts/poppins/Poppins-Bold.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/poppins/Poppins-SemiBold.ttf"),
        "Poppins-Light": require("../assets/fonts/poppins/Poppins-Light.ttf"),
        BebasNeue: require("../assets/fonts/Bebas/BebasNeue-Regular.ttf"),
    })

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded])

    if (!loaded) {
        return null
    }

    return (
        // <ThemeProvider
        //     value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        // >
        <View className="flex-1">
            <SafeAreaView className="flex-1">
                <StatusBar style="light" backgroundColor="#010101" />
                <Navbar />
                <View></View>
                <Stack>
                    <Stack.Screen
                        name="index"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="+not-found" />
                </Stack>
            </SafeAreaView>
        </View>
        // </ThemeProvider>
    )
}
