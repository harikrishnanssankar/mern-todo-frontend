import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Todo from './components/todo/Todo';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Navbar from './components/navbar/Navbar';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser } from './redux/actions/authActions';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true)
    dispatch(loadUser())
    setLoading(false)
  }, [dispatch])

  if(loading) return <h1>loading</h1>

  return (
    <BrowserRouter>
      <Navbar/>
      <ToastContainer position='bottom-left' />
      <Routes>
        <Route  path="/"   >
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/login' element={<SignIn/>} />
          <Route  index element={<Todo/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
