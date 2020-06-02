/**
 * Item of todo list
 */
export interface TodoItem {
  /**
   * Identifier of todo item
   */
  identifier: string
  /**
   * Progress of the todo item
   */
  status: 'todo' | 'doing' | 'done'
  /**
   * The details of the things to be done
   */
  content: string
}


/**
 *
 */
export interface TodoState {
  items: TodoItem[]
}


/**
 *
 */
export const initTodoState: TodoState = {
  items: [],
}
