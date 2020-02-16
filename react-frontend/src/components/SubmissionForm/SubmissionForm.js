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

const API_URL = "http://localhost:8000/addEvent"
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
    const [date, setDate] = React.useState('2020-02-24 10:30:10');
    const [location, setLocation] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [onCampus, setCampus] = React.useState(true);
    const [hasFood, setFood] = React.useState(true);
    const [isFree, setFree] = React.useState(true);

    const handleChangeCampus = event => {
        setCampus(event.target.value);
        console.log("campus ", onCampus)
    };
    const handleChangeFood = event => {
        setFood(event.target.value);
        console.log("food ", hasFood)
    };
    const handleChangeFree = event => {
        setFree(event.target.value);
        console.log("free ", isFree)
    };
    const handleNameChange = event => {
        setName(event.target.value);
    };
    const handlelocationChange = event => {
        setLocation(event.target.value);
    };
    const handleEmailChange = event => {
        setEmail(event.target.value);
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
        var data = new FormData()
        data.append('title', name)
        data.append('time', date)
        data.append('location', location)
        data.append('organizerEmail', email)
        data.append('registration', url)

        data.append('onCampus', (onCampus == "on") ? 1 : 0)
        data.append('hasFood', (hasFood == "on") ? 1 : 0)
        data.append('isFree', (isFree == "on") ? 1 : 0)


        // fetch(API_URL, {
        //     method: 'POST',
        //     body: data
        // })


        // window.fetch("http://localhost:8000/addEvent", {
        //     method: 'POST',
        //     headers: {
        //         // 'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         title: 'yourValue',
        //         time: '2020-02-24 10:30:10',
        //     })
        // })


        fetch(API_URL, {
            method: 'POST',
            // headers: {
            //     // 'Content-Type': 'application/json',
            // },
            body: data
        }).then(function (response) {
            return response.json();
        });
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
                            defaultValue="2020-02-24 10:30:10"
                            // className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleDateChange}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="location"
                            label="Event Location"
                            type="string"
                            fullWidth
                            onChange={handlelocationChange}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="email"
                            label="Organizer Email"
                            type="string"
                            fullWidth
                            onChange={handleEmailChange}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="registration"
                            label="Event URL"
                            type="url"
                            fullWidth
                            onChange={handleURLChange}
                        />
                        <RadioGroup row required aria-label="campus" name="campus" value={onCampus} onChange={handleChangeCampus}>
                            <FormControlLabel value="on" control={<Radio />} label="On Campus" />
                            <FormControlLabel value="off" control={<Radio />} label="Off Campus" />
                        </RadioGroup>
                        <RadioGroup row required aria-label="food" name="food" value={hasFood} onChange={handleChangeFood}>
                            <FormControlLabel value="on" control={<Radio />} label="With Food" />
                            <FormControlLabel value="off" control={<Radio />} label="Without Food" />
                        </RadioGroup>
                        <RadioGroup row required aria-label="free" name="free" value={isFree} onChange={handleChangeFree}>
                            <FormControlLabel value="on" control={<Radio />} label="Free" />
                            <FormControlLabel value="off" control={<Radio />} label="Paid" />
                        </RadioGroup>
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