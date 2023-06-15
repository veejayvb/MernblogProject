import { useContext, useState } from "react";
import "./Write.css";
import { Context } from "../../context/Context";
import axios from "axios";

const Write = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  // console.log(user.data.others.username)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.data.others.username,
      title,
      description : description
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file)
      newPost.photo = filename
      try{
        await axios.post("http://localhost:5000/api/upload", data)
      }catch(err){}
    }
    try{
      const res = await axios.post("http://localhost:5000/api/posts", newPost);
      console.log(res._id)
      window.location.replace('/')
    }catch(err){}
  };

  // console.log(user.data.others.username);
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
