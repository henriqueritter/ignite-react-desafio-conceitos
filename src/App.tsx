import styles from './App.module.css'
import rocketLogo from './assets/rocket.svg';
import clipboardIco from './assets/clipboard.svg';
import { PlusCircle, Trash } from 'phosphor-react';

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

function TodosSection() {
  const todos: any = [];
  if (todos) {
    return (
      <div className={styles.contentTodos}>
        <div className={styles.todo}>
          <input type="checkbox" />
          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
          <Trash size={16} />
        </div>
        <div className={styles.todo}>
          <input type="checkbox" />
          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
          <Trash size={16} />
        </div>
        <div className={styles.todo}>
          <input type="checkbox" />
          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
          <Trash size={16} />
        </div>
      </div>
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
