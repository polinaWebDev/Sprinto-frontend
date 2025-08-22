import { z } from 'zod'
import {
  zAuthControllerLoginData,
  zAuthControllerRegisterData,
} from '@/shared/types/sdk/zod.gen'

export {
  zRegisterDto,
  zAuthControllerLoginData,
} from '@/shared/types/sdk/zod.gen'

export type LoginFormValues = z.infer<typeof zAuthControllerLoginData>['body']
export type RegisterFormValues = z.infer<
  typeof zAuthControllerRegisterData
>['body']
