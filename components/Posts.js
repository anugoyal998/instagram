import Post from "./Post"

function Posts() {
    const dummy_data = [
        {
            id: '123',
            username: 'anubhav',
            userImg: 'https://cdn.fakercloud.com/avatars/vc27_128.jpg',
            img: 'https://links.papareact.com/3ke',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sapiente molestiae placeat recusandae  officia ipsum, autem nemo inventore ipsa modi!'
        },
        {
            id: '123',
            username: 'anubhav',
            userImg: 'https://cdn.fakercloud.com/avatars/vc27_128.jpg',
            img: 'https://links.papareact.com/3ke',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sapiente molestiae placeat recusandae  officia ipsum, autem nemo inventore ipsa modi!'
        },
        {
            id: '123',
            username: 'anubhav',
            userImg: 'https://cdn.fakercloud.com/avatars/vc27_128.jpg',
            img: 'https://links.papareact.com/3ke',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sapiente molestiae placeat recusandae  officia ipsum, autem nemo inventore ipsa modi!'
        },
        {
            id: '123',
            username: 'anubhav',
            userImg: 'https://cdn.fakercloud.com/avatars/vc27_128.jpg',
            img: 'https://links.papareact.com/3ke',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sapiente molestiae placeat recusandae  officia ipsum, autem nemo inventore ipsa modi!'
        },
    ]
    return (
        <div className="col-span-2">
            {dummy_data.map((e,key)=> {
                return <Post key={key} id={e.id} username={e.username} userImg={e.userImg} img={e.img} caption={e.caption} />
            })}
        </div>
    )
}

export default Posts
