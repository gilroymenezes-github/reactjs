import { useState } from 'react';
import './App.css';
import { Stack } from '@fluentui/react';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

function App() {
  const [todos, setTodos] = useState([{ id: 1, name: "Todo Item 1" }, { id: 2, name: "Todo Item 2" }]); 

  const addTodo = (todoName) => {  
    if (todoName != "") {  
      const newId = todos.length + 1;  
      const newTodos = [...todos, { id: newId, name: todoName }];  
      setTodos(newTodos);  
    }  
  };  

  return (
    <div className="wrapper">
      <Stack horizontalAlign="center">  
        <h1>Todo App using Fluent UI & React</h1>  
        <Stack style={{ width: 300 }} gap={25}>  
          <TodoAdd addTodo={addTodo} />
          <TodoList todos={todos} />
        </Stack>  
      </Stack>  
    </div>
  );
}

export default App;
