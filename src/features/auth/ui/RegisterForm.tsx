'use client'
import { AuthForm } from '@/shared/ui/organism/AuthForms'
import { registerFields } from '@/shared/types/forms/types'
import { useRegisterForm } from '@/features/auth/ui/hooks/useRegisterForm'

export function RegisterForm() {
  const { form, onSubmit, isLoading } = useRegisterForm()

  return (
    <AuthForm
      title="Register"
      description="Register with your credentials"
      fields={registerFields}
      onSubmit={onSubmit}
      isLoading={isLoading}
      form={form}
    />
  )
}
