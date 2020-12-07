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

  function getSomeMath() {
    const a = {
      number: 1,
      math: 'asd',
    }
    return a
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
      <div className={styles.line} />
    </div>
  )

  const Math = () => (
    <div>
      <span>
        Sua Charada:
      </span>
      <br />
      <br />
      <span>
        {getSomeMath().math}
      </span>
      <br />
      <span>
        Responda com a soma das respostas de todas as charadas.
      </span>
      <br />
      <input
        maxLength={4}
        type='text'
        placeholder="Soma"
        className={styles.code_input}
      />
    </div>
  )
  // iksnimel olua

  return (
    <>
      { someBool ? <Author /> : null}
      { !someBool ? <Math /> : null}
    </>
  )
}

export default Home