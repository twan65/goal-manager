import { authHandlers } from './auth'
import { goalHandlers } from './goals'

export const handlers = [...authHandlers, ...goalHandlers]