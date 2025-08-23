import { AppleIcon } from 'lucide-react'

export const AUTH_ROUTES = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  FORGOT_PASSWORD: '/auth/forgot-password',
} as const

export const OAUTH_PROVIDERS = [
  { name: 'Apple', icon: AppleIcon, action: 'loginWithApple' },
  { name: 'Google', icon: AppleIcon, action: 'loginWithGoogle' },
] as const
