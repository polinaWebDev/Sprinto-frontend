import { UserResponse } from '@/shared/types/sdk'

export type { UserResponse, LoginDto, RegisterDto } from '@/shared/types/sdk'

export interface User extends UserResponse {
  readonly fullName: string
  readonly initials: string
}
