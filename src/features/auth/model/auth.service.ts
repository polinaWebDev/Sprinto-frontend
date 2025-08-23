import { cookies } from 'next/headers'
import { User } from '@/features/auth/model/types'
import { authControllerGetMe } from '@/shared/types/sdk'
import { transformUserResponse } from '@/entities/user/model/transformers'

export async function getCurrentUser(): Promise<User | null> {
  const storage = await cookies()
  const token = storage.get('accessToken')?.value
  const refreshToken = storage.get('refreshToken')?.value
  if (!token) return null
  const cookieHeader = `accessToken=${token}; refreshToken=${refreshToken};`

  try {
    const res = await authControllerGetMe({
      headers: {
        Cookie: cookieHeader,
      },
      credentials: 'include',
    })

    if (!res.data) {
      console.log('Failed to fetch user:', res.data)
      return null
    }

    return transformUserResponse(res.data)
  } catch (error) {
    console.log('Error fetching user:', error)
    return null
  }
}
