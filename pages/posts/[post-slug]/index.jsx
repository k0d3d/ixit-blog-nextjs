import React from 'react'
import DefaultPageLayout from '../../../components/layout/default'
import PostArchive from '../../../components/posts/archive'
import { useRouter } from 'next/router'
import SinglePost from '../../../components/posts/single-post'


export default function Posts() {
  const router = useRouter()

  const postSlug = router.query['post-slug']
  return (
    <DefaultPageLayout  >
      {
        !postSlug ? <PostArchive /> : <SinglePost postSlug={postSlug} />
      }
      
    </DefaultPageLayout>
  )
}
