import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/actions/authActions";
import { Navigate, Link } from "react-router-dom";

const SignIn = () => {
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  const handleSignIn = () => {
    dispatch(signIn(creds));
    setCreds({
      email: "",
      password: "",
    });
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSignIn();
    }
  };

  if (auth._id) return <Navigate to="/" />

  return (
    <div  style={{minHeight:"calc( 100vh - 60px )"}} className="w-full flex items-center justify-center " >
      <div className="flex flex-col w-80 h-96 justify-center text-center p-5 gap-8 rounded-md shadow-md " >
        <h1 className="text-3xl" >Login</h1>
        <input
          onChange={(e) => setCreds({ ...creds, email: e.target.value })}
          value={creds.email}
          className="p-2 border rounded-md focus:outline-none"
          type="text"
          placeholder="Email"
          onKeyDown={handleKeyPress}
        />
        <input
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
          value={creds.password}
          className="p-2 border rounded-md focus:outline-none"
          type="password"
          placeholder="Password"
          onKeyDown={handleKeyPress}
        />
        <button className="w-full bg-green-600 text-white py-1 rounded-sm" onClick={handleSignIn}>
          Login
        </button>
        <p>New to this Application? <Link className="text-blue-600" to={"/signup"} >Register</Link> </p>
      </div>
    </div>
  );
};

export default SignIn;
