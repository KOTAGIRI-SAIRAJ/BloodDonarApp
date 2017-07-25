/**
 * Created by semanticbits on 19/7/17.
 */
import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form';
import autobind from 'autobind-decorator'
import { Grid, Row, Col ,Panel ,Form ,FormGroup,ControlLabel,Button,FormControl,Radio,Checkbox } from 'react-bootstrap'
import {Nav,Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import { NEW_DONAR_REGISTERED_DATA, SEARCH_DATA } from '../actions/actions'

export const fields=[ 'Id','firstName', 'lastName', 'occupation','martial_status','dob','p_email','p_phone','e_email','e_phone','bloodGroup','city']

@autobind
class RegistrationForm extends Component {

    NEW_DONAR_REGISTERED_DATA(){
        let { dispatch } =this.props
        console.log('=====================')
        console.log(this.props.values)
        dispatch(NEW_DONAR_REGISTERED_DATA(this.props.values))
        dispatch(SEARCH_DATA(this.props.values))
    }
    render() {
        const { fields: { firstName, lastName, occupation, martial_status, dob, p_email, p_phone, e_email, e_phone, bloodGroup, city },
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
                                <Col componentClass={ControlLabel} sm={2}>Martial Status</Col>
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
                            <FormGroup controlId="bloodGroup">
                                <Col componentClass={ControlLabel} sm={2}>Blood Group</Col>
                                <Col sm={10}>
                                    <FormControl type="text" placeholder="bloodGroup" {...bloodGroup}/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="city">
                                <Col componentClass={ControlLabel} sm={2}>City</Col>
                                <Col sm={10}>
                                    <FormControl type="text" placeholder="city" {...city}/>
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
                                <Button type="button" className="pull-right" bsStyle="success" bsSize="large"  disabled={pristine || submitting} onClick={ () => this.NEW_DONAR_REGISTERED_DATA() }>
                                    Register
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Panel>
            </div>
        )
    }

}

RegistrationForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
 }

export default reduxForm({
    form: 'RegistrationForm',
    fields,
})(RegistrationForm)
