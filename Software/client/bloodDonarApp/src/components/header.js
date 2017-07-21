/**
 * Created by semanticbits on 20/7/17.
 */
import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form';
import autobind from 'autobind-decorator'
import {Nav,Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'


@autobind
class Header extends Component {
    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a >DashBoard</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to='/' >
                                <NavItem>Register</NavItem>
                            </LinkContainer>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Link Right</NavItem>
                            <NavItem eventKey={2} href="#">Link Right</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Grid>
                    <Row className="show-grid">
                        <Col md={6}>

                            </Col>
                    </Row>
                </Grid>
            </div>
        )
    }

}

/*

<Navbar inverse collapseOnSelect>
    <Navbar.Header>
        <Navbar.Brand>
            <a >DashBoard</a>
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
</Navbar>*/
