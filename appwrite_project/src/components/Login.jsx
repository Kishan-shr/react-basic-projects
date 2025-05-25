import React , {Children, use, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Login as authLogin} from '../store/authSlice'
import {Button , Input , Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from "react-hook-form"
import Logo from './index'
function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register , handelSubmit} = useForm()
    const {error , setError} = useState("");
    const login = async(data) =>{
        try {
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div className='felx items-center justify-center w-full'>
   <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
   <div className='mb-2 flex justify-center'>
    <span className='inline-block w-full max-w-[100px]'>
<Logo width='100%'/>
    </span>
   </div>
   <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account</h2>
   <p className='mt-2 text-center text-base text-black/60'>
   Sign Up</p>
   {error && <p className='text-red-500 mt-8 text-center' >{error}</p>}
   <form onSubmit={handelSubmit(login)}
   className='mt-8'
   >
    <div className='space-y-5'>
        <Input 
        label="Email: "
        placeholder='Enter your Email'
        typeof='Email'
       {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
        />
        <Input
        label="PassWord:"
        type="password"
        placeholder="Enter your Password"
        {...register("password",{required:true,})}
        />
      <button className={`w-full px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}
      type='submit'
      
      >
        {Children}
      </button>
    </div>
   </form>
   </div>
    </div>
  )
}

export default Login
