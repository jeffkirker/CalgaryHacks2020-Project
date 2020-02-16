import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel'
import Switch from '@material-ui/core/Switch';

const Filter = () => {
    const [state, setState] = React.useState({
        hasFood: true,
        isFree: true,
        onCampus: true,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Apply Filters</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={<Switch checked={state.hasFood} onChange={handleChange('hasFood')} value="hasFood" />}
                    label="Free Food"
                />
                <FormControlLabel
                    control={<Switch checked={state.isFree} onChange={handleChange('isFree')} value="isFree" />}
                    label="Free Event"
                />
                <FormControlLabel
                    control={
                        <Switch checked={state.onCampus} onChange={handleChange('onCampus')} value="onCampus" />
                    }
                    label="On Campus Event"
                />
            </FormGroup>

        </FormControl>
    );
}

export default Filter
