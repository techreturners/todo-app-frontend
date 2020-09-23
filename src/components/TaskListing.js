import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function TaskListing() {

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <Typography variant="h6">Tasks to do:</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h6">Complete tasks:</Typography>
            </Grid>
        </Grid>
    );
}

export default TaskListing;
