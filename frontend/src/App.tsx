import './App.css';
import TodoItem from './TodoItem';

import {
  useQuery,
  gql
} from "@apollo/client";

const TRACKS = gql`
query GetAllTracks {

  tracksForHome {
    id
    title
    author {
      photo
      name
      id
    }
  }
}`



function App() {


  const tracksQuery = useQuery(TRACKS)




  if (tracksQuery.loading) return <p>Loading...</p>;
  if (tracksQuery.error) return <p>Error :(</p>;

  return (
    <div>
      {
        tracksQuery?.data?.tracksForHome.map((track: any) => <p>{track.title}</p>)
      }
    </div>
  )

  // return (
  //   <div className="App">
  //     <div style={{ display: "flex", flexWrap: "wrap" }}>
  //       {
  //         taskQuery.data && taskQuery.data.tasks.map((task: Task) => <TodoItem task={task} key={task.id} />)
  //       }
  //     </div>
  //   </div>
  // );
}

export default App;
