function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img src="https://cdn.fakercloud.com/avatars/vc27_128.jpg" className="w-12 h-12 rounded-full border p-[2px] mr-1" alt="avatar" /> 
            <div>
                <h2 className="font-bold truncate">anubhav</h2>
                <h3 className="text-sm text-gray-400 truncate">Welcome to Instagram</h3>
            </div>
            <button className="text-blue-400 text-sm font-semibold">Sign out</button>
        </div>
    )
}

export default MiniProfile
