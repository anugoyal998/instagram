import MiniProfile from "./MiniProfile"
import Posts from "./Posts"
import Stories from "./Stories"

function Feed() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-48 sm:px-5 px-1 bg-gray-50 mx-auto">
            <Stories/>
            <MiniProfile/>
            <Posts/>
        </div>
    )
}

export default Feed
