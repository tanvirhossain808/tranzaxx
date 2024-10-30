import { View, Text, ScrollView } from "react-native"
import React from "react"
import HeroSection from "@/components/Home/HeroSection"
import Search from "@/components/Home/Search"
import Categories from "@/components/Home/Categories"
import FeaturedAds from "@/components/Home/FeaturedAds"
import SellersDetails from "@/components/Home/SellersDetails"
import RegisterNow from "@/components/Home/RegisterNow"

export default function index() {
    return (
        <ScrollView>
            <View>
                <HeroSection />
                <View>
                    <View className="px-4">
                        <Search />
                    </View>
                    <View className="px-4">
                        <Categories />
                    </View>
                    <View className="px-4">
                        <FeaturedAds />
                    </View>
                    <SellersDetails />
                    <View className="px-4">
                        <RegisterNow />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
