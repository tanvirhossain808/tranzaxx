import { View, Text, ScrollView } from "react-native"
import Hero from "../../components/advertise/Hero"
import PersonalInformation from "../../components/advertise/PersonalInformation"

const advertise = () => {
    return (
        <ScrollView className="bg-white min-h-screen">
            <Hero />
            <View className="mt-6 px-4">
                <PersonalInformation />
            </View>
        </ScrollView>
    )
}

export default advertise
