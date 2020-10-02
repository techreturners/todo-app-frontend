import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    header: {
      textAlign: "center"
    },
}));

function Header() {
    const classes = useStyles();
    return (
        <Typography className={classes.header} variant="h3">
            To Do!
        </Typography>
    );
}

export default Header;
