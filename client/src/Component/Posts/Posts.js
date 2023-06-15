import Post from "../Post/Post";
import "./Posts.css";

const Posts = ({posts}) => {

  return (
    <div className="posts">
      {posts &&
        posts.map((p) => {
          return <Post posts={p} key={p._id} />;
        })}
    </div>
  );
};

export default Posts;
