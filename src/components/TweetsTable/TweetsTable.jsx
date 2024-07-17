import { useEffect, useState } from "react"
import TableBody from "./_partials/TableBody"
import TableHeader from "./_partials/TableHeader"

const TweetsTable = () => {

    const [tweets, setTweets] = useState([])

    useEffect(() => {
        const fetchTweets = async () => {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/tweets/hashtags/farina?getFromExternal=1`)
            const json = await response.json()

            setTweets(json)
        }

        fetchTweets()
    }, [])

    return (
        <table className="border-collapse table-auto w-full text-md">
            <TableHeader />
            { tweets && <TableBody tweets={tweets}/> }
        </table>
    )
}

export default TweetsTable