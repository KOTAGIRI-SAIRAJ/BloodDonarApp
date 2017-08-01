import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import routes from '../../components/routes'
import autobind from 'autobind-decorator'
import { POPUP_CHECK_BOOLEANVALUE } from '../.././actions/actions'
import { browserHistory } from 'react-router'

import { Grid, Row, Col, Panel} from 'react-bootstrap'
import RegistrationForm from '../registrarionDonar'
import SignupPage from './signup'
import moment from 'moment'
import momentLocalizer from 'react-widgets/lib/localizers/moment'

import {Nav,Navbar, NavItem, NavDropdown, MenuItem, Jumbotron} from 'react-bootstrap'

momentLocalizer(moment)

@autobind
export default class App extends Component {
    /*
     * Component render()
     * see: https://facebook.github.io/react/docs/reusable-components.html#es6-classes
     */

    render() {
        return (
            <div>
                <Jumbotron  >
                    <h1>Blood Donar</h1>
                </Jumbotron>
                <Router history={this.props.history}>
                    {routes}
                </Router>
            </div>
        );
    }
}
App.propTypes = {
    history: PropTypes.object.isRequired
}
