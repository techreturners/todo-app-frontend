import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function TaskInput() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
                <TextField required label="Your task" defaultValue="Your task..." fullWidth />
            </Grid>
            <Grid item xs={12} md={3}>
                <Button variant="contained" color="primary">
                    ADD
                </Button>
            </Grid>
        </Grid>
    );
}

export default TaskInput;
