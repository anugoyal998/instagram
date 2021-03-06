import { useSession } from "next-auth/react";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

function Feed() {
  const { data: session } = useSession();
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-3 lg:px-48 sm:px-5 px-1 bg-gray-50 mx-auto ${!session && "grid-cols-1"}`}>
      <Stories />
      {session && (
        <section className="hidden lg:inline-grid col-span-1">
          <div className="fixed">
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      )}
      <Posts />
    </div>
  );
}

export default Feed;
