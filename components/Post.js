import { HiDotsHorizontal } from "react-icons/hi";
import {
  BookmarkIcon,
  ChatIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "@firebase/firestore";
import { db } from "../firebase";
import Moment from "react-moment";

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    return onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
  }, [db]);

  useEffect(async () => {
    setHasLiked(
      likes?.findIndex((like) => like.id === session?.user?.uid) !== -1
    );
  }, [likes]);

  useEffect(() => {
    return onSnapshot(collection(db, "posts", id, "likes"), (snapshot) => {
      setLikes(snapshot.docs);
    });
  }, [db, id]);

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session?.user?.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session?.user?.uid), {
        username: session?.user?.username,
      });
    }
  };

  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session?.user?.username,
      userImage: session?.user?.image,
      timestamp: serverTimestamp(),
    });
  };
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt="userImg"
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{username}</p>
        <HiDotsHorizontal className="h-5" />
      </div>
      {/* img */}
      <img src={img} alt="img" className="object-cover w-full" />
      {/* buttons */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            {hasLiked ? (
              <HeartIconFilled
                className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out text-red-500"
                onClick={likePost}
              />
            ) : (
              <HeartIcon
                className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out"
                onClick={likePost}
              />
            )}
            <ChatIcon className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out" />
            <PaperAirplaneIcon className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out" />
          </div>
          <BookmarkIcon className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out" />
        </div>
      )}
      {/* captions */}
      <p className="p-5 truncate">
          {likes?.length>0 && (<p className="font-bold mb-1">{likes?.length} likes</p>)}
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </p>
      {/* comments */}
      {comments?.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll">
          {comments?.map((e) => {
            return (
              <div key={e.id} className="flex items-center space-x-2 mb-3">
                <img
                  src={e.data().userImage}
                  alt="avatar"
                  className="h-7 rounded-full"
                />
                <p className="flex-1">
                  <span className="font-bold">{e.data().username}</span>{" "}
                  {e.data().comment}
                </p>
                <Moment fromNow className="pr-5 text-xs">
                  {e.data().timestamp?.toDate()}
                </Moment>
              </div>
            );
          })}
        </div>
      )}
      {/* input box */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="mr-1 h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out" />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border-none flex-1 focus:ring-0 outline-none"
            placeholder="Add a comment..."
          />
          <button
            type="submit"
            disabled={!comment?.trim()}
            className="font-semibold text-blue-400"
            onClick={sendComment}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
