import { useInfiniteQuery } from 'react-query'
import axios from 'axios'

export default function useInfinitePosts() {
  return useInfiniteQuery(
    'infinitePosts',
    (key, nextPageOffset = 0) =>
      axios
        .get('http://localhost:1337/posts', {
          params: {
            // pageSize: 3,
            // pageOffset: nextPageOffset,
          },
        })
        .then((res) => res.data),
    {
      getFetchMore: (lastResult) => lastResult.nextPageOffset,
    }
  )
}
