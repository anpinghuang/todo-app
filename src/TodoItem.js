function TodoItem({ todo, onToggle }) {
    return (
      <li 
        style={{ 
          textDecoration: todo.completed ? 'line-through' : 'none', 
          margin: '10px 0' 
        }}
      >
        <span>{todo.text}</span>
        <button onClick={onToggle} style={{ marginLeft: '10px' }}>
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
      </li>
    );
  }
  
  export default TodoItem;
  