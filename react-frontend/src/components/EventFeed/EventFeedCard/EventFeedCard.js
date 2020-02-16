import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { URL } from "../../../constants/APIurl";
import Moment from "moment";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        maxWidth: '100%',
        boxShadow: '1px 1px 5px',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        minHeight: '20vh',
        minWidth: '20vw',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    registerButton: {
        // right: 8,
        // position: 'fixed',
        borderRadius: 10,
        backgroundColor: '#ffd13a',
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        "&:hover": {
          background: "#ffff6f"
        },
      },
}));

export default function EventFeedCard(props) {
    const classes = useStyles();
    const theme = useTheme();
    const registerClickHandler = () => {
        var win = window.open(props.registration, '_blank');
        win.focus();
      }
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                title="Logo"
                image={URL + props.picture}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="subtitle1">
                        {props.title}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        {Moment(props.time).format("dddd MMMM Do, h:mm A")}
                    </Typography>
                    <Typography variant="subtitle2" color="textPrimary">
                        {props.description}
                    </Typography>
                    <Button
                        className={classes.registerButton}
                        variant="contained" color="secondary"
                        onClick={registerClickHandler}>
                        Register
                    </Button>
                </CardContent>
            </div>

        </Card>
    );
}