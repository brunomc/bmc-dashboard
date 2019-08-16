import React from 'react';

import Layout from '../../components/Layout/index';
import { menus, withMenu, textTopMenu } from '../../config/menus';
import { colors } from '../../config/colors'

const Teste = () => {
    return (
        <div>ok</div>
    );
}
const Home = () => {
    return (
        <Layout
            withAppBar={true}
            menus={menus}
            withMenu
            colors={colors}
            textTopMenu="asdsa"
            content={<Teste />}
        />
    );
}

export default Home;
