import { transformUserResponse } from '@/entities/user/model/transformers'
import { User } from '@/features/auth/model/types'
import { useMutation } from '@tanstack/react-query'
import { authControllerRegisterMutation } from '@/features/auth/api/auth.api'

export interface UseRegisterModelOptions {
  onSuccess?: (result: { user: User }) => void
  onError?: (error: Error) => void
}

export const useRegisterModel = (options?: UseRegisterModelOptions) => {
  const registerMutation = useMutation({
    ...authControllerRegisterMutation(),
    onSuccess: (data) => {
      const user: User = transformUserResponse(data)
      options?.onSuccess?.({ user })
    },
    onError: (error) => {
      options?.onError?.(error)
    },
  })

  return {
    register: registerMutation.mutate,
    isLoading: registerMutation.isPending,
    error: registerMutation.error,
  }
}
