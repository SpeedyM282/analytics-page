import React from "react";
// import Button from './components/Button';
// import Input from './components/Input';
import Sidebar from './components/Sidebar';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      {/* <Button/> */}
      {/* <Input withLink={true} />
      <Input withLink={false} /> */}
      <Sidebar />
    </div>
  );
}

export default App;
