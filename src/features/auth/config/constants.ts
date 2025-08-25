import { AppleIcon } from 'lucide-react'

export const OAUTH_PROVIDERS = {
  name: 'Google',
  icon: AppleIcon,
  action: 'loginWithGoogle',
  path: `${process.env.API_BACKEND}/auth/oauth`,
} as const
