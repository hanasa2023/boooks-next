import { z } from 'zod'

const envSchema = z
  .object({
    NEXT_PUBLIC_OSS_ACCESS_KEY_ID: z.string(),
    NEXT_PUBLIC_OSS_ACCESS_KEY_SECRET: z.string(),
  })
  .passthrough()

const env = envSchema.parse({})

export const ossConfig = {
  accessKeyId: env.NEXT_PUBLIC_OSS_ACCESS_KEY_ID || '',
  accessKeySecret: env.NEXT_PUBLIC_OSS_ACCESS_KEY_SECRET || '',
}
