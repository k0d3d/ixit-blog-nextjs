import { useInfiniteQuery } from 'react-query'
import axios from 'axios'
import {IPosts} from '../domains/Posts'

export default function useInfinitePosts() {
  return useInfiniteQuery<IPosts, Error>(
    'infinitePosts',
    (key, nextPageOffset = 0) =>
      axios
        .get(process.env.NEXT_PUBLIC_API_HOST + '/posts', {
          params: {
            // pageSize: 3,
            // pageOffset: nextPageOffset,
          },
        })
        .then((res) => res.data),
    {
      getNextPageParam: (lastPage, allPages) => lastPage.nextCursor
    }
  )
}
