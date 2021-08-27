import { Stack, Label } from '@fluentui/react';

const TodoItem = ({todo}) => {
    return (  
        <Stack>
            <Stack horizontal verticalAlign="center" horizontalAlign="space-between">
                <Label>{todo.name}</Label>
            </Stack>
        </Stack>
    );
}

 
export default TodoItem