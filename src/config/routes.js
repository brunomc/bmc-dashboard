import React from 'react'
import Home from '../views/Home/index'
import Login from '../views/Login/index'
export const routes = {
    '/login': () => <Login />,
    '/': () => <Home />

}