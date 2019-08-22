import React from 'react';
import FormGroup from '@material-ui/core/FormGroup/index';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/Input';
import useForm from 'react-hook-form';
// import { Container } from './styles';
function FieldGroup(props) {
    const { register, handleSubmit, errors } = useForm();
    console.log(props.anchor)
    return (
        <FormGroup>
            <FormControl>
                <InputLabel>{props.label}</InputLabel>
                <Input id={props.id} name={props.name} aria-describedby={props.label} ref={props.anchor} />
            </FormControl>
        </FormGroup>
    );
}
const FormInputs = (props) => {
    var row = [];
    for (var i = 0; i < props.ncols.length; i++) {
        row.push(

            <Grid item xs={props.ncols[i]} key={props.properties[i].id} >
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
