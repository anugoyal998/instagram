import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

function Posts() {
  const dummy_data = [
    {
      id: "123",
      username: "anubhav",
      userImg: "https://cdn.fakercloud.com/avatars/vc27_128.jpg",
      img: "https://links.papareact.com/3ke",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sapiente molestiae placeat recusandae  officia ipsum, autem nemo inventore ipsa modi!",
    },
    {
      id: "123",
      username: "anubhav",
      userImg: "https://cdn.fakercloud.com/avatars/vc27_128.jpg",
      img: "https://links.papareact.com/3ke",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sapiente molestiae placeat recusandae  officia ipsum, autem nemo inventore ipsa modi!",
    },
    {
      id: "123",
      username: "anubhav",
      userImg: "https://cdn.fakercloud.com/avatars/vc27_128.jpg",
      img: "https://links.papareact.com/3ke",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sapiente molestiae placeat recusandae  officia ipsum, autem nemo inventore ipsa modi!",
    },
    {
      id: "123",
      username: "anubhav",
      userImg: "https://cdn.fakercloud.com/avatars/vc27_128.jpg",
      img: "https://links.papareact.com/3ke",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sapiente molestiae placeat recusandae  officia ipsum, autem nemo inventore ipsa modi!",
    },
  ];
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    return onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
  }, [db]);
  console.log(posts)
  return (
    <div className="col-span-2">
      {posts?.map((e, key) => {
        return (
          <Post
            key={key}
            id={e.id}
            username={e.data().username}
            userImg={e.data().profileImg}
            img={e.data().image}
            caption={e.data().caption}
          />
        );
      })}
    </div>
  );
}

export default Posts;
