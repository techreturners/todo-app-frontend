import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Task from './Task';

function TaskListing({taskData}) {

    const incompleteTasks = taskData.filter((task) => task.completed === false);
    const completedTasks = taskData.filter((task) => task.completed === true);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <Typography variant="h6">Tasks to do:</Typography>
                {incompleteTasks.map((task) =>
                    <Task task={task} />
                )}
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h6">Complete tasks:</Typography>
                {completedTasks.map((task) => 
                        <Task task={task} />
                )}
            </Grid>
        </Grid>
    );
}

export default TaskListing;
