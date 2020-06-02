import { StoreState } from '@/store/state'
import { TodoActionCreators } from '@/store/todo/actions'
import { TodoItem } from '@/store/todo/state'
import { connect } from 'react-redux'
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
    items: state.todo.items,
  }),
  dispatch => ({
    onAddItem: (todoItem: TodoItem) => dispatch(TodoActionCreators.addItem(todoItem)),
    onDelItem: (todoItem: TodoItem) => dispatch(TodoActionCreators.delItem(todoItem)),
  }),
)(Todo)


export interface TodoStateProps {
  items: TodoItem[]
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
}


export interface TodoOwnProps {

}
