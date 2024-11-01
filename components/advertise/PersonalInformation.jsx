import { View, Text, Image, TextInput } from "react-native"
import Btn from "../shared/Btn"
import { TouchableOpacity } from "react-native"

export default function PersonalInformation() {
    return (
        <View>
            <View>
                <View className="flex-row items-center gap-[10px]">
                    <Image
                        source={require("../../assets/images/advertise/personalinfoicon.png")}
                        className=""
                    />
                    <Text className="text-primary text-[22px] translate-y-1 font-semibold font-poppins">
                        Personal Information
                    </Text>
                </View>
                <View className="mt-[10px] flex-row items-center justify-between">
                    <View>
                        <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins">
                            full name *
                        </Text>
                        <View
                            className="px-[10px] py-[17px] mt-[6px] border-[1px] 
                    border-[#DEE2E6] rounded-[5px] bg-white"
                        >
                            <TextInput
                                placeholder="your name"
                                className="placeholder:text-[#999] font-poppins text-[12px] w-[170px]"
                            />
                        </View>
                        <View className="text-[#061B3B] text-[12px] font-semibold font-poppins"></View>
                    </View>
                    <View>
                        <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins">
                            Email Address *
                        </Text>
                        <View
                            className="px-[10px] py-[17px] mt-[6px] border-[1px] 
                    border-[#DEE2E6] rounded-[5px] bg-white"
                        >
                            <TextInput
                                placeholder="email address"
                                className="placeholder:text-[#999] font-poppins text-[12px] w-[170px]"
                            />
                        </View>
                    </View>
                </View>
                <View>
                    <View className="mt-[10px]">
                        <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins">
                            full address *
                        </Text>
                        <View
                            className="px-[10px] py-[17px] mt-[6px] border-[1px] 
                    border-[#DEE2E6] rounded-[5px] bg-white"
                        >
                            <TextInput
                                placeholder="type your address"
                                className="placeholder:text-[#999] font-poppins text-[12px] w-[170px]"
                            />
                        </View>
                    </View>
                </View>
                {/* 
            todo date picker
            */}
                <View>
                    <View className="mt-[10px]">
                        <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins">
                            discount *
                        </Text>
                        <View
                            className="px-[10px] py-[17px] mt-[6px] border-[1px] 
                    border-[#DEE2E6] rounded-[5px] bg-white"
                        >
                            <TextInput
                                placeholder="0"
                                className="placeholder:text-[#999] font-poppins text-[12px] w-[170px]"
                                keyboardType="numeric"
                            />
                        </View>
                    </View>
                </View>
            </View>
            {/* card horder information */}
            <View className="mt-[26px]">
                <View className="flex-row items-center gap-[10px]">
                    <Image
                        source={require("../../assets/images/advertise/cardinfo.png")}
                        className=""
                    />
                    <Text className="text-primary text-[22px] translate-y-1 font-semibold font-poppins uppercase">
                        Card holder information
                    </Text>
                </View>
                <View className="mt-[10px] flex-row items-center justify-between">
                    <View>
                        <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins uppercase">
                            First Name *
                        </Text>
                        <View
                            className="px-[10px] py-[17px] mt-[6px] border-[1px] 
                    border-[#DEE2E6] rounded-[5px] bg-white"
                        >
                            <TextInput
                                placeholder="CARD HOLDER'S FII"
                                className="placeholder:text-[#999] font-poppins text-[12px] w-[170px]"
                            />
                        </View>
                        <View className="text-[#061B3B] text-[12px] font-semibold font-poppins"></View>
                    </View>
                    <View>
                        <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins">
                            Last Name *
                        </Text>
                        <View
                            className="px-[10px] py-[17px] mt-[6px] border-[1px] 
                    border-[#DEE2E6] rounded-[5px] bg-white"
                        >
                            <TextInput
                                placeholder="CARD HOLDER'S LA"
                                className="placeholder:text-[#999] font-poppins text-[12px] w-[170px]"
                            />
                        </View>
                    </View>
                </View>
                <View>
                    <View className="mt-[10px]">
                        <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins uppercase">
                            Address *
                        </Text>
                        <View
                            className="px-[10px] py-[17px] mt-[6px] border-[1px] 
                    border-[#DEE2E6] rounded-[5px] bg-white"
                        >
                            <TextInput
                                placeholder="CARD HOLDER'S ADDRESSs"
                                className="placeholder:text-[#999] font-poppins text-[12px] w-[170px]"
                            />
                        </View>
                    </View>
                    <View className="mt-[10px] flex-row items-center justify-between">
                        <View>
                            <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins uppercase">
                                City*
                            </Text>
                            <View
                                className="px-[10px] py-[17px] mt-[6px] border-[1px] 
                    border-[#DEE2E6] rounded-[5px] bg-white"
                            >
                                <TextInput
                                    placeholder="CARD HOLDER'S CITY"
                                    className="placeholder:text-[#999] font-poppins text-[12px] w-[170px]"
                                />
                            </View>
                            <View className="text-[#061B3B] text-[12px] font-semibold font-poppins"></View>
                        </View>
                        <View>
                            <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins">
                                STATE/PROVINCE*
                            </Text>
                            <View
                                className="px-[10px] py-[17px] mt-[6px] border-[1px] 
                    border-[#DEE2E6] rounded-[5px] bg-white"
                            >
                                <TextInput
                                    placeholder="State / Province"
                                    className="placeholder:text-[#999] font-poppins text-[12px] w-[170px]"
                                />
                            </View>
                        </View>
                    </View>
                    <View className="mt-[10px] flex-row items-center justify-between">
                        <View>
                            <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins uppercase">
                                POSTAL CODE*
                            </Text>
                            <View
                                className="px-[10px] py-[17px] mt-[6px] border-[1px] 
                    border-[#DEE2E6] rounded-[5px] bg-white"
                            >
                                <TextInput
                                    placeholder="Postal Code"
                                    className="placeholder:text-[#999] font-poppins text-[12px] w-[170px]"
                                />
                            </View>
                            <View className="text-[#061B3B] text-[12px] font-semibold font-poppins"></View>
                        </View>
                        <View>
                            <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins">
                                COUNTRY*
                            </Text>
                            <View
                                className="px-[10px] py-[17px] mt-[6px] border-[1px] 
                    border-[#DEE2E6] rounded-[5px] bg-white"
                            >
                                <TextInput
                                    placeholder="CANADA"
                                    className="placeholder:text-[#999] font-poppins text-[12px] w-[170px]"
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            {/* card information */}
            <View className="mt-[26px]">
                <View className="flex-row items-center gap-[10px]">
                    <Image
                        source={require("../../assets/images/advertise/cardinfos.png")}
                        className=""
                    />
                    <Text className="text-primary text-[22px] translate-y-1 font-semibold font-poppins uppercase">
                        Card information
                    </Text>
                </View>
                <View className="mt-[10px] flex-row items-center justify-between">
                    <View>
                        <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins uppercase">
                            CARD NUMBER *
                        </Text>
                        <View
                            className="px-[10px] py-[17px] mt-[6px] border-[1px] 
                    border-[#DEE2E6] rounded-[5px] bg-white"
                        >
                            <TextInput
                                placeholder="CARD NUMBER"
                                className="placeholder:text-[#999] font-poppins text-[12px] w-[170px]"
                            />
                        </View>
                        <View className="text-[#061B3B] text-[12px] font-semibold font-poppins"></View>
                    </View>
                    <View>
                        <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins">
                            CARD EXPIRY MONTH *
                        </Text>
                        <View
                            className="px-[10px] py-[17px] mt-[6px] border-[1px] 
                    border-[#DEE2E6] rounded-[5px] bg-white"
                        >
                            <TextInput
                                placeholder="MM"
                                className="placeholder:text-[#999] font-poppins text-[12px] w-[170px]"
                            />
                        </View>
                    </View>
                </View>
                <View>
                    <View className="mt-[10px] flex-row items-center justify-between">
                        <View>
                            <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins uppercase">
                                CARD EXPIRY YEAR *
                            </Text>
                            <View
                                className="px-[10px] py-[17px] mt-[6px] border-[1px] 
                    border-[#DEE2E6] rounded-[5px] bg-white"
                            >
                                <TextInput
                                    placeholder="yy"
                                    className="placeholder:text-[#999] font-poppins text-[12px] w-[170px]"
                                />
                            </View>
                            <View className="text-[#061B3B] text-[12px] font-semibold font-poppins"></View>
                        </View>
                        <View>
                            <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins">
                                CARD CVV *{" "}
                            </Text>
                            <View
                                className="px-[10px] py-[17px] mt-[6px] border-[1px] 
                    border-[#DEE2E6] rounded-[5px] bg-white"
                            >
                                <TextInput
                                    placeholder="CVVe"
                                    className="placeholder:text-[#999] font-poppins text-[12px] w-[170px]"
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="mt-[26px] mb-10">
                <Text className="text-primary font-poppins text-[18px] text-right font-semibold mt-2">
                    Sub total 1000$
                </Text>
                <Text className="text-primary font-poppins text-[18px] text-right font- mt-2">
                    Discount os
                </Text>
                <Text className="text-primary font-poppins text-[18px] text-right font-semibold mt-2">
                    total price 1000s
                </Text>
                <View className="mt-1 flex-row items-center justify-end">
                    <TouchableOpacity className="bg-[#00ADEF] w-[168px] p-[10px] rounded-[12px]">
                        <Text className="font-poppins text-[18px] text-white uppercase font-semibold text-center">
                            Pay now
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
