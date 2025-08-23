import { useMutation } from '@tanstack/react-query'
import { authControllerOauthLogin } from '@/shared/types/sdk'

export const useOAuthLogin = () => {
  const oauthLogin = useMutation({
    ...authControllerOauthLogin(),

    onSuccess: (data) => {
      console.log('OAuth login initiated successfully', data)
    },
    onError: (error) => {
      console.error('OAuth login failed:', error)
    },
  })

  return {
    oauthLogin: oauthLogin.mutate,
    isLoading: oauthLogin.isPending,
    error: oauthLogin.error,
  }
}
