import OSS, { ListObjectResult } from 'ali-oss'

class OssClient {
  _client: OSS = new OSS({
    region: 'oss-cn-shanghai',
    accessKeyId: process.env.NEXT_PUBLIC_OSS_ACCESS_KEY_ID || '',
    accessKeySecret: process.env.NEXT_PUBLIC_OSS_ACCESS_KEY_SECRET || '',
    bucket: 'boooks',
  })

  async listDir(dir: string): Promise<ListObjectResult> {
    try {
      return await this._client.list(
        {
          prefix: dir,
          delimiter: '/',
          'max-keys': 100,
        },
        { timeout: 6000 },
      )
    } catch (e) {
      throw e // Rethrow the error to ensure a Promise rejection
    }
  }
}

export const ossClient: OssClient = new OssClient()
