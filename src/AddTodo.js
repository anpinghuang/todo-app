import { useState } from 'react';

function AddTodo({ onAddTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a new todo"
        style={{ padding: '10px', width: '200px' }}
      />
      <button type="submit" style={{ marginLeft: '10px' }}>Add</button>
    </form>
  );
}

export default AddTodo;
