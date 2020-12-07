import { useState } from 'react'
import styles from './styles.module.css'

function Home() {
  const [someBool, setSomeBool] = useState(true)

  function handleChange(e) {
    if (e.target.value.toLowerCase() == 'iksnimel oluap') {
      console.log('acertou!')
      setSomeBool(!someBool)
    }
  }

  const Author = () => (
    <div className={styles.field}>
      <input
        className={styles.input}
        type='text'
        placeholder="Autor do link que te trouxe aqui, ao contrário."
        onChange={
          (text) => handleChange(text)
        }
      />
      <div className={styles.line}></div>
    </div>
  )

  const Code = () => (
    <input
      maxLength={6}
      type='text'
      placeholder="Código"
      className={styles.code_input}
    />
  )
  // iksnimel olua

  return (
    <>
      {/* <div className={styles.form_group}>
        <input className={styles.form_field} type="email" placeholder="Email" />
        <span className={styles.span}>@effecti.com.br</span>
      </div> */}
      { someBool ? <Author /> : null}
      { !someBool ? <Code /> : null}
    </>
  )
}

export default Home