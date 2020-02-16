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
import Tooltip from "@material-ui/core/Tooltip";
import ShareIcon from "@material-ui/icons/Share";
import CardActions from "@material-ui/core/CardActions";

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
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#ffd13a',
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        "&:hover": {
            background: "#ffff6f"
        },
    },
    actions: {
        display: "flex",
        justifyContent: "space-between"
    }
}));

var icon_size = [30, 30];
function create_icon(filename, tooltip) {
    return (
        <Tooltip title={tooltip}>
            <img
                src={require(`../../../static/icons/${filename}.png`)}
                height={icon_size[0]}
                width={icon_size[1]}
            ></img>
        </Tooltip>
    );
}

export default function EventFeedCard(props) {
    const classes = useStyles();
    const theme = useTheme();
    const registerClickHandler = () => {
        var win = window.open(props.registration, '_blank');
        win.focus();
    }

    var icons = [];

    // Add hard coded icons
    if (props.hasFood) {
        icons.push(create_icon("event_types/icon_food", "Event has food"));
    }
    if (props.isFree) {
        icons.push(create_icon("event_types/icon_free", "Event is free"));
    }
    if (props.onCampus) {
        icons.push(create_icon("event_types/icon_on_campus", "Event is on campus"));
    }

    // Add appropriate eventType icon
    if (props.eventType == "social") {
        icons.push(create_icon("event_types/icon_social", "Social event"));
    } else if (props.eventType == "lecture") {
        icons.push(create_icon("event_types/icon_lecture", "Lecture event"));
    } else if (props.eventType == "performance") {
        icons.push(create_icon("event_types/icon_performance", "Performance event"));
    }

    // Add appropriate faculty icon
    if (props.faculty == "chemistry") {
        icons.push(create_icon("faculties/icon_chemistry", "Faculty of chemistry"));
    } else if (props.faculty == "business") {
        icons.push(create_icon("faculties/" + "icon_business", "Faculty of business"));
    } else if (props.faculty == "computer_science") {
        icons.push(create_icon("faculties/" + "icon_computer_science",
            "Faculty of computer_science"
        )
        );
    } else if (props.faculty == "ecology") {
        icons.push(create_icon("faculties/" + "icon_ecology", "Faculty of ecology"));
    } else if (props.faculty == "education") {
        icons.push(create_icon("faculties/" + "icon_education", "Faculty of education"));
    } else if (props.faculty == "engineering") {
        icons.push(
            create_icon("faculties/" + "icon_engineering", "Faculty of engineering")
        );
    } else if (props.faculty == "law") {
        icons.push(create_icon("faculties/" + "icon_law", "Faculty of law"));
    } else if (props.faculty == "linguistics") {
        icons.push(
            create_icon("faculties/" + "icon_linguistics", "Faculty of linguistics")
        );
    } else if (props.faculty == "literature") {
        icons.push(create_icon("faculties/" + "icon_literature", "Faculty of literature"));
    } else if (props.faculty == "mathematics") {
        icons.push(
            create_icon("faculties/" + "icon_mathematics", "Faculty of mathematics")
        );
    } else if (props.faculty == "medicine") {
        icons.push(create_icon("faculties/" + "icon_medicine", "Faculty of medicine"));
    } else if (props.faculty == "music") {
        icons.push(create_icon("faculties/" + "icon_music", "Faculty of music"));
    } else if (props.faculty == "nursing") {
        icons.push(create_icon("faculties/" + "icon_nursing", "Faculty of nursing"));
    } else if (props.faculty == "pharmacy") {
        icons.push(create_icon("faculties/" + "picon_harmacy", "Faculty of pharmacy"));
    } else if (props.faculty == "physics") {
        icons.push(create_icon("faculties/" + "icon_physics", "Faculty of physics"));
    } else if (props.faculty == "veterinary_medicine") {
        icons.push(
            create_icon(
                "faculties/" + "icon_veterinary_medicine",
                "Faculty of veterinary_medicine"
            )
        );
    }


    return (
        <Card className={classes.root} onClick={registerClickHandler}>
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
                    <CardActions>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        {icons}
                    </CardActions>
                </CardContent>
            </div>
        </Card>
    );
}