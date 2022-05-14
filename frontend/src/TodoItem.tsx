import { Task } from "./interface/task"
interface TodoItemProp {
    task: Task
}

const TodoItem: React.FC<TodoItemProp> = ({ task }) => {


    return (
        <div style={{ padding: "10px", boxShadow: "0px 0px 5px rgba(0,0,0,0.1)", borderRadius: "5px0", maxWidth: "400px", margin: "10px", minWidth: "200px", }}>
            <p>Name: {task.name}</p>
            <p>Description: {task.description}</p>
            <p>Status: {task.status}</p>
        </div>

    )
}

export default TodoItem