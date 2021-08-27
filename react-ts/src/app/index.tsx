import Header from './header';
import Button, { ButtonProps } from '../first';
import { useState } from 'react';
import Show from '../second';
import './index.css';

function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = (values: ButtonProps) => {
      if (values.firstValue == null) values.firstValue = 0;
      if (counter == 0) setCounter(values.firstValue);
      if (counter > 100) setCounter(values.firstValue);
      else setCounter(counter+values.incrementBy);
  }
  return (
    <div className="container">
      <div className="header">
        <Header subtitle="React Typescript"/>
      </div>
      <div className="content">
        Content will go here..
        <Button handleClick={handleClick} text="Up" incrementBy={5} firstValue={5}></Button>
        <Button handleClick={handleClick} text="Up" incrementBy={2} firstValue={2}></Button>
        <Show value={counter}></Show>
      </div>
    </div>
  );
}

export default App;
