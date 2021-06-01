import { QueryFunctionContext, useQuery } from 'react-query'
import axios from 'axios'
import { IPosts } from '../domains/Posts'

export const fetchPost = ({queryKey}: QueryFunctionContext) =>
  axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/posts/${queryKey[1]}`).then((res) => res.data)

export default function usePost(postId) {
  return useQuery<IPosts, Error>(postId && ['post', postId], fetchPost)
}
