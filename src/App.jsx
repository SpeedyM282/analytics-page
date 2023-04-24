import React from "react";
import Button from './components/Button';
import Input from './components/Input';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Button/>
      <Input withLink={true} />
      <Input withLink={false} />
      HELLO WORLD
    </div>
  );
}

export default App;
