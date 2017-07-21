/**
 * Created by semanticbits on 20/7/17.
 */
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Header  from '../components/header'
import RegistrationForm from '../components/registrarionDonar'

const routes = (
    <Route>
        <Route path="/" component={ Header }>
            <IndexRoute component={ RegistrationForm } ></IndexRoute>
        </Route>
    </Route>
)
export default routes