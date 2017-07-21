/**
 * Created by semanticbits on 19/7/17.
 */

import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form';
import autobind from 'autobind-decorator'
import { Grid, Row, Col ,Panel ,Form ,FormGroup,ControlLabel,Button,FormControl,Radio,Checkbox } from 'react-bootstrap'
import {Nav,Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
export const fields=[ 'firstName', 'lastName', 'occupation','martial_status','dob','p_email','p_phone','e_email','e_phone']

@autobind
class RegistrationForm extends Component {
    render() {
        const { fields: { firstName, lastName, occupation, martial_status, dob, p_email, p_phone, e_email, e_phone },
            handleSubmit,
            resetForm,
            submitting,
            pristine, reset
        } = this.props;
        return (
            <div>
                <Panel header="Registration Page" bsStyle="primary">
                    <Form horizontal >
                        <Panel header="Personal Details"  bsStyle="success">
                            <FormGroup controlId="firstName">
                                <Col componentClass={ControlLabel} sm={2}>First Name</Col>
                                <Col sm={10}>
                                    <FormControl type="text" placeholder="First Name" {...firstName}/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="lastName">
                                <Col componentClass={ControlLabel} sm={2}>Last Name</Col>
                                <Col sm={10}>
                                    <FormControl type="text" placeholder="Last Name" {...lastName}/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="occupation">
                                <Col componentClass={ControlLabel} sm={2}>Occupation</Col>
                                <Col sm={10}>
                                    <FormControl type="text" placeholder="Occupation" {...occupation}/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="martial_status">
                                <Col componentClass={ControlLabel} sm={3}>Martial Status</Col>
                                <Radio name="radioGroup" inline {...martial_status } value="Married" checked={martial_status.value === 'Married'}>
                                    Married
                                </Radio>
                                {' '}
                                <Radio name="radioGroup" inline {...martial_status } value="Unmarried" checked={martial_status.value === 'Unmarried'}>
                                    Unmarried
                                </Radio>
                            </FormGroup>
                            <FormGroup controlId="dob">
                                <Col componentClass={ControlLabel} sm={2}>Date Of Birth</Col>
                                <Col sm={10}>
                                    <FormControl type="date" placeholder="DOB" {...dob}/>
                                </Col>
                            </FormGroup>
                        </Panel>
                        <Panel header="Contact details"  bsStyle="info">
                            <Panel header="Personal contact details"  bsStyle="warning">
                                <FormGroup controlId="p_email">
                                    <Col componentClass={ControlLabel} sm={2}>Email</Col>
                                    <Col sm={10}>
                                        <FormControl type="email" placeholder="Enter the Email-Id" {...p_email}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="p_phone">
                                    <Col componentClass={ControlLabel} sm={2}>Mobile Number</Col>
                                    <Col sm={10}>
                                        <FormControl type="number" placeholder="Mobile Number" {...p_phone}/>
                                    </Col>
                                </FormGroup>
                            </Panel>
                            <Panel header="Emergency contact details"  bsStyle="danger">
                                <FormGroup controlId="e_email">
                                    <Col componentClass={ControlLabel} sm={2}>Email</Col>
                                    <Col sm={10}>
                                        <FormControl type="email" placeholder="Enter the Email-Id" {...e_email}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="e_phone">
                                    <Col componentClass={ControlLabel} sm={2}>Mobile Number</Col>
                                    <Col sm={10}>
                                        <FormControl type="number" placeholder="Mobile Number" {...e_phone}/>
                                    </Col>
                                </FormGroup>
                            </Panel>
                        </Panel>
                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button type="button" className="pull-right" bsStyle="success" bsSize="large"  disabled={pristine || submitting} onClick={ () => this.getFormData() }>
                                    Register
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Panel>
            </div>
        )
    }
    getFormData(){
        console.log(this.props);
    }
}

 RegistrationForm.propTypes = {
    fields: PropTypes.array.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
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
 </Navbar>
 */
export default reduxForm({
    form: 'RegistrationForm',
    fields,
})(RegistrationForm)
