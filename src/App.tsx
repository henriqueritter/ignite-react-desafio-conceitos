import styles from './App.module.css'
import rocketLogo from './assets/rocket.svg';
import clipboardIco from './assets/clipboard.svg';
import { PlusCircle, Trash, Circle, CheckCircle, Student } from 'phosphor-react';

import { Todo } from './components/Todo';
import { ChangeEvent, FormEvent, useState } from 'react';

interface ITodo {
  id: number;
  content: string;
  isChecked: boolean;
}


const initialTodos: ITodo[] = [
  {
    id: 1,
    content: "Duis vel sed fames integer",
    isChecked: true
  },
  {
    id: 2,
    content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer",
    isChecked: true
  },
  {
    id: 3,
    content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer",
    isChecked: false
  }
];

function App() {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);
  let content = "";

  function handleNewTodoChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    content = event.target.value;
  }

  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault();

    const newTodo = {
      id: todos.length + 1,
      content,
      isChecked: false
    }
    console.log(todos.length);
    setTodos([...todos, newTodo])
  }

  function handleCheckTodo(todoId: number) {
    alert(`todo ${todoId} updated`)
  }

  function handleDeleteTodo(todoId: number) {
    const todosWithoutDeletedTodo = todos.filter(todo => todo.id !== todoId);

    setTodos(todosWithoutDeletedTodo);
  }

  return (
    <div className="App">
      <header>
        <img src={rocketLogo} className={styles.headerLogo} alt="Logo Foguete" />
        <strong className={styles.headerTitle}>to</strong><strong>do</strong>
      </header>
      <form className={styles.todoForm} onSubmit={handleCreateNewTodo}>
        <textarea
          onChange={handleNewTodoChange}
          placeholder='Adicione uma nova tarefa' />
        <button>
          Criar <PlusCircle size={32} />
        </button>
      </form>
      <div className={styles.contentSection}>
        <div className={styles.contentHeaders}>
          <span className={styles.headerTask}>
            Tarefas criadas
            <span className={styles.taskCounter}>{todos.length}</span>
          </span>
          <span className={styles.headerCompleted}>
            Concluídas
            <span className={styles.taskCounter}>{`${todos.filter(todo => todo.isChecked == true).length} de ${todos.length}`}</span>
          </span>
        </div>
        {todos.length <= 0 ?
          <div className={styles.contentTodos}>
            <img src={clipboardIco} alt="Clipboard" />
            <span>Você ainda não tem tarefas cadastradas</span>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
          :
          <div className={styles.contentTodos}>
            {todos.map(item => {
              return <Todo
                key={item.id}
                todo={item}
                onCheckTodo={handleCheckTodo}
                onDeleteTodo={handleDeleteTodo}
              />
            })}
          </div >

        }


      </div>
    </div>
  )
}

export default App
