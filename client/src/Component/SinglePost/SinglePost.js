import { useLocation } from "react-router-dom";
import "./SinglePost.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";


const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  // console.log(path);
  const [singlePost, setSinglePost] = useState({});
  const [editedTitle ,setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('')
  const [updateMode, setUpdateMode] = useState(null)

  
  const PF = "http://localhost:5000/images/";
  // let user = true;
  const {user} = useContext(Context)
  useEffect(() => {
    const getSinglePost = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/posts/" + path);
        setSinglePost(res.data);
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSinglePost();
  }, [path]);
  // console.log(singlePost._id)
  const handlePostDelete= async() => {
    try{
    await axios.delete(`http://localhost:5000/api/posts/${singlePost._id}`, 
      {
        data : {username : singlePost.username}
      });
      window.location.replace('/')
    }catch(err){}

  }
  const handleUpdate = async () => {
    try {
      await axios.patch(`http://localhost:5000/api/posts/${singlePost._id}`, {
        username: user.data.others.username,
        title : editedTitle ,
        description : editedDescription
      });
      setUpdateMode(false)
      window.location.reload();
    } catch (err) {}
  };

  const handleUpdateAbort = () => {
    window.location.reload();
  }

  // console.log(singlePost.username, user.data.others.username)
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {singlePost.photo && 
          <img
            src={PF + singlePost.photo}
            alt=""
            className="singlePostImg"
        />
        } 
        {updateMode ? ( <input
            type="text"
            value={editedTitle}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        ) : (
        <h1 className="singlePostTitle">
          {singlePost.title}
          <div className="singlePostEdit">
            {(singlePost.username === user.data.others.username) && <> 
              <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
              <i className="singlePostIcon far fa-trash-alt" onClick={handlePostDelete}></i>
             </>
             }
          </div>
        </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
           Author : <Link  to={`/?user=${singlePost.username}`} className="link"><b>{singlePost.username}</b></Link>  
          </span>
          <span className="singlePostDate">{new Date(singlePost.createdAt).toDateString()}</span>
        </div>
        
          {updateMode  ? (
            <textarea
            className="singlePostDescInput"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          ) : ( <p className="singlePostDescription">
          {singlePost.description}
        </p> ) }
        {updateMode && ( <>
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
          <button className="singlePostButton" onClick={handleUpdateAbort}> cancel</button>

          </>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
