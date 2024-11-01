import { View, Text } from "react-native"
import React from "react"

const faq = () => {
    return (
        <View>
            <View>
                <View className="flex-row flex-wrap justify-center items-center">
                    <Text className="uppercase text-[36px] font-BebasNeue">
                        Got
                    </Text>
                    <ImageBackground
                        source={require("../../assets/images/questionbg.png")}
                        className="p-1 min-w-[143px]"
                    >
                        <Text className="uppercase text-[36px] font-BebasNeue text-[#00AEF0] text-center">
                            question?{" "}
                        </Text>
                    </ImageBackground>

                    <Text className="text-[36px] font-BebasNeue">
                        We've got
                    </Text>
                    <Text className="text-[36px] font-BebasNeue uppercase text-center">
                        answers!
                    </Text>
                </View>
                <Text className="text-[#565656] text-center text-[13px] font-poppins mt-[10px]">
                    Find answers to the most common questions about our
                    platform, pricing plans, and services. Whether you're
                    curious about the features or looking for detailed support,
                    our FAQs have you covered.
                </Text>
            </View>
            <View>
                <View className="flex-row items-center justify-center">
                    <TouchableOpacity className="px-3 py-4 bg-primary rounded-lg flex-row items-center gap-1 ">
                        <Text className="uppercase text-white font-poppins text-[16px] font-medium">
                            Explore FAQs{" "}
                        </Text>
                        <Entypo
                            name="arrow-long-right"
                            size={16}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default faq
