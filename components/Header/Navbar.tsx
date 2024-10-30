import { View, Image } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"

const Navbar = () => {
    return (
        <View className="px-4 py-[10px] flex-row justify-between items-center bg-primary">
            <Image
                source={require("../../assets/images/navbar/navlogo.png")}
                className="w-[115px] h-7"
            />
            <Ionicons name="menu" size={28} color="white" />
        </View>
    )
}

export default Navbar
