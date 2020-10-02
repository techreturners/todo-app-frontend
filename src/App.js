import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Header from './components/Header/Header';
import TaskInput from './components/TaskInput/TaskInput';
import TaskCounter from './components/TaskCounter/TaskCounter';
import TaskListing from './components/TaskListing/TaskListing';

// import cat from './assets/images/cat.webp';

function App() {

  const [tasks, setTasks] = useState([
    { taskDescription: "Buy some milk", completed: false },
    { taskDescription: "Walk the dog", completed: false},
    { taskDescription: "Empty the dishwasher", completed: false},
    { taskDescription: "Write some react", completed: false},
    { taskDescription: "Remember hooks!!!!", completed: true},
    { taskDescription: "Changing state", completed: false}
  ]);

  const addTask = text => {
    const newTask = {
      taskDescription: text,
      completed: false
    }

    const updatedTasks = [ ...tasks, newTask];

    setTasks(updatedTasks);
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
