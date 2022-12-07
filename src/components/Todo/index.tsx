import { Trash, Circle, CheckCircle } from 'phosphor-react';
import styles from './styles.module.css'

function Todo(props: any) {
  function handleCheckTodo() {
    console.log('Clicou');
  }

  const todo: any = props.todos;

  return (
    <div className={styles.todo}>
      {todo.isChecked ?
        <CheckCircle onClick={handleCheckTodo} weight="fill" className={styles.checkBox} size={32} /> :
        <Circle onClick={handleCheckTodo} className={styles.checkBox} size={32} />}
      <div className={todo.isChecked ? styles.checkedTodo : styles.unCheckedTodo}>
        {todo.content}
      </div>
      <Trash size={16} />
    </div>
  )
}