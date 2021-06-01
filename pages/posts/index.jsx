import React from 'react'
import DefaultPageLayout from '../../components/layout/default'
import PostArchive from '../../components/posts/archive'
import { useRouter } from 'next/router'


export default function Posts() {
  const router = useRouter()


    return (
      <DefaultPageLayout title="All Posts" >
        
        <PostArchive />
      </DefaultPageLayout>
    )
  }
