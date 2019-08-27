import React from 'react';

import Layout from '../../components/Layout/index';
import { menus } from '../../config/menus';
import { colors } from '../../config/colors'
import useForm from 'react-hook-form';
import Input from '@material-ui/core/Input';
import FormInputs from '../../components/FormInputs';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Title, Center, Form } from './styles';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { navigate } from 'hookrouter';
const LoginContent = () => {

    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const onSubmitt = data => {
        console.log('data', data);
        navigate('/')
    }; // callback when validation pass

    return (
        <Container maxWidth="sm">

            <Title>Login</Title>
            <Form onSubmit={handleSubmit(onSubmitt)}>
                <FormInputs
                    ncols={['12', '12']}
                    properties={[
                        {
                            id: "username",
                            name: 'username',
                            label: 'Username',
                            inputRef: register,
                            required: true,
                            autoFocus: true
                        },
                        {
                            id: "password",
                            name: 'password',
                            label: 'Password',
                            inputRef: register,
                            required: true,
                            type: "password"
                        }

                    ]}
                />
                <h5>Not on Hackathon  yet? <a href="/" >Register</a></h5>
                <Button variant="contained" type='submit' >
                    submit
            </Button>
            </Form>


        </Container>
    );
}
const Login = () => <Layout
    backgroundColor=""
    withAppBar={false}
    menus={menus}
    withMenu={false}
    paddinTopMenu="5vh"
    colors={colors}
    textTopMenu=""
    logo="https://www.trzcacak.rs/myfile/full/316-3169204_angry-panda-logo.png"
    logoTxt="Panda"
    logoStyle={{ width: '10%', height: '20%' }}
    content={<LoginContent />}

/>

export default Login;
