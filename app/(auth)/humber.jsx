import { View, Text } from "react-native"
import { aboutUsData, contact, follow, screens } from "../../constant/data"
import { TouchableOpacity } from "react-native"
import { Image } from "react-native"
import { router } from "expo-router"

const humber = () => {
    return (
        <View className="bg-[#00AEF0] px-10 py-5">
            <View className="flex gap-[10px]">
                {screens.map((screen, index) => (
                    <View key={index}>
                        <TouchableOpacity
                            onPress={() => router.push(screen.link)}
                        >
                            <Text className="text-white font-poppins text-[16px] font-semibold uppercase">
                                {screen.page}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
            <View className="flex-row items-center mt-5">
                <TouchableOpacity className="flex-row items-center gap-[10px] bg-[#010101] px-[18px] py-[10px] rounded-[4px]">
                    <View className="bg-white w-5 h-5 rounded-full flex-row justify-center items-center">
                        <Image
                            source={require("../../assets/images/plus.png")}
                        />
                    </View>
                    <Text className="text-white font-poppins text-[16px] font-semibold uppercase ">
                        ADD LISTING{" "}
                    </Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row items-center mt-5">
                <TouchableOpacity className="flex-row items-center gap-[10px] border-[1px] border-white px-[18px] py-[10px] rounded-[4px]">
                    <Image
                        source={require("../../assets/images/selectArrow (2).png")}
                        className="w-5 h-5"
                    />
                    <Text className="text-white font-poppins text-[16px] font-semibold uppercase ">
                        EN
                    </Text>
                    <Image
                        source={require("../../assets/images/selectArrow (1).png")}
                        className="w-5 h-5"
                    />
                </TouchableOpacity>
            </View>
            <View className="h-[1px] w-full bg-white mt-5"></View>
            <View className="mt-5">
                <Text className="text-[14px] font-poppins text-white font-bold uppercase">
                    About us
                </Text>
                <View className="mt-[10px] flex gap-1">
                    {aboutUsData.map((data, index) => (
                        <View key={index}>
                            <TouchableOpacity>
                                <Text className="text-white text-[14px]">
                                    {data.page}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
            <View className="mt-[10px]">
                <Text className="text-[14px] font-poppins text-white font-bold uppercase">
                    About us
                </Text>
                <View className="mt-[10px] flex gap-1">
                    {contact.map((data, index) => (
                        <View key={index}>
                            <TouchableOpacity>
                                <Text className="text-white text-[14px]">
                                    {data.page}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
            <View className="mt-[10px]">
                <Text className="text-[14px] font-poppins text-white font-bold uppercase">
                    Follow us on{" "}
                </Text>
                <View className="mt-[10px] flex-row gap-[10px]">
                    {follow.map((data, index) => (
                        <View
                            key={index}
                            className="w-[38px] h-[38px] rounded-full border-[1px] border-white"
                        >
                            <TouchableOpacity className="flex-row flex-1 items-center justify-center">
                                <Image source={data.img} />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    )
}

export default humber
