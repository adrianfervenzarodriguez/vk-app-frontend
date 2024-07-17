/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { format } from "date-fns"
import TableCell from "./TableCell"

const HashTagBadges = ({hashtags}) => {
    return (
        hashtags.map((hashtag => {
            return (
                <span key={hashtag} className="m-1 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">#{hashtag}</span>
            )
        }))
    )
}

const LikesBadge = ({likesCount}) => {
    return (
        <span className="bg-indigo-100 text-indigo-500 text-xs font-medium me-2 px-2.5 py-1 rounded dark:bg-indigo-900 dark:text-indigo-300">
            <FontAwesomeIcon icon={faThumbsUp} className="me-2" size="lg"/>{ likesCount }
        </span>
    )
}

const PublishedAtLabel = ({publishDate}) => {

    const formattedDate = format(new Date(publishDate), "dd/LL/uuuu")
    const formattedHour = format(new Date(publishDate), "kk:mm")
    return (
        <div className="mt-4">
            <span className="text-sm">Publicado el { formattedDate } a las { formattedHour }</span>
        </div>
    )
}

const TableBody = ({tweets}) => {

    return (
        <tbody>

            {
                tweets.map(tweet => {
                    return (
                        <tr key={tweet.id}>
                            <TableCell> <span className="font-bold">@{ tweet.user }</span></TableCell>
                            <TableCell>
                                <div className="mb-2">
                                    <span className="font-semibold mb-2 italic">{ tweet.content }</span>
                                </div>
                                <HashTagBadges hashtags={ JSON.parse(tweet.hashtags) }/>
                                <LikesBadge likesCount={ tweet.likes_count }/>
                                <PublishedAtLabel publishDate={tweet.published_at}/>
                            </TableCell>
                        </tr>
                    )
                })
            }


        </tbody>
    )
}

export default TableBody