import { zAuthControllerRegisterData } from '@/shared/types/sdk/zod.gen'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { authControllerRegisterMutation } from '@/shared/types/sdk/@tanstack/react-query.gen'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

type RegisterFormValues = z.infer<typeof zAuthControllerRegisterData>['body']

export const useRegister = () => {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(zAuthControllerRegisterData.shape.body),
    mode: 'onChange',
  })

  const registerMutation = useMutation({
    ...authControllerRegisterMutation(),
    onSuccess: (data) => {
      console.log('Register success data:', data)
      toast.success(`Welcome!, ${data.firstName} ${data.lastName}`)
    },
    onError: (error: any) => {
      toast.error(error.message || 'Register failed')
    },
  })

  const onSubmit = form.handleSubmit((formData: RegisterFormValues) => {
    registerMutation.mutate({ body: formData })
    // console.log(registerMutation.mutate({ body: formData }))
  })

  return {
    form,
    onSubmit,
    isLoading: registerMutation.isPending,
  }
}
