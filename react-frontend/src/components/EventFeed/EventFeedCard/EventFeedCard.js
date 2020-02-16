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
import {URL} from "../../../constants/APIurl";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        maxWidth: '100%',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        height: '20vh',
        width: '20vw',
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
}));

export default function EventFeedCard(props) {
    const classes = useStyles();
    const theme = useTheme();

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
                        {props.time}
                    </Typography>
                </CardContent>
            </div>

        </Card>
    );
}