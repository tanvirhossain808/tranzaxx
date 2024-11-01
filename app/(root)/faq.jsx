import { ScrollView, View } from "react-native"
import React from "react"
import FaqFirstPart from "../../components/faq/FaqFirstPart"
import FaqContainer from "../../components/faq/FaqContainer"

const faq = () => {
    return (
        <ScrollView>
            <View className="mt-[60px]">
                <FaqFirstPart />
            </View>
            <View className="px-4 mt-[50px]">
                <FaqContainer />
            </View>
        </ScrollView>
    )
}

export default faq
