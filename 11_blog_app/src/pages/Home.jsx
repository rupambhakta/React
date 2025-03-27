import React from 'react'
import appwritreService from "../appwrite/config"
import { useState } from "react"
import Container from "../components/container/Container"
import PostCard from "../components/PostCard"
import { useEffect } from 'react'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    appwritreService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  if (posts.length === 0) {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap">
            <h1>Login to read posts</h1>
          </div>
        </Container>
      </div>
    )
  }
  //TODO: add case for array lengh is 0 -task
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {
            posts.map((post) => (
              <div className="p-2 w-1/4" key={post.$id}>
                <PostCard {...post} />
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default Home
