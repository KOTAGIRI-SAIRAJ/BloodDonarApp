/**
 * Created by semanticbits on 20/7/17.
 */
import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form';
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import {Nav, Navbar, NavItem, NavDropdown, MenuItem, Grid, Row, Col} from 'react-bootstrap'

@autobind
class Header extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let { dispatch} = this.props
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
                            <LinkContainer to='/'>
                                <NavItem eventKey={1} href="#">HomePage</NavItem>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <LinkContainer to='/register'>
                                <NavItem eventKey={2} href="#">Register</NavItem>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <LinkContainer to='/search'>
                                <NavItem eventKey={2} href="#">Search</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Grid>
                    <Row className="show-grid">
                        <Col md={10} mdPush={1}>
                            {this.props.children}
                            </Col>
                    </Row>
                </Grid>
            </div>
        )
    }

}

Header.propTypes = {
    dispatch: PropTypes.func,
    children: PropTypes.object
}
Header.defaultProps={
    dispatch :  () => {}
}
function selectProps (state) {
    console.log(state)
    return {
    }
}

export default connect(selectProps) (Header)

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
