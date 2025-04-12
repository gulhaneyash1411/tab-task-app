import React, { useState } from 'react';

const Tab3 = () => {
  const [input, setInput] = useState<string>(''); 
  const [messages, setMessages] = useState<string[]>([]);

  const recursivePrint = (n: number) => {
    if (n > 0) {
      setMessages(prev => [...prev, 'Hello Task']);
      setTimeout(() => recursivePrint(n - 1), 300);
    } else {
      setMessages(prev => [...prev, 'STOP']);
    }
  };

  const handleStart = () => {
    const num = Number(input);
    if (!isNaN(num) && num > 0) {
      setMessages([]);
      recursivePrint(num);
    } else {
      setMessages(['Please enter a valid number greater than 0']);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={input}
        placeholder="Enter a number"
        onChange={(e) => setInput(e.target.value)}
        className="form-control w-25 d-inline"
      />
      <button onClick={handleStart} className="btn btn-success ms-2">Start</button>

      <div className="mt-3">
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
    </div>
  );
};

export default Tab3;
