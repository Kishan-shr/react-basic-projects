import {useDispatch} from 'react-redux'
import { useState , useEffect } from 'react'
import './App.css'
import AuthService from './appwrite/auth'
import {login, logout} from "./store/authSlice"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Outlet } from 'react-router-dom'
function App() {
  // this console helps to env variables this not the production grade approach better go with config separate files
// console.log(import.meta.env.VITE_APPWRITE_URL);
const [loading,setLoading] = useState(true)
const dispatch = useDispatch()
useEffect(()=>{
  AuthService.getCurrentUser().then()
    .then((userData)=>{
      if (userData){
        dispatch(login({userData}))
      } else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  
},[])
 //1st approach
//  if(loading){
//   return <div>Loading...</div>
//  }

//2nd
return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400' >
    
    <div className='w-full block'>
      <Header/>
      <main>
      todo:  <Outlet/>
      </main>
      <Footer/>
    </div>
  </div>
  ) : null
}

export default App
