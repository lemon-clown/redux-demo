// @see https://github.com/microsoft/TypeScript/issues/18408#issuecomment-637363118
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace TodoActionTypes {
  // Adding todo item
  export const ADD_ITEM = Symbol('@todo/ADD_ITEM')
  export type ADD_ITEM = typeof ADD_ITEM

  // Removing todo item
  export const DEL_ITEM = Symbol('@todo/DEL_ITEM')
  export type DEL_ITEM = typeof DEL_ITEM

  // Performing undo on StoreState.todo
  export const UNDO = Symbol('@todo/UNDO')
  export type UNDO = typeof UNDO

  // Performing redo on StoreState.todo
  export const REDO = Symbol('@todo/REDO')
  export type REDO = typeof REDO
}


/**
 * Action types for StoreState.todo
 */
export type TodoActionTypes =
  | TodoActionTypes.ADD_ITEM
  | TodoActionTypes.DEL_ITEM
  | TodoActionTypes.UNDO
  | TodoActionTypes.REDO
