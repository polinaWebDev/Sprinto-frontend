'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { zAuthControllerLoginData } from '@/shared/types/sdk/zod.gen'
import { authControllerLoginMutation } from '@/shared/types/sdk/@tanstack/react-query.gen'
import { z } from 'zod'

type LoginFormValues = z.infer<typeof zAuthControllerLoginData>['body']

export const useLogin = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(zAuthControllerLoginData.shape.body),
    mode: 'onChange',
  })

  const loginMutation = useMutation({
    ...authControllerLoginMutation(),
    onSuccess: (data) => {
      console.log(toast.success('test'))
      toast.success(`Welcome back!, ${data.firstName} ${data.lastName}`)
    },
    onError: (error: any) => {
      toast.error(error.message || 'Login failed')
    },
  })

  const onSubmit = form.handleSubmit((formData: LoginFormValues) => {
    loginMutation.mutate({ body: formData })
    console.log(loginMutation.mutate({ body: formData }))
  })

  return {
    form,
    loginMutation,
    onSubmit,
    isLoading: loginMutation.isPending,
  }
}
