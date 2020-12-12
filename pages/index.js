import { useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

function Home() {
  const [author, setAuthor] = useState(false)
  const [code, setCode] = useState(false)

  const maths = [
    {
      id: 1,
      math: 'Caminhando ao fim da tarde, uma senhora contou 19 casas em uma rua à sua direita. '
        + 'No regresso, ela contou 19 casas à sua esquerda. Quantas casas ela viu no total?',
      result: 12,
    }
  ]

  function handleAuthor(e) {
    if (e.target.value.toLowerCase() == 'iksnimel oluap') {
      console.log('acertou!')
      setAuthor(!author)
    }
  }
  function handleCode(e) {
    if (e.target.value.toLowerCase() == '0042') {
      console.log('acertou!')
      setCode(!code)
    }
  }

  function getSomeMath() {
    return maths[Math.floor(Math.random() * maths.length)]
  }

  const AuthorComponent = () => (
    <div className={styles.field}>
      <input
        className={styles.input}
        type='text'
        placeholder="Autor do link que te trouxe aqui ( de trás pra frente )"
        onChange={
          (text) => handleAuthor(text)
        }
      />
      <div className={styles.line} />
    </div>
  )

  const MathComponent = () => (
    <div className={styles.math_container}>
      <span className={styles.math_title}>
        SUA CHARADA
      </span>
      <br />
      <br />
      <div className={styles.math_content}>
        <span>
          {getSomeMath().math}
        </span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <span className={styles.code_label}>
        Responda com a soma das respostas de todas as charadas.
      </span>
      <input
        maxLength={4}
        type='text'
        placeholder="Soma"
        className={styles.code_input}
        onChange={
          (text) => handleCode(text)
        }
      />
    </div>
  )
  // iksnimel olua

  const QRCodeComponent = () => (
    <div className={styles.field}>
      <Image
        src="/qrcode.png"
        alt="QRCode"
        width={500}
        height={500}
      />
    </div>
  )

  return (
    <>
      { !author && !code ? <AuthorComponent /> : null}
      { author && !code ? <MathComponent /> : null}
      { code ? <QRCodeComponent /> : null}
    </>
  )
}

export default Home