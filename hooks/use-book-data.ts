import useSWR from 'swr'
import { ListObjectResult } from 'ali-oss'

import { ossClient } from '@/utils/Client'
const fetcher = (dir: string) =>
  ossClient
    .listDir(`${decodeURIComponent(dir)}/`)
    .then((res: ListObjectResult) => res.objects)

export const useUser = (dir: string) => {
  const { data, error, isLoading } = useSWR(dir, fetcher)

  return {
    data,
    isLoading,
    isError: error,
  }
}
