import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function Task({task}) {


    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
                {task.taskDescription}
            </Grid>
            <Grid item xs={12} md={2}>
                {!task.completed &&
                    <Button variant="contained" color="primary" >
                        DONE
                    </Button>
                }
            </Grid>
            <Grid item xs={12} md={2}>
                <Button variant="contained" color="primary" >
                    DELETE
                </Button>
            </Grid>
        </Grid>
    );
}

export default Task;
