'use client'

import React from 'react'
import { Control, useController } from 'react-hook-form'
import { Input } from '@/shared/ui/atoms/input'
import { Label } from '@/shared/ui/atoms/label'

interface InputFieldProps {
  name: string
  label: string
  control: Control<any>
  type?: string
  placeholder?: string
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  control,
  type = 'text',
  placeholder,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control })

  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={name}>{label}</Label>
      <Input
        {...field}
        id={name}
        value={field.value ?? ''}
        type={type}
        placeholder={placeholder}
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  )
}
