import styles from './App.module.css'
import rocketLogo from './assets/rocket.svg';
import clipboardIco from './assets/clipboard.svg';
import { PlusCircle } from 'phosphor-react';

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
        <div className='todosContent'>
          <span>Tarefas criadas 0</span>
          <span>Concluídas 0</span>
          --------
          <div>
            <img src={clipboardIco} alt="Clipboard" />
            <span>Você ainda não tem tarefas cadastradas</span>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
