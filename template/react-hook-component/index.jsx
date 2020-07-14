import React, { useState, useEffect } from 'react';

const style = {
  textAlign: 'center'
};

function Hook() {
  const [count, setCount] = useState(0);
  // componentDidMount/componentDidUpdate:
  useEffect(() => {
    document.title = `You clicked ${count}`;
    // 渲染之前执行清理
    return function cleanup() {
      console.log(123456);
    };
  });
  return (
    <div style={{...style}}>
      <p>You clicked {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Hook
