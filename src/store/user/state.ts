/**
 *
 */
export interface UserState {
  username: string
  gender: 'male' | 'female'
}


/**
 *
 */
export const initUserState: UserState = {
  username: 'Alice',
  gender: 'female',
}
