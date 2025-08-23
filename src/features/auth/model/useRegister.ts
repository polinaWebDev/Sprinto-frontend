import { useMutation } from '@tanstack/react-query'
import { transformUserResponse } from '@/entities/user/model/transformers'
import { toast } from 'sonner'
import { authControllerRegisterMutation } from '@/features/auth/api/auth.api'
import { useRouter } from 'next/navigation'

export const useRegisterModel = () => {
  const router = useRouter()

  const registerMutation = useMutation({
    ...authControllerRegisterMutation(),
    onSuccess: (data) => {
      const user = transformUserResponse(data)
      router.push('/dashboard')
      toast.success(`Welcome, ${user.fullName}`)
    },
    onError: (error) => {
      toast.error(`Register failed: ${error.message}`)
    },
  })

  return {
    login: registerMutation.mutate,
    isLoading: registerMutation.isPending,
    error: registerMutation.error,
  }
}
