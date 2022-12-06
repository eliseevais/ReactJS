import { useState } from 'react';
import './App.css';
import { Form } from './components/classes/Form'
import { Form as FormFunc } from './components/func/Form'
import { Form2 as FormFunc2 } from './components/func/Form2';

export function App(props) {
  const [toggle, setToggle] = useState(true)
  const [toggleSecond, setToggleSecond] = useState(false)
  const [arr, setArr] = useState([
    { name: 'Biba', age: 10 },
    { name: 'Boba', age: 15 },
    { name: 'Giga', age: 20 },
    { name: 'Goga', age: 25 }
  ])

  return (
    <div className="App">
      <header
        className="App-header"
      >
        My first React App
        <Form />
        <hr />
        <button onClick={() => setToggle(!toggle)}>{toggle ? 'Hide' : 'Show'}</button>
        {toggle && <FormFunc title='Function Component. Use it' />}
        <hr />
        Work with arrays
        <ul>
          {arr.map((item, idx) => (
            <li key={idx}>[{item.name}, {item.age}]</li>
          ))}
        </ul>
        <hr />
        <button onClick={() => setToggleSecond(!toggleSecond)}>{toggleSecond ? 'HideSecond' : 'ShowSecond'}</button>
        {toggleSecond && <FormFunc2 title='Function Component 2. Use it too' />}
      </header>
    </div >
  );
}
