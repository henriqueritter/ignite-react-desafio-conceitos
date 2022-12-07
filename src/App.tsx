import styles from './App.module.css'
import rocketLogo from './assets/rocket.svg';
import clipboardIco from './assets/clipboard.svg';
import { PlusCircle, Trash, Circle, CheckCircle, Student } from 'phosphor-react';

import { Todo } from './components/Todo';

function App() {

  return (
    <div className="App">
      <header>
        <img src={rocketLogo} className={styles.headerLogo} alt="Logo Foguete" />
        <strong className={styles.headerTitle}>to</strong><strong>do</strong>
      </header>
      <form className={styles.todoForm} onScroll={() => alert('OK')}>
        <textarea placeholder='Adicione uma nova tarefa' />
        <button>
          Criar <PlusCircle size={32} />
        </button>
      </form>
      <div className={styles.contentSection}>
        <div className={styles.contentHeaders}>
          <span className={styles.headerTask}>
            Tarefas criadas
            <span className={styles.taskCounter}>0</span>
          </span>
          <span className={styles.headerCompleted}>
            Concluídas
            <span className={styles.taskCounter}>0</span>
          </span>
        </div>
        <TodosSection />

      </div>
    </div>
  )
}

interface ITodo {
  id: number;
  content: string;
  isChecked: boolean;
}

function TodosSection(props: any) {

  function handleCheckTodo(todoId: number) {
    alert(`todo ${todoId} updated`)
  }

  const todos: ITodo[] = [
    {
      id: 1234,
      content: "Duis vel sed fames integer",
      isChecked: false
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

  if (todos) {
    return (
      <div className={styles.contentTodos}>
        {todos.map(item => {
          return <Todo
            todo={item}
            onCheckTodo={handleCheckTodo} />
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
