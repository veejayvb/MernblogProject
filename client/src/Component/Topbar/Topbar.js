import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Topbar = () => {
  const { user, dispatch } = useContext(Context);
  console.log(user)
  const PF = 'http://localhost:5000/images/'
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/post" className="link">
              AddPost
            </Link>
          </li>
         
        </ul>
      </div>
      <div className="topCenter">PLACETOVISIT</div>
      <div className="topRight">
        {user ? (
          <>
            <ul className="topList">
              <li className="topListItem" onClick={handleLogout}>
                {user && <p className="topListItem">Logout</p>}
              </li>
            </ul>
            {user.data.others.profilePic ? 
            (
              <Link to="/settings">
              <img className="topImg" src={PF + user.data.others.profilePic} alt="" />
            </Link>) : (
              <Link to="/settings">
              <img className="topImg" src="" alt="" />
            </Link>
            ) }
           
          </>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Topbar;

/*
 {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500
*/
