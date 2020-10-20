import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

import "./Header.css";

const useStyles = makeStyles(() => ({
    header: {
        textAlign: "center"
    },
}));

function Header() {
    const classes = useStyles();
    return (
        <div className="header">
            <FontAwesomeIcon className="icon--calendar" icon={ faCalendarCheck }/>
            <Typography className={classes.header} variant="h3">
                To Do!
            </Typography>
        </div>         
    );
}

export default Header;
