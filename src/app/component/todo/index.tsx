import { connect } from 'react-redux'
import { StoreState } from '@/store/state'
import { TodoActionCreators } from '@/store/todo/actions'
import { TodoItem } from '@/store/todo/state'
import Todo from './component'


/**
 * connect to redux store
 */
export default connect<
  TodoStateProps,
  TodoDispatchProps,
  TodoOwnProps,
  StoreState
>(
  state => ({
    items: state.todo.present.items,
    undoable: state.todo.past.length > 0,
    redoable: state.todo.future.length > 0,
  }),
  dispatch => ({
    onAddItem: (todoItem: TodoItem) => dispatch(TodoActionCreators.addItem(todoItem)),
    onDelItem: (todoItem: TodoItem) => dispatch(TodoActionCreators.delItem(todoItem)),
    onUndo: () => dispatch(TodoActionCreators.undo()),
    onRedo: () => dispatch(TodoActionCreators.redo()),
  }),
)(Todo)


export interface TodoStateProps {
  items: TodoItem[]
  /**
   * Whether a undo operation can be performed
   */
  undoable: boolean
  /**
   * Whether a redo operation can be performed
   */
  redoable: boolean
}


export interface TodoDispatchProps {
  /**
   * Callback when add todo item
   */
  onAddItem?: (item: TodoItem) => void
  /**
   * Callback when remove todo item
   */
  onDelItem?: (item: TodoItem) => void
  /**
   * Perform undo
   */
  onUndo?: () => void
  /**
   * Perform redo
   */
  onRedo?: () => void
}


export interface TodoOwnProps {

}
