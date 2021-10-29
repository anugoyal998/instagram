import {HiDotsHorizontal} from 'react-icons/hi'
import {BookmarkIcon, ChatIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon} from '@heroicons/react/outline'
import {HeartIcon as HeartIconFilled} from '@heroicons/react/solid'
function Post({id,username,userImg,img,caption}) {
    return (
        <div className="bg-white my-7 border rounded-sm">
            {/* Header */}
            <div className="flex items-center p-5">
                <img src={userImg} alt="userImg" className="rounded-full h-12 w-12 object-contain border p-1 mr-3" />
                <p className="flex-1 font-bold">{username}</p>
                <HiDotsHorizontal className="h-5"/>
            </div>
            {/* img */}
            <img src={img} alt="img"  className="object-cover w-full" />
            {/* buttons */}
            <div className="flex justify-between px-4 pt-4">
            <div className="flex space-x-4">
                <HeartIcon className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out"/>
                <ChatIcon className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out"/>
                <PaperAirplaneIcon className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out"/>
            </div>
            <BookmarkIcon className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out" />
            </div>
            {/* captions */}
            <p className="p-5 truncate">
                <span className="font-bold mr-1">{username}</span>
                {caption}
            </p>
            {/* comments */}
            {/* input box */}
            <form className="flex items-center p-4">
                <EmojiHappyIcon className="mr-1 h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out"/>
                <input type="text" className="border-none flex-1 focus:ring-0 outline-none" placeholder="Add a comment..." />
                <button className="font-semibold text-blue-400">Post</button>
            </form>
        </div>
    )
}

export default Post
