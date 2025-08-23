'use client'
import { useLoginModel } from '@/features/auth/model/useLogin'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  LoginFormValues,
  zAuthControllerLoginData,
} from '@/features/auth/model/validators'

export const useLoginForm = () => {
  const { login, isLoading } = useLoginModel()

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(zAuthControllerLoginData.shape.body),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = form.handleSubmit((formData: LoginFormValues) => {
    login({ body: formData })
  })

  return { form, onSubmit, isLoading }
}
