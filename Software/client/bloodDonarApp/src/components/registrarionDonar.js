/**
 * Created by semanticbits on 19/7/17.
 */
import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form';
import autobind from 'autobind-decorator'
import { push } from 'react-router-redux'
import { DateTimePicker, Calendar } from 'react-widgets'
import moment from 'moment'
import { Grid, Row, Col ,Panel ,Form ,FormGroup,ControlLabel,Button,FormControl,Radio,Checkbox } from 'react-bootstrap'
import {Nav,Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import { NEW_DONAR_REGISTERED_DATA, SEARCH_DATA } from '../actions/actions'



export const fields=[ 'Id','firstName', 'lastName', 'occupation','martial_status','dob','p_email','p_phone','e_email','e_phone','bloodGroup','city','recent_donar']



@autobind
class RegistrationForm extends Component {

    NEW_DONAR_REGISTERED_DATA(){
        let id= new Date();
        let { dispatch } =this.props
        this.props.values.recent_donar = 'NO'
        this.props.values.Id = id.toDateString()+' '+id.toLocaleTimeString();
        dispatch(NEW_DONAR_REGISTERED_DATA(this.props.values))
        dispatch(SEARCH_DATA(this.props.values))
        this.props.dispatch(push('/search'))
    }

    handleStartDate(value) {
        this.handleChange( 'checkInDate', value )
        console.log('handleStartDate');
        console.log('handleStartDate');
        console.log('handleStartDate');
    }
    handleChange (field, value) {
        console.log("-----------------");
        console.log(field);
        console.log(value);
        console.log("-----------------");
    }
    render() {
        let { checkInDate, checkOutDate } = this.props
        let datePickerAttrs = {
            defaultValue: null,
            time: true,
            style: { width: '100%' }
        }
        const { fields: { firstName, lastName, occupation, martial_status, dob, p_email, p_phone, e_email, e_phone, bloodGroup, city },
            submitting,
            pristine, reset
        } = this.props;
        return (
            <div>
                <Panel header="Registration Page" bsStyle="primary">
                    <Form horizontal >
                        <Panel header="Personal Details"  bsStyle="success">
                            <FormGroup >
                                <Col componentClass={ControlLabel} sm={2}>First Name</Col>
                                <Col sm={4}>
                                    <FormControl type="text" placeholder="First Name" {...firstName}/>
                                </Col>
                                <Col componentClass={ControlLabel} sm={2}>Last Name</Col>
                                <Col sm={4}>
                                    <FormControl type="text" placeholder="Last Name" {...lastName}/>
                                </Col>
                            </FormGroup>
                            <FormGroup >
                                <Col componentClass={ControlLabel} sm={2}>Occupation</Col>
                                <Col sm={4}>
                                    <FormControl type="text" placeholder="Occupation" {...occupation}/>
                                </Col>
                                <Col componentClass={ControlLabel} sm={2}>Date Of Birth</Col>
                                <Col sm={4}>
                                    <FormControl type="date" placeholder="DOB" {...dob}/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Calendar value={checkInDate} placeholder='Check in date'
                                          onChange={(value) => this.handleStartDate( value )} ></Calendar>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>Blood Group</Col>
                                <Col sm={4}>
                                    <FormControl type="text" placeholder="Blood Group" {...bloodGroup}/>
                                </Col>
                                <Col componentClass={ControlLabel} sm={2}>City</Col>
                                <Col sm={4}>
                                    <FormControl type="text" placeholder="City" {...city}/>
                                </Col>
                            </FormGroup>
                            <FormGroup >
                                <Col componentClass={ControlLabel} sm={2}>Martial Status</Col>
                                <Radio name="radioGroup" inline {...martial_status } value="Married" checked={martial_status.value === 'Married'}>
                                    Married
                                </Radio>
                                {' '}
                                <Radio name="radioGroup" inline {...martial_status } value="Unmarried" checked={martial_status.value === 'Unmarried'}>
                                    Unmarried
                                </Radio>
                            </FormGroup>
                        </Panel>

                        <Panel header="Contact details"  bsStyle="info">
                            <Col sm={6}>
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
                            </Col>
                            <Col sm={6}>
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
                            </Col>
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
