import { Label, Stack } from "@fluentui/react";
import TodoItem from "./TodoItem";

const TodoList = ({todos}) => {
    return ( 
        <Stack gap={10}>
            { 
                todos.length > 0 
                ? todos.map(todo => (<TodoItem todo={todo} key={todo.id}/>))
                : <Label>Todo list is empty...</Label>
            }
        </Stack>
     );
}
 
export default TodoList;