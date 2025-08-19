import { CreateClientConfig } from '@hey-api/client-fetch'

export const createClientConfig: CreateClientConfig = (config) => ({
  credentials: 'include',
  ...config,
})
