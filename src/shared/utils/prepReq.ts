import { RequestResult } from '@/shared/types/sdk/client'

export async function prepReq<K>(data: RequestResult<K>) {
  try {
    const res = await data
    if (!res.data) return null
    return res.data
  } catch (error) {
    return null
  }
}
