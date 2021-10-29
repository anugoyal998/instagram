import faker from 'faker'
import { useEffect, useState } from 'react'
function Suggestions() {
    const [suggestions,setSuggestions] = useState([])
    useEffect(() => {
        const response = [...Array(5)].map((_,i)=> ({
            ...faker.helpers.contextualCard(),
            id: i
        }))
        setSuggestions(response)
    },[])
    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
                <button className="text-gray-600 font-semibold">See All</button>
            </div>
            {
                suggestions && suggestions.map((e,key) => {
                    return(
                        <div key={key} className="flex items-center justify-between mt-3">
                            <img className="w-10 h-10 rounded-full border p-[2px]" src={e.avatar} alt="avatar"/>
                            <div className="flex-1 ml-4">
                                <h2 className="font-semibold text-sm">{e.username}</h2>
                                <h3 className="text-xs text-gray-400 truncate">Works at {e.company.name}</h3>
                            </div>
                            <button className="text-blue-400 font-semibold text-sm">Follow</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Suggestions
