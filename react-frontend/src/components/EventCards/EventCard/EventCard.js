import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import SvgIcon from '@material-ui/icons/Favorite';
import { URL } from "../../../constants/APIurl";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  media: {

    paddingTop: '100%',
    maxHeight: '100%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  icon: {
    backgroundColor: red[500],
  },
}));

var icon_size = [15, 15];

function create_icon(filename, tooltip) {
  return <Tooltip title={tooltip}>
    <img src={require(`../../../static/icons/faculties/${filename}.png`)}
    height={icon_size[0]} width={icon_size[1]}
    ></img>
  </Tooltip>;
}

export default function EventCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  var icons = [];

  if (props.hasFood) {
    icons.push(
      create_icon("event_types/icon_food", "event has food")
    )
  }
  if (props.isFree) {
    icons.push(
      create_icon("event_types/icon_free", "event is free")
    )
  }
  if (props.onCampus) {
    icons.push(
      create_icon("event_types/icon_on_campus", "event is on campus")
    )
  }


  if (props.evenType == "social") {
    icons.push(
      create_icon("event_types/icon_social", "event is social")
    );
  } else if (props.eventType == "lecture") {
    icons.push(
      create_icon("event_types/icon_lecture", "event is a lecture")
    );
  }

  if (props.faculty == "chemistry") {
    icons.push(
      create_icon("faculty/" + "chemistry", "chemistry")
    );
  } else if (props.faculty == "business") {
    icons.push(
      create_icon("faculty/" + "business", "business")
    );
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.time}
      />

       <CardMedia 
       className={classes.media}
       title="Logo"
       image={URL+props.picture}
       />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {icons}
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      </Collapse>
    </Card>
  );
}
