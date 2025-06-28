import React from 'react'

function LoginForm() {
  return (
    <div className='flex justify-center items-center'>
    <div className=' flex-col bg-gray-900 rounded-lg p-5 sm:w-80 min-h-60 shadow-2xl'>
      <h2 className='text-center text-xl text-white font-bold '>Login Page</h2>
      <form>
        <div className='flex-col text-start'>
        <label for="email" className='block text-sm font-medium text-gray-300 mb-2 '>Email</label>
        <input type='email' name='email' placeholder='Email' id='email' className='w-full px-3 py-2 bg-gray-600 rounded-md border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2'  />
        </div>
        <div className='flex-col text-start mb-4'>
        <label for='password' id='password' className='block text-sm font-medium text-gray-300 mb-2'>Password</label>
        <input type='password' name='password' placeholder='Password' id=''  className='w-full px-3 py-2 bg-gray-600 rounded-md border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        </div>
        <button type="submit" className='w-full bg-blue-600 rounded-md text-white py-1 hover:bg-blue-700'>Login</button>    
      </form>
    </div>
    </div>
  )
}

export default LoginForm
