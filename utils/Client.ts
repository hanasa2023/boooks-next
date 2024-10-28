import OSS, { ListObjectResult, ObjectMeta } from 'ali-oss'

class OssClient {
  private _client: OSS = new OSS({
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
        { timeout: 10000 },
      )
    } catch (e) {
      throw e
    }
  }

  async listAllFiles(dir: string): Promise<string[]> {
    try {
      const subDir: string[] = []
      const files: string[] = []
      const result = await this._client.list(
        {
          prefix: dir,
          delimiter: '/',
          'max-keys': 1000,
        },
        { timeout: 10000 },
      )

      if (result && result.prefixes) {
        result.prefixes.forEach((_dir) => {
          subDir.push(_dir)
        })
      }

      for (const _d of subDir) {
        const _r = await this.listDir(_d)

        if (_r && _r.objects) {
          _r.objects.forEach((obj: ObjectMeta) => {
            const _f = obj.name.replace(_d, '')

            if (_f !== '') files.push(_f)
          })
        }
      }

      return files
    } catch (e) {
      throw e
    }
  }
}

export const ossClient: OssClient = new OssClient()
