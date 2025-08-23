import { CreateClientConfig } from '@/shared/types/sdk/client'

export const createClientConfig: CreateClientConfig = (config) => ({
  credentials: 'include',
  ...config,
})
