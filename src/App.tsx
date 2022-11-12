import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import rocketLogo from './assets/rocket.svg';

function App() {
  return (
    <div className="App">
      <header>
        <img src={rocketLogo} alt="Logo Foguete" />
        <strong className={styles.headerTitle}>to</strong><strong>do</strong>
      </header>
    </div>
  )
}

export default App
