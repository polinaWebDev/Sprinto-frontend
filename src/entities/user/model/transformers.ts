import { User, UserResponse } from '../../../features/auth/model/types'

export const transformUserResponse = (response: UserResponse): User => ({
  ...response,
  fullName: `${response.firstName} ${response.lastName}`,
  initials: `${response.firstName[0]}${response.lastName[0]}`,
})
