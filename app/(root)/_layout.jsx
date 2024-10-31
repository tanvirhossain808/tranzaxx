import { Stack } from "expo-router"

// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="home" options={{ headerShown: false }} />
            {/* <Stack.Screen name="login" options={{ headerShown: false }} /> */}
            {/* <Stack.Screen name="register" options={{ headerShown: false }} /> */}
            {/* <Stack.Screen name="+not-found" /> */}
        </Stack>
    )
}
