import { useContext } from "react";
import "./SideBar.css";
import { Context } from "../../context/Context";

const SideBar = () => {
  const {user} = useContext(Context)
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        {/* <img className="sidebarImg"
          src= {user.data.others.profilePic}
          alt=""
        /> */}
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          voluptatibus rerum sed rem adipisci, consequuntur veniam saepe quos ad
          ducimus reiciendis recusandae, et fugiat, laudantium voluptatum! Id
          quasi praesentium corporis.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle"> CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Travel</li>
            <li className="sidebarListItem">Hike</li>
            <li className="sidebarListItem">Nature</li>
            <li className="sidebarListItem">Vacation</li>
        </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle"> FOLLOW US</span>
      <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
      </div>
      </div>
    </div>
  );
};

export default SideBar;
