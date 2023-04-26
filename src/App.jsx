import React from "react";
// import Button from './components/Button';
// import Input from './components/Input';
import Sidebar from './components/Sidebar';
import Analytics from './pages/Analytics';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Sidebar user='Денис Потемкин' />
      <main className="app__main">
        <Analytics />
      </main>
    </div>
  );
}

export default App;
