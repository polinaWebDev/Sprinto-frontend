import { useMutation } from '@tanstack/react-query'
import { authControllerLoginMutation } from '@/features/auth/api/auth.api'
import { transformUserResponse } from '@/entities/user/model/transformers'
import { toast } from 'sonner'
import { router } from 'next/client'

export const useLoginModel = () => {
  const loginMutation = useMutation({
    ...authControllerLoginMutation(),
    onSuccess: (data) => {
      const user = transformUserResponse(data)
      router.push('/dashboard')
      toast.success(`Welcome back, ${user.fullName}`)
    },
    onError: (error) => {
      toast.error(`Login failed: ${error.message}`)
    },
  })

  return {
    login: loginMutation.mutate,
    isLoading: loginMutation.isPending,
    error: loginMutation.error,
  }
}
