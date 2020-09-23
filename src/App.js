import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskCounter from './components/TaskCounter';
import TaskListing from './components/TaskListing';

function App() {
  return (
    <Container maxWidth="md">
      <Header />
      <TaskInput />
      <TaskCounter />
      <TaskListing />
    </Container>
  );
}

export default App;
