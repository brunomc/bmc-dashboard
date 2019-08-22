import React from 'react';

import Layout from '../../components/Layout/index';
import { menus } from '../../config/menus';
import { colors } from '../../config/colors'

const Teste = () => {
    return (
        <div><h1>Page1</h1></div>
    );
}
const Page1 = () => <Layout
    withAppBar={true}
    menus={menus}
    withMenu
    paddinTopMenu="5vh"
    colors={colors}
    textTopMenu=""
    logo="https://www.trzcacak.rs/myfile/full/316-3169204_angry-panda-logo.png"
    logoTxt="Panda"
    logoStyle={{ width: '10%', height: '20%' }}
    content={<Teste />
    }
/>

export default Page1;
