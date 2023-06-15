import { useContext, useRef } from "react";
import "./Login.css";
import { Context } from "../../context/Context";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const {  isFetching, dispatch } = useContext(Context);

  const handleLoginSubmit = async(e) => {
    e.preventDefault();
    dispatch({ type : "LOGIN_START"})
    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        username : userRef.current.value,
        password : passwordRef.current.value
      })
      dispatch({type: "LOGIN_SUCCESS" , payload : res.data})
    }catch(err){
      dispatch({type : "LOGIN_FAILURE"})
    }
    // console.log(isFetching)
  }

  // console.log(user)

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleLoginSubmit}>
        <label>userName : </label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your userName  ..."
          ref = {userRef}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          ref = {passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Singup
        </Link>
      </button>
    </div>
  );
};

export default Login;
