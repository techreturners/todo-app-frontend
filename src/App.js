import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import axios from 'axios';

import Header from './components/Header/Header';
import TaskInput from './components/TaskInput/TaskInput';
import TaskCounter from './components/TaskCounter/TaskCounter';
import TaskListing from './components/TaskListing/TaskListing';

// import cat from './assets/images/cat.webp';

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    //A function to get the tasks
    axios
    .get("https://dxmg4z4kvl.execute-api.eu-west-2.amazonaws.com/dev/tasks?userId=47801de2-98b0-4bce-a7ed-a")
    .then(
      //if the request is successful
      response => setTasks(response.data)
    )
    .catch(
      //if the request returns an error
      error => console.log(error))
    
  }, 
  //How often should I run this function
  []
  );

  const addTask = text => {
    const newTask = {
      completed: false,
      userId: "47801de2-98b0-4bce-a7ed-a",
      taskDescription: text,
    }
    //Post request, pass it the new task
    //if the post is successful, then add it to the app state
    //if the post is not successful, log out the error

    axios
    .post("https://dxmg4z4kvl.execute-api.eu-west-2.amazonaws.com/dev/tasks", newTask)
    .then(() => axios.get("https://dxmg4z4kvl.execute-api.eu-west-2.amazonaws.com/dev/tasks?userId=47801de2-98b0-4bce-a7ed-a"))
    .then(response => setTasks(response.data))
    .catch(error => console.log(error))
  }
  
  return (
    <Container maxWidth="md">
      <Header />
      {/* <img className="cat-img" src={ cat } alt="cat"/> */}
      <TaskInput addTask={ addTask }/>
      <TaskCounter tasksOutstanding={tasks.length} />
      <TaskListing taskData={tasks} />
    </Container>
  );
}

export default App;
