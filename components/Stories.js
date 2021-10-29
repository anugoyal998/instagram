import {useEffect, useState} from 'react'
import faker from 'faker'
import Story from './Story'
import {useSession} from 'next-auth/react'

function Stories() {
    const {data: session} = useSession()
    const [suggestion,setSuggestion] = useState([])
    useEffect(() => {
        const response = [...Array(25)].map((_,i)=> ({
            ...faker.helpers.contextualCard(),
            id: i
        }))
        setSuggestion(response)
    },[])
    console.log(suggestion)
    return (
        <div className="col-span-2 overflow-x-scroll flex bg-white space-x-2 mt-8 border-gray-200 border rounded-sm scrollbar-thin scrollbar-thumb-black p-2">
            {
                session && <Story avatar={session?.user?.image} username={session?.user?.username} />
            }
            {
                suggestion.map((e,key) => {
                    return <Story key={key} username={e.username} avatar={e.avatar}  />
                })
            }
        </div>
    )
}

export default Stories
