import { View, Text, ScrollView } from "react-native"
import FilterForm from "../../components/ads/filterForm"
import { adsCategories } from "../../constant/data"
import AdsCard from "../../components/ads/AdsCard"

const ads = () => {
    return (
        <ScrollView className="mt-[14px]">
            <FilterForm />
            <View className="px-4">
                {adsCategories.map((ads) => (
                    <AdsCard key={ads.name} ads={ads} />
                ))}
            </View>
        </ScrollView>
    )
}

export default ads
