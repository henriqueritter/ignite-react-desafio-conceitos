import { PlusCircle, Trash, Circle, CheckCircle, Student } from 'phosphor-react';
import styles from './styles.module.css'

function Todo() {
  function handleCheckTodo() {
    console.log('Clicou');
  }

  const todos: any = [
    {
      id: 1234,
      content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer",
      isChecked: true
    }
  ];

  return (
    <div className={styles.todo}>
      <CheckCircle onClick={handleCheckTodo} weight="fill" className={styles.checkBox} size={32} />
      <div className={todos[0].isChecked ? styles.checkedTodo : styles.unCheckedTodo}>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </div>
      <Trash size={16} />
    </div>
  )
}