import { TouchableOpacity, View } from "react-native"
import { Text } from "react-native"

const Btn = ({ title }) => {
    return (
        <View>
            <TouchableOpacity className="bg-[#00ADEF] py-4 rounded-[12px]">
                <Text className="font-poppins text-[18px] text-white uppercase font-semibold text-center">
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Btn
