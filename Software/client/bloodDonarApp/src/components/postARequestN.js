/**
 * Created by semanticbits on 25/7/17.
 */
import React, {Component} from "react";
import autobind from "autobind-decorator";
import { reduxForm } from "redux-form";
import moment from 'moment'
import {Checkbox,Nav,NavItem,Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Panel, Row,Modal} from "react-bootstrap";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { push } from 'react-router-redux'
import { USER_REQUEST_DATA,POPUP_CHECK_BOOLEANVALUE,POST_REQUEST_BOOLEAN,POST_REQUEST_ROW_CLICK_RECORD } from '../actions/actions'

export const fields=['u_firstName', 'u_lastName', 'u_bloodGroup', 'u_phone', 'u_emial','u_age', 'u_id','u_dob','u_city','u_comments','u_individualCommment']

@autobind
class PostARequestN extends Component {
    constructor(props) { super(props);}
    User_Data(){
        let id= new Date();
        let { dispatch} =this.props
        this.props.values.u_id = moment().format();
        dispatch(USER_REQUEST_DATA(this.props.values))
        let boolval = false;
        dispatch(POPUP_CHECK_BOOLEANVALUE(boolval));
        this.props.dispatch(push('/requests'))
    }

    render() {
        let {
            fields: { u_bloodGroup, u_phone, u_emial , u_id,u_firstName,u_lastName,u_dob,u_city, u_age , u_comments ,u_individualCommment},

        } = this.props


        return (
            <div>
                <Form horizontal >
                    <Panel bsStyle="primary">
                        <FormGroup >
                            <Col componentClass={ControlLabel} sm={2}>First Name</Col>
                            <Col sm={4}>
                                <FormControl type="text" placeholder="First Name" {...u_firstName}/>
                            </Col>
                            <Col componentClass={ControlLabel} sm={2}>Last Name</Col>
                            <Col sm={4}>
                                <FormControl type="text" placeholder="Last Name" {...u_lastName}/>
                            </Col>
                        </FormGroup>
                        <FormGroup >
                            <Col componentClass={ControlLabel} sm={2}>Blood Group</Col>
                            <Col sm={4}>
                                <FormControl type="text" placeholder="Blood Group" {...u_bloodGroup}/>
                            </Col>
                            <Col componentClass={ControlLabel} sm={2}>City</Col>
                            <Col sm={4}>
                                <FormControl type="text" placeholder="City" {...u_city}/>
                            </Col>
                        </FormGroup>
                        <FormGroup >
                            <Col componentClass={ControlLabel} sm={2}>Email-Id</Col>
                            <Col sm={4}>
                                <FormControl type="email" placeholder="Email-Id" {...u_emial}/>
                            </Col>
                            <Col componentClass={ControlLabel} sm={2}>Contact</Col>
                            <Col sm={4}>
                                <FormControl type="number" placeholder="Contact" {...u_phone}/>
                            </Col>
                        </FormGroup>
                        <FormGroup >
                            <Col componentClass={ControlLabel} sm={2}>Age</Col>
                            <Col sm={4}>
                                <FormControl type="number" placeholder="Age" {...u_age}/>
                            </Col>
                            <Col componentClass={ControlLabel} sm={2}>DOB</Col>
                            <Col sm={4}>
                                <FormControl type="date" placeholder="DOB" {...u_dob}/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button type="button" className="pull-right" bsStyle="success"  onClick={ () => this.User_Data() }>
                                    SUBMIT
                                </Button>
                            </Col>
                        </FormGroup>
                    </Panel>
                </Form>
            </div>
        )
    }
}



export default reduxForm({
        form : 'PostARequestN',
        fields
    },
)(PostARequestN)
