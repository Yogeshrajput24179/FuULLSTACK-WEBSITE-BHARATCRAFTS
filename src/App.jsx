import React, { useState ,useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter,Routes ,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Home/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import MyOrders from './pages/MyOrders/MyOrders'
import axios from "axios";
const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5173/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
   
    {showLogin? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
    
    <div className="App">
   
 <Navbar setShowLogin={setShowLogin}/>
 <Routes>
  <Route path="/login" element={<LoginPopup />} />
  <Route path='/' element={<Home />} />
  <Route path='/cart' element={<Cart />} />
  <Route path='/Order' element={<PlaceOrder/>} />
  <Route path='/myorders' element={<MyOrders/>}></Route>
 </Routes>
    </div>
    <Footer/>
 
    </>
  )
}

export default App