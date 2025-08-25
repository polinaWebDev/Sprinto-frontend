import { UserResponse } from '@/shared/types/sdk'
import { User } from '@/entities/user/model/types'

export const transformUserResponse = (response: UserResponse): User => ({
  ...response,
  fullName: `${response.firstName} ${response.lastName}`,
  initials: `${response.firstName[0]}${response.lastName[0]}`,
})
