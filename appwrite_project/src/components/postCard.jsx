import React from 'react'
import appwriteService from "../appwrite/confg"
import { Link } from 'react-router-dom'
function postCard({$id, title, featuredImage}) {
  return (
      <link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
<div className='w-full justify-center mb-4 '>
<img src={appwriteService.getFilePreview (featuredImage)} alt={title} 
className='rounded-xl'
/>
</div>
      </div>
      <h2 
      className='text-2xl font-bold'>{title}
      </h2>
      </link>
  )
}

export default postCard
