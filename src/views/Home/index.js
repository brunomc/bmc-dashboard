import React from 'react';

import Layout from '../../components/Layout/index';
import { menus, withMenu, textTopMenu } from '../../config/menus';
import { colors } from '../../config/colors'
import useForm from 'react-hook-form';
import Input from '@material-ui/core/Input';
import FormInputs from '../../components/FormInputs';
import Button from '@material-ui/core/Button';
const Teste = () => {

    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const onSubmitt = data => {
        console.log('data',data);
    }; // callback when validation pass

    return (
        <form onSubmit={handleSubmit(onSubmitt)}>
            <FormInputs
                ncols={['6', '6']}
                properties={[
                    {
                        id: "nome",
                        name: 'nome',
                        label: 'Nome',
                        anchor: register()
                    },
                    {
                        id: "sobrenome",
                        name: 'sobrenome',
                        label: 'Sobrenome',
                        anchor: register()
                    }
                ]}
            />
            <Button variant="contained" type='submit' >
                submit
            </Button>
        </form>
    );
}
const Home = () => <Layout
    withAppBar={true}
    menus={menus}
    withMenu
    paddinTopMenu="4vh"
    colors={colors}
    textTopMenu=""
    logo="https://www.trzcacak.rs/myfile/full/316-3169204_angry-panda-logo.png"
    logoTxt="Panda"
    logoStyle={{ width: '5%', height: '10%' }}
    content=""
/>

export default Home;
