import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import routes from '../../components/routes'
import autobind from 'autobind-decorator'



import { Grid, Row, Col, Panel} from 'react-bootstrap'
import RegistrationForm from '../registrarionDonar'
import SignupPage from './signup'

import {Nav,Navbar, NavItem, NavDropdown, MenuItem, Jumbotron} from 'react-bootstrap'

@autobind
export default class App extends Component {
    /*
     * Component render()
     * see: https://facebook.github.io/react/docs/reusable-components.html#es6-classes
     */
    render() {
        return (
            <div>
                <Jumbotron>
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

/*

<Navbar inverse collapseOnSelect>
    <Navbar.Header>
        <Navbar.Brand>
            <a type="button">DashBoard</a>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
        </Nav>
        <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavItem eventKey={2} href="#">Link Right</NavItem>
        </Nav>
    </Navbar.Collapse>
</Navbar>
<RegistrationForm />*/
