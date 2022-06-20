import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  _id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOADED":
      const existinguser = jwtDecode(action.token);
      return {
        ...initialState,
        token: action.token,
        name: existinguser.name,
        email: existinguser.email,
        _id: existinguser._id,
      };

    case "SIGN_IN":
    case "SIGN_UP":
      const user = jwtDecode(action.token);
      toast(`Welcome ${user.name}`);
      return {
        ...initialState,
        token: action.token,
        name: user.name,
        email: user.email,
        _id: user._id,
      };
    case "SIGN_OUT":
        localStorage.removeItem("token")
        toast("Logged out, Goodbye...")
        return {
            name:null,
            email:null,
            _id:null,
            token: null
        }
    default:
      return state;
  }
};

export default authReducer;
