import "./Post.css";
import {Link} from 'react-router-dom'

const Post = ({ posts }) => {
  const PF = "http://localhost:5000/images/"
  return (
    <div className="post">
      {posts.photo && <img className="postImg" src={PF + posts.photo} alt="" />}

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">sports</span>
          <span className="postCat">Travel</span>
        </div>
      <Link to = {`/post/${posts._id}`}>
        <span className="postTitle">{posts.title}</span>  
      </Link>
       
        <hr />
        <span className="postDate">
          {new Date(posts.createdAt).toDateString()}
        </span>
        <p className="postDescription">{posts.description}</p>
      </div>
    </div>
  );
};

export default Post;
