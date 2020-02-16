import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import axios from 'axios';
const API_URL = "http://204.209.76.234:8000/addEvent"
const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function FormDialog() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [url, setURL] = React.useState(null);
    const [name, setName] = React.useState('');
    const [date, setDate] = React.useState('');
    const [onCampus, setCampus] = React.useState(true);

    const handleChange = event => {
        setCampus(event.target.value);
    };
    const handleNameChange = event => {
        setName(event.target.value);
    };
    const handleURLChange = event => {
        setURL(event.target.value);
    };
    const handleDateChange = event => {
        setDate(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        handleSubmit();
        setOpen(false);
    };

    const handleSubmit = event => {
        console.log("submitting");
        const newEvent = {
            title: { name },
            time: { date },
            onCampus: { onCampus },
            registration: { url },
        };
        axios.post(API_URL, { newEvent })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{ bottom: 16, right: 16, position: 'absolute' }}>
                Submit An Event
      </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <form onSubmit={handleSubmit}>
                    <DialogTitle id="form-dialog-title">Submit An Event</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Already have an Eventbrite URL?
          </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="EventbriteUrl"
                            label="Eventbrite URL"
                            type="url"
                            fullWidth
                            onChange={handleURLChange}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="eventName"
                            label="Event Name"
                            type="string"
                            fullWidth
                            onChange={handleNameChange}
                        />
                        <TextField
                            required
                            fullWidth
                            id="datetime-local"
                            label="Event Date/Time"
                            type="datetime-local"
                            defaultValue="2020-02-24T10:30"
                            // className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleDateChange}
                        />
                        <RadioGroup required aria-label="location" name="location" value={onCampus} onChange={handleChange}>
                            <FormControlLabel value="on" control={<Radio />} label="On Campus" />
                            <FormControlLabel value="off" control={<Radio />} label="Off Campus" />
                        </RadioGroup>
                        <TextField
                            required
                            margin="dense"
                            id="eventLocation"
                            label="Event Location"
                            type="string"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
          </Button>
                        <Button type="submit" onClick={handleClose} color="primary">
                            Submit
          </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}