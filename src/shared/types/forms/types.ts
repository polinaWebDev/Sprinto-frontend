export interface FieldConfig {
  name: string
  label: string
  type?: 'text' | 'password' | 'email' | 'tel'
  placeholder?: string
  required?: boolean
  defaultValue?: string
}

export const registerFields: FieldConfig[] = [
  { name: 'firstName', label: 'Имя', type: 'text', required: true },
  { name: 'lastName', label: 'Фамилия', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'password', label: 'Пароль', type: 'password', required: true },
]

export const loginFields: FieldConfig[] = [
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'password', label: 'Пароль', type: 'password', required: true },
]
