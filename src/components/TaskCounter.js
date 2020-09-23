import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    taskCounter: {
      textAlign: "center",
      margin: "30px 0"
    },
}));

function TaskCounter() {
    const classes = useStyles();
    return (
        <div className={classes.taskCounter}>
            <Typography  variant="h6" gutterBottom>
                You have 3 tasks to complete!
            </Typography>
        </div>
    );
}

export default TaskCounter;
