import { connect } from 'react-redux'
import Todo, { TodoProps } from '@/app/component/todo'
import { StoreState } from '@/store/state'
import { TodoActionCreators } from '@/store/todo/actions'
import { TodoItem } from '@/store/todo/state'


type StateProps = Pick<TodoProps, 'items' | 'undoable' | 'redoable'>

type DispatchProps = Pick<TodoProps, 'onAddItem' | 'onDelItem' | 'onUndo' | 'onRedo'>

interface OwnProps { }


/**
 * connect to redux store
 */
export default connect<
  StateProps,
  DispatchProps,
  OwnProps,
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
