import { useState } from 'react';
import styles from './Form.module.css';

export function Form(props) {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Irina Eliseeva')

  const handleClickPlus = () => {
    setCount(count + 1)
  }
  const handleClickMinus = () => {
    setCount(count - 1)
  }
  const handleClickMultiply = () => {
    setCount(count * 2)
  }
  const handleClickDivide2 = () => {
    setCount(count / 2)
  }

  const handleChange = (event) => {
    setName(event.target.value)
  }

  console.log('props', props)

  return (
    <>
      <h4 style={{ color: 'purple' }}>{props.title}</h4>
      <h5 className={styles.border}>Name: {name}</h5>
      <input type="text" onChange={handleChange} />
      <hr/>
      <p>COUNT: {count}</p>
      <button onClick={handleClickPlus}>Click +</button>
      <button onClick={handleClickMinus}>Click -</button>
      <button onClick={handleClickMultiply}>Click * 2</button>
      <button onClick={handleClickDivide2}>Click / 2</button>
    </>
  )
}