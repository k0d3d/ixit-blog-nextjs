import React from 'react'
import DefaultPageLayout from '../../components/layout/default'
import PostArchive from '../../components/posts/archive'

export default function Posts() {
    return (
      <DefaultPageLayout title="All Posts" >
        <PostArchive />
      </DefaultPageLayout>
    )
  }
