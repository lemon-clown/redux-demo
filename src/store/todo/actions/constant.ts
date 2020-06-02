/**
 * Action types for StoreState.todo
 */
export enum TodoActionTypes {
  // Adding todo item
  ADD_ITEM = '@todo/ADD_ITEM',

  // Removing todo item
  DEL_ITEM = '@todo/DEL_ITEM',

  // Performing undo on StoreState.todo
  UNDO = '@todo/UNDO',

  // Performing redo on StoreState.todo
  REDO = '@todo/REDO',
}
