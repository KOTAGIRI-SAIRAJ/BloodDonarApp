/**
 * Created by semanticbits on 20/7/17.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Header from '../components/header';
import RegistrationForm from '../components/registrarionDonar';
import Search from '../components/Search';
import Homepage from '../components/homepage';
import PostARequestN from '../components/postARequestN';
import CommentsPopup from './CommentsPopup';



const routes = (
    <Route>
        <Route path="/" component={ Header }>
            <IndexRoute component={ Homepage } ></IndexRoute>
                <Route path ="register" component={RegistrationForm}></Route>
                <Route path ="search" component={Search}></Route>
                <Route path ="postrequest" component={PostARequestN}></Route>
                <Route path ="requests" component={CommentsPopup}></Route>
        </Route>
    </Route>
)
export default routes