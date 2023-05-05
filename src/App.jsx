import React from "react";
import Analytics from './pages/Analytics';
import Sidebar from './components/Sidebar';import 'antd/dist/reset.css';
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
