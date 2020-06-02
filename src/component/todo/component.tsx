import React, { useMemo, useState } from 'react'
import { TodoItem } from '@/store/todo/state'
import ss from './style.styl'


export interface TodoProps {
  /**
   * Items of todo list
   */
  items: TodoItem[]
  /**
   * Callback when add todo item
   */
  onAddItem?: (item: TodoItem) => void
  /**
   * Callback when remove todo item
   */
  onDelItem?: (item: TodoItem) => void
}


export default function Todo(props: TodoProps): React.ReactElement {
  const { items } = props
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

  return (
    <div>
      <div>
        <input
          type="text"
          value={ content }
          onChange={ e => setContent(e.target.value) }
        />
        <button
          disabled={ !isValidTodoItem }
          onClick={ handleAddItem }
        >
          add
        </button>
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
