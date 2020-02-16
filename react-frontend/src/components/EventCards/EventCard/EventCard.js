import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import SvgIcon from "@material-ui/icons/Favorite";
import { URL } from "../../../constants/APIurl";
import Moment from "moment";
import { spacing } from "@material-ui/system";

import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useText01CardContentStyles } from '@mui-treasury/styles/cardContent/text01';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
import cx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '40vw',
    minWidth: '40vw',
    margin: 'auto',
    boxShadow: 'none',
    borderRadius: 0,
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
  media: {
    // height: 50,
    paddingTop: '56.25%', // 16:9
    // paddingTop: '100%',
    // maxHeight: '100%',
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  icon: {
    backgroundColor: red[500]
  },
  registerButton: {
    right: 8,
    position: 'fixed',
    borderRadius: 10,
    backgroundColor: '#ffd13a',
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    boxShadow: '10px',
    "&:hover": {
      background: "#ffff6f"
    },
  },
}));

var icon_size = [30, 30];

// Generates the html that displays an icon with its tooltip
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

export default function EventCard(props) {
  const classes = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useText01CardContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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

  handleCopy = e => {
    e.preventDefault();
    e.clipboardData.setData("text/plain", "Hello, world!");
  };

  return (
    <Card className={cx(classes.root, shadowStyles.root)}>
      <CardHeader
        title={props.title}
        titleTypographyProps={{ variant: 'h6' }}
        subheader={Moment(props.time).format("dddd MMMM Do, h:mm A")}
      />
      <CardMedia
        className={classes.media}
        title="Logo"
        image={URL + props.picture}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" noWrap="true">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="share">
          <ShareIcon />
          <ShareIcon onClick={() => this.handleCopy()} />
        </IconButton>
        {icons}
        <Button
          className={classes.registerButton}
          variant="contained" color="secondary"
          onClick={registerClickHandler}>
          Register
        </Button>
        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          style={{right:8, position: 'fixed'}}
        > */}
        {/* <ExpandMoreIcon />
        </IconButton> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
    </Card>
  );
}
