import React, { useState } from 'react';

import Layout from '../../components/Layout/index';
import { menus } from '../../config/menus';
import { colors } from '../../config/colors'
import useForm from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import { Avatar, StyledDropZone } from './styles';
import FormInputs from '../../components/FormInputs';
import Dropzone from '../../components/Dropzone';

const ProfileContent = () => {
    const [image, setImage] = useState('');
    const { register, handleSubmit, setValue, errors } = useForm(); // initialise the hook
    const onSubmit = data => {
        console.log({ ...data, avatar: image })
    }; // callback when validation pass
    return (
        <div>
            <h1>Profile</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Dropzone reg={register} image={setImage} />
                <input type="hidden" name="avatar" ref={register} />
                <FormInputs
                    ncols={['6', '4', '4', '4', '4']}
                    properties={[
                        {
                            id: "name",
                            name: 'name',
                            label: 'Name',
                            inputRef: register
                        },
                        {
                            id: "email",
                            name: 'email',
                            label: 'Email',
                            inputRef: register
                        },
                        {
                            id: "password",
                            name: 'password',
                            label: 'Password',
                            inputRef: register
                        },
                        {
                            id: "repeatPassword",
                            name: 'repeatPassword',
                            label: 'Repeat Password',
                            inputRef: register
                        },
                        {
                            id: "expertise",
                            name: 'expertise',
                            label: 'Expertise',
                            inputRef: register
                        }
                    ]}
                />
                <Button variant="contained" type='submit' >
                    submit
            </Button>
            </form>
        </div>
    );
}
const Profile = () => <Layout
    withAppBar={true}
    menus={menus}
    withMenu
    paddinTopMenu="5vh"
    colors={colors}
    textTopMenu=""
    logo="https://www.trzcacak.rs/myfile/full/316-3169204_angry-panda-logo.png"
    logoTxt="Panda"
    logoStyle={{ width: '10%', height: '20%' }}
    content={<ProfileContent />
    }
/>

export default Profile;
