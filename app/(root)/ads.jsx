import { View, Text, ScrollView } from "react-native"
import FilterForm from "../../components/ads/filterForm"
import { adsCategories } from "../../constant/data"
import AdsCard from "../../components/ads/AdsCard"
import { useLocalSearchParams } from "expo-router"
import { useContext, useEffect } from "react"
import { AppContext } from "../../store/store"

const ads = () => {
    // const { category = "All Ads " } = useLocalSearchParams()
    // const { posts, categoryId } = useContext(AppContext)
    // console.log(posts, "posts")
    // const []
    // console.log(posts.length)
    // console.log(category)
    // let data = allPosts
    // if (category === "All Ads") {
    //     data = posts // Return all items
    // } else {
    //     data = posts.filter((cate) =>
    //         cate.name?.toUpperCase().includes(category?.toUpperCase())
    //     )
    // }
    // useEffect(() => {}, [categoryId])
    return (
        <ScrollView className="mt-[14px]">
            {/* <FilterForm itemIn={category} /> */}
            {/* <View className="px-4 flex gap-5 mt-5 mb-20">
                {posts.map((ads) => (
                    <AdsCard key={ads.name} ads={ads} />
                ))}
            </View> */}
        </ScrollView>
    )
}

export default ads
