import { AntDesign } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"
import { View, Text } from "react-native"

const BtnWithArrow = ({ title, handler }) => {
    return (
        <TouchableOpacity
            className="bg-[#00ADEF] py-3 px-4 rounded-[12px] flex-row items-center gap-1"
            onPress={handler}
        >
            <Text className="font-poppins text-[16px] text-white uppercase font-semibold text-center">
                {title}
            </Text>
            <AntDesign name="arrowright" size={20} color="white" />
        </TouchableOpacity>
    )
}

export default BtnWithArrow
