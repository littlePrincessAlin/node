'use strict'
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Gallery } from './Index/Index';
import './app.css';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <div>App组件1122</div>
        <Gallery></Gallery>
      </div>
    )
  }
}

// 渲染你的 React 组件
const root = createRoot(document.getElementById('root'));
root.render(<App />);
