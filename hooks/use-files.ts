import useSWR from 'swr'

import { ossClient } from '@/utils/Client'
import { FileData } from '@/types'

const fetcher = (dir: string) =>
  ossClient.listAllFiles(dir).then((files: FileData[]) => {
    return files
  })

export const useFiles = () => {
  const { data, error, isLoading } = useSWR('', fetcher)

  return {
    files: data,
    isError: error,
    isLoading,
  }
}
