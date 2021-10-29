import Image from 'next/image'
function Story({username,avatar}) {
    return (
        <div>
            <img src={avatar} alt="avatar" className="rounded-full h-14 w-14 p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"/>
            <p className="truncate text-xs w-14">{username}</p>
        </div>
    )
}

export default Story
