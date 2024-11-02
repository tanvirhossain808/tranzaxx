import { View, Text, ScrollView } from "react-native"
import { useEffect, useState } from "react"
import HeroSection from "../../components/Home/HeroSection"
import Categories from "../../components/Home/Categories"
import FeaturedAds from "../../components/Home/FeaturedAds"
import RegisterNow from "../../components/Home/RegisterNow"
import Search from "../../components/Home/Search"
import axios from "axios"
import SellersDetails from "../../components/Home/SellersDetails"

export default function Home() {
    const [categories, setCategories] = useState([])
    const [error, setError] = useState([])

    const getCategories = async () => {
        try {
            const res = await axios.get(
                `${process.env.EXPO_PUBLIC_BASE_URL}/api/homeSections`
            )
            if (res.status === 200) {
                setCategories(res.data.result.data)
            } else {
                setError(`Error: Received status ${res.status}`)
            }
        } catch (err) {
            console.error("Failed to fetch categories:", err)
            setError("Could not load categories.")
        }
    }
    useEffect(() => {
        getCategories()
    }, [])
    if (categories.length <= 0) {
        return null
    }
    return (
        <ScrollView>
            <View>
                {/* <HeroSection /> */}
                <View>
                    <View className="px-4">
                        <Search />
                    </View>
                    <View className="px-4">
                        <Categories categories={categories.getCategories} />
                    </View>
                    <View className="px-4">
                        <FeaturedAds
                            featuresAdsData={
                                categories?.getLatestPosts?.data?.latest
                            }
                        />
                    </View>
                    <SellersDetails stats={categories?.getStats?.data} />
                    <View className="px-4">
                        <RegisterNow />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
