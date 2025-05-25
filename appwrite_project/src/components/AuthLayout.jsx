import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Protected({children, authentication = true}) {
    const navigate =useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.authStatus)
    useEffect(()=>{
        //TODO : make it more easy to understand
        // if (authentication === true){
        //     navigate("/")
        // } else if (authentication){
        //     navigate("/login")
        // }
        // let authValue = authStatus === true ? true : false
if(authentication && authStatus !== authentication){
    navigate("/login")
}else if (!authentication && authStatus !== authentication){
    navigator("/")
} setLoader(false)
    },[authStatus, navigate, authentication])
  return loader ? <h1>Loading....</h1>:<>{children}</>
}


