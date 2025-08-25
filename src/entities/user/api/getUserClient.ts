import { useQuery } from '@tanstack/react-query'
import { authControllerGetMeOptions } from '@/features/auth/api/auth.api'

export const useUserClient = () => {
  const user = useQuery({
    ...authControllerGetMeOptions(),
    retry: 0,
  })

  return {
    user: user.data,
    isLoading: user.isPending,
    error: user.error,
  }
}
