import React from 'react';

import Layout from '../../components/Layout/index';
import { menus } from '../../config/menus';
import { colors } from '../../config/colors'
import useForm from 'react-hook-form';
import Input from '@material-ui/core/Input';
import FormInputs from '../../components/FormInputs';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { styles } from './styles';
const LoginContent = () => {

    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const onSubmitt = data => {
        console.log('data', data);
    }; // callback when validation pass

    return (
        <Container style={styles.container} maxWidth="sm">
            <form onSubmit={handleSubmit(onSubmitt)}>
                <FormInputs
                    ncols={['4']}
                    properties={[
                        {
                            id: "login",
                            name: 'login',
                            label: 'Login',
                            anchor: register()
                        }
                    ]}
                />
                <FormInputs
                    ncols={['4']}
                    properties={[
                        {
                            id: "password",
                            name: 'password',
                            label: 'Password',
                            anchor: register()
                        }
                    ]}
                />
                <Button variant="contained" type='submit' >
                    submit
            </Button>
            </form>
        </Container>
    );
}
const Login = () => <Layout
    withAppBar={false}
    menus={menus}
    withMenu={false}
    paddinTopMenu="5vh"
    colors={colors}
    textTopMenu=""
    logo="https://www.trzcacak.rs/myfile/full/316-3169204_angry-panda-logo.png"
    logoTxt="Panda"
    logoStyle={{ width: '10%', height: '20%' }}
    content={<LoginContent />
    }
/>

export default Login;
