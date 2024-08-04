'use strict'
import React from 'react';
import { createRoot } from 'react-dom/client';

export const Detail = () => {
    return <div>Detail</div>
}

// 渲染你的 React 组件
const root = createRoot(document.getElementById('root'));
root.render(<Detail />);
