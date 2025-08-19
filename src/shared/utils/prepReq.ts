import { RequestResult } from '@hey-api/client-fetch'

export async function prepReq<K>(data: RequestResult<K>) {
  try {
    const res = await data
    if (!res.data) return null
    return res.data
  } catch (er) {
    return null
  }
}
