import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    taskInputArea: {
      paddingTop: 20
    },
    column: {
        textAlign: "center"
    }
}));


function TaskInput() {
    const classes = useStyles();
    return (
        <Grid className={classes.taskInputArea} container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} md={6} className={classes.column}>
                <TextField required label="Your task" fullWidth />
            </Grid>
            <Grid item xs={12} md={3} className={classes.column}>
                <Button variant="contained" color="primary" >
                    ADD
                </Button>
            </Grid>
        </Grid>
    );
}

export default TaskInput;
