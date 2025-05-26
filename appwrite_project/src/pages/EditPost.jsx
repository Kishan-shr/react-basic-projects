import React,{useEffect , useState} from 'react'
import {container, postForm} from '../components'
import appwriteService from "../appwrite/confg"
import { useNavigate, useParams } from 'react-router-dom'
function EditPost() {
    const [posts, setPosts] = useState(null)
    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        if(slug){
            appwriteService.getpost(slug).then((post)=>{
                if (post){
                    setPosts(post)
                }
            })
        } else{
            navigate('/')
        }
    },[slug, navigate])
  return post ?(
    <div className='py-8'> 
      <container>
        <postForm post={post} />
      </container>
    </div>
  ):null
}

export default EditPost
