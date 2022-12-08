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
    id: 1234,
    content: "Duis vel sed fames integer",
    isChecked: true
  },
  {
    id: 1235,
    content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer",
    isChecked: true
  },
  {
    id: 1236,
    content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer",
    isChecked: false
  }
];


function App() {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);
  let content = "abc";

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

    setTodos([...todos, newTodo])
  }

  return (
    <div className="App">
      <header>
        <img src={rocketLogo} className={styles.headerLogo} alt="Logo Foguete" />
        <strong className={styles.headerTitle}>to</strong><strong>do</strong>
      </header>
      <form className={styles.todoForm} onSubmit={handleCreateNewTodo} onScroll={() => alert('OK')}>
        <textarea
          onChange={handleNewTodoChange}
          value={content}
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
        <TodosSection todos={todos} />

      </div>
    </div>
  )
}


interface ITodosSection {
  todos: ITodo[]
}

function TodosSection({ todos }: ITodosSection) {

  function handleCheckTodo(todoId: number) {
    alert(`todo ${todoId} updated`)
  }

  function handleDeleteTodo(todoId: number) {
    alert(`todo ${todoId} deleted`)
  }

  if (todos) {
    return (
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
    )
  } else {
    return (
      <div className={styles.contentTodos}>
        <img src={clipboardIco} alt="Clipboard" />
        <span>Você ainda não tem tarefas cadastradas</span>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    )
  }
}

export default App
