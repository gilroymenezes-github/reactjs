import { PrimaryButton, Stack, TextField } from "@fluentui/react";
import { useState } from "react";

const TodoAdd = ({addTodo}) => {
    const [todoName, setTodoName] = useState("");
    const newTodo = () => {
        addTodo(todoName);
        setTodoName("");
    }
    const setTodo = event => setTodoName(event.target.value);
    
    return ( 
        <Stack>
            <Stack horizontal>
                <Stack.Item grow>
                    <TextField placeholder="Add new item" value={todoName} onChange={setTodo} />
                </Stack.Item>
                <PrimaryButton onClick={newTodo}>Add</PrimaryButton>
            </Stack>
        </Stack>
     );
}
 
export default TodoAdd;