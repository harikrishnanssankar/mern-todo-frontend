import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/actions/authActions";
import { Navigate, Link } from "react-router-dom"

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  const handleSignUp = () => {
    dispatch(signUp(user));
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSignUp();
    }
  };

  if (auth._id) return <Navigate to="/" />

  return (
    <div style={{minHeight:"calc( 100vh - 60px )"}} className="w-full flex items-center justify-center " >
      <div className="flex flex-col w-80 h-96 justify-center text-center p-5 gap-4 rounded-md shadow-md ">
        <h1 className="text-3xl" >Register</h1>
        <input
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          value={user.name}
          className="p-2 border rounded-md focus:outline-none"
          type="text"
          placeholder="Name"
          onKeyDown={handleKeyPress}
        />
        <input
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          value={user.email}
          className="p-2 border rounded-md focus:outline-none"
          type="text"
          placeholder="Email"
          onKeyDown={handleKeyPress}
        />
        <input
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          value={user.password}
          className="p-2 border rounded-md focus:outline-none"
          type="password"
          placeholder="Password"
          onKeyDown={handleKeyPress}
        />
        <button className="w-full bg-green-600 text-white py-1 rounded-sm" type="submit" onClick={handleSignUp}>
          Sign Up
        </button>
        <p>Already Registered? <Link className="text-blue-600" to={"/login"} >Login</Link> </p>
      </div>
    </div>
  );
};

export default SignUp;
