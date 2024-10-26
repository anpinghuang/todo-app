import TodoItem from './TodoItem';

function TodoList({ todos, onToggleTodo }) {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {todos.map((todo, index) => (
        <TodoItem 
          key={index} 
          todo={todo} 
          onToggle={() => onToggleTodo(index)} 
        />
      ))}
    </ul>
  );
}

export default TodoList;
