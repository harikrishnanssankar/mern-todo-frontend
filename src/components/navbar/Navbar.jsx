import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../redux/actions/authActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(signOut());
    navigate("/login");
  };

  return (
    <div className="bg-slate-300 shadow-md ">
      <div className="flex justify-between items-center px-10 py-3 max-w-screen-xl m-auto">
        <h1
          className="text-3xl font-sans cursor-pointer "
          onClick={() => navigate("/")}
        >
          Todos
        </h1>
        <div className="flex gap-2">
          {user._id ? (
            <>
              <h5
                className="border-2 border-white px-4 py-1 cursor-pointer "
                onClick={handleLogout}
              >
                Logout
              </h5>
            </>
          ) : (
            <>
              <h5
                className="border-2 border-white px-4 py-1 cursor-pointer "
                onClick={() => navigate("/login")}
              >
                Login
              </h5>
              <h5
                className="border-2 border-white px-4 py-1 cursor-pointer "
                onClick={() => navigate("/signup")}
              >
                Register
              </h5>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
