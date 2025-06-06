import React, { useEffect, useState } from 'react'
import { Container} from '../components'
import { postCard } from '../components'
import appwriteService from "../appwrite/confg"
function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{},[])
    appwriteService.getPosts([]).then((posts)=> setPosts(posts))
    if (posts){
        setPosts(posts.documents)
    }
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
         {posts.map((post)=>(
            <div key={post.$id} className='p-2 w-1/4'>
          <postCard {...post}/>
            </div>
         ))}
        </div>
        <postCard/>
      </Container>
    </div>
  )
}

export default AllPosts
