import { defineConfig } from '@hey-api/openapi-ts'

console.log('Config loaded')

export default defineConfig({
  input: 'http://localhost:3000/api-json',
  output: {
    path: 'src/shared/types/sdk',
  },
  plugins: [
    {
      name: '@hey-api/client-fetch',
      runtimeConfigPath: './heyapi.config.ts',
    },
    '@hey-api/typescript',
    {
      asClass: false,
      name: '@hey-api/sdk',
    },
    '@tanstack/react-query',
    {
      name: 'zod',
    },
  ],
})
