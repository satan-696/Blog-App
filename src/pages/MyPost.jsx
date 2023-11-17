import React, {useState} from 'react'
import {PostCard, Container} from '../components/index'
import appwriteService from '../appwrite/config'
import { useSelector } from 'react-redux'
import { Query } from 'appwrite'

const MyPost = () => {

    const [myPosts, setMyPosts] = useState([]);
    const userData = useSelector((state) => state.auth.userData);

    appwriteService.getPosts([Query.equal('userId', userData.$id)]).then((post) => {
        if(post){
            setMyPosts(post.documents);
        }
    })

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {myPosts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default MyPost