import styles from './styles.module.css'

function Home() {
  return (
    <div>
      <input maxLength={6} type="text" placeholder="Código" className={styles.input} />
    </div>
  )
}

export default Home