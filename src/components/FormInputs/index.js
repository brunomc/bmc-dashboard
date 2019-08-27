import React from 'react';
import FormGroup from '@material-ui/core/FormGroup/index';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/Input';
import useForm from 'react-hook-form';
import { TextField } from '@material-ui/core';
// import { Container } from './styles';
function FieldGroup(props) {
    const { register, handleSubmit, errors } = useForm();
    return (
        <FormGroup>
            <FormControl>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required={props.required}
                    fullWidth
                    id={props.name}
                    label={props.label}
                    name={props.name}
                    autoFocus
                    type={props.type}
                    inputRef={props.inputRef}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </FormControl>
        </FormGroup>
    );
}
const FormInputs = (props) => {

    var row = [];
    for (var i = 0; i < props.ncols.length; i++) {
        row.push(

            <Grid item xs="12" sm={props.ncols[i]} lg={props.ncols[i]} xl={props.ncols[i]} key={props.properties[i].id} >
                <FieldGroup {...props.properties[i]} />
            </Grid>

        );

    }
    return (
        <Grid container spacing={3} >
            {row}
        </Grid>
    );

};

export default FormInputs;
