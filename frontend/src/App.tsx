import './App.css';
import TodoItem from './TodoItem';

import {
  useQuery,
  gql
} from "@apollo/client";



function App() {

  type TaskStatus = "TODO" | "DOING" | "DONE" | "STUCK"

  type Task = {
    status: TaskStatus,
    name: string,
    description?: string
    dueDate?: Date,
    id: string
  }


  const taskQuery = useQuery(gql`
  query GetAllTasks {
    tasks {
      status,
      name,
      id
    }
  }        
`);




  if (taskQuery.loading) return <p>Loading...</p>;
  if (taskQuery.error) return <p>Error :(</p>;

  return (
    <div className="App">
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {
          taskQuery.data && taskQuery.data.tasks.map((task: Task) => <TodoItem task={task} key={task.id} />)
        }
      </div>
    </div>
  );
}

export default App;
