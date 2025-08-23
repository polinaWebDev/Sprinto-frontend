'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterFormValues } from '@/features/auth/model/validators'
import { zAuthControllerRegisterData } from '@/shared/types/sdk/zod.gen'
import { useRegisterController } from '@/features/auth/model/useRegisterController'

export const useRegisterForm = () => {
  const { register, isLoading } = useRegisterController()

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(zAuthControllerRegisterData.shape.body),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  })

  const onSubmit = form.handleSubmit((formData: RegisterFormValues) => {
    register({ body: formData })
  })

  return { form, onSubmit, isLoading }
}
