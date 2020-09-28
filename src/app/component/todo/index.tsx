import React, { useMemo, useState } from 'react'
import { TodoItem } from '@/store/todo/state'
import ss from './style.styl'


export interface TodoProps {
  /**
   * Items of todo list
   */
  items: TodoItem[]
  /**
   * Whether a undo operation can be performed
   */
  undoable: boolean
  /**
   * Whether a redo operation can be performed
   */
  redoable: boolean
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


export default function Todo(props: TodoProps): React.ReactElement {
  const { items, undoable, redoable } = props
  const [content, setContent] = useState<string>('')
  const isValidTodoItem = useMemo<boolean>((): boolean => {
    if (!/\S/.test(content)) return false
    return items.find(x => x.identifier === content) == null
  }, [content, items])

  const handleAddItem = () => {
    if (props.onAddItem != null) {
      props.onAddItem({
        identifier: content,
        content: content,
        status: 'doing'
      })
      setContent('')
    }
  }

  const handleDelItem = (item: TodoItem) => {
    if (props.onDelItem != null) {
      props.onDelItem(item)
    }
  }


  const handleUndo = () => {
    if (props.onUndo != null) {
      props.onUndo()
    }
  }

  const handleRedo = () => {
    if (props.onRedo != null) {
      props.onRedo()
    }
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={ content }
          onChange={ e => setContent(e.target.value) }
        />
        <button disabled={ !isValidTodoItem } onClick={ handleAddItem }>add</button>
        <button disabled={ !undoable } onClick={ handleUndo }>undo</button>
        <button disabled={ !redoable } onClick={ handleRedo }>redo</button>
      </div>
      <ul className={ ss.todoList }>
        { items.map(item => {
          return (
            <li key={ item.identifier } >
              <div className={ ss.todoItem }>
                <span className={ ss.todoItemContent }>{ item.content }</span>
                <span
                  className={ ss.todoItemRemoveBtn }
                  onClick={ () => handleDelItem(item) }
                >
                  &times;
                </span>
              </div>
            </li>
          )
        }) }
      </ul>
    </div>
  )
}
