import {signOut,useSession} from 'next-auth/react';
function MiniProfile() {
    const {data: session} = useSession()
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img src={session?.user?.image} className="w-12 h-12 rounded-full border p-[2px] mr-1" alt="avatar" /> 
            <div>
                <h2 className="font-bold truncate">{session?.user?.username}</h2>
                <h3 className="text-sm text-gray-400 truncate">Welcome to Instagram</h3>
            </div>
            <button className="text-blue-400 text-sm font-semibold" onClick={signOut}>Sign out</button>
        </div>
    )
}

export default MiniProfile
