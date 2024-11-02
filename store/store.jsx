import axios from "axios"
import { createContext, useEffect, useState } from "react"

export const AppContext = createContext()

export function AppProvider({ children }) {
    const [showMenu, setShowMenu] = useState(false)
    const [categories, setCategories] = useState([])
    const [allCategories, setAllCategories] = useState([])
    const [posts, setPosts] = useState([])
    const getAllCategories = async () => {
        try {
            const res = await axios.get(
                `${process.env.EXPO_PUBLIC_BASE_URL}/api/categories`
            )
            if (res.status === 200) {
                setAllCategories(res.data.result.data)
            } else {
                setError(`Error: Received status ${res.status}`)
            }
        } catch (err) {
            console.error("Failed to fetch all categories:", err)
            setError("Could not load all categories.")
        }
    }
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
    const getPosts = async () => {
        try {
            const res = await axios.get(
                `${process.env.EXPO_PUBLIC_BASE_URL}/api/posts`
            )
            if (res.status === 200) {
                setPosts(res.data.result.data)
            } else {
                setError(`Error: Received status ${res.status}`)
            }
        } catch (err) {
            console.error("Failed to fetch posts:", err)
            setError("Could not load posts.")
        }
    }
    useEffect(() => {
        const getAllData = async () => {
            await getCategories()
            await getPosts()
            await getAllCategories()
        }
        getAllData()
    }, [])

    return (
        <AppContext.Provider
            value={{ showMenu, setShowMenu, categories, posts, allCategories }}
        >
            {children}
        </AppContext.Provider>
    )
}
