import React from 'react'
import Home from '../views/Home/index'
import Login from '../views/Login/index'
import Profile from '../views/Profile/index'
import Hackathons from '../views/Hackathons/index'
import Squads from '../views/Squads/index'
import Awards from '../views/Awards/index'
import Terms from '../views/Terms/index'
import Configurations from '../views/Configurations/index'

export const routes = {
    '/login': () => <Login />,
    '/': () => <Home />,
    '/profile': () => <Profile />,
    '/hackathons': () => <Hackathons />,
    '/squads': () => <Squads />,
    '/awards': () => <Awards />,
    '/terms': () => <Terms />,
    '/configurations': () => <Configurations />



}