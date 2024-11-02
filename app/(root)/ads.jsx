import { View, Text, ScrollView } from "react-native"
import FilterForm from "../../components/ads/filterForm"
import { adsCategories } from "../../constant/data"
import AdsCard from "../../components/ads/AdsCard"
import { useLocalSearchParams } from "expo-router"
import { useContext } from "react"
import { AppContext } from "../../store/store"

const ads = () => {
    const { category = "All Ads " } = useLocalSearchParams()
    const { allCategories } = useContext(AppContext)
    console.log(allCategories.length)
    console.log(category)
    let data = allCategories
    if (category === "All Ads") {
        data = allCategories // Return all items
    } else {
        data = allCategories.filter((cate) =>
            cate.name?.toUpperCase().includes(category?.toUpperCase())
        )
    }

    return (
        <ScrollView className="mt-[14px]">
            <FilterForm itemIn={category} />
            <View className="px-4 flex gap-5 mt-5 mb-20">
                {adsCategories.map((ads) => (
                    <AdsCard key={ads.name} ads={ads} />
                ))}
            </View>
        </ScrollView>
    )
}

export default ads
