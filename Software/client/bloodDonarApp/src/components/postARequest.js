/**
 * Created by semanticbits on 25/7/17.
 */
import React, {Component, PropTypes} from "react";
import {reduxForm} from "redux-form";
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Panel, Row,Modal} from "react-bootstrap";
import autobind from "autobind-decorator";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { USER_REQUEST_DATA,POPUP_CHECK_BOOLEANVALUE } from '../actions/actions'


export const fields=[ 'u_bloodGroup', 'u_phone','u_emial','u_id']

@autobind
class PostARequest extends Component {
    User_Data(){
        let id= new Date();
        let { dispatch } =this.props
        this.props.values.u_id = id.toDateString()+' '+id.toLocaleTimeString();
        dispatch(USER_REQUEST_DATA(this.props.values))
        let boolval = false;
        dispatch(POPUP_CHECK_BOOLEANVALUE(boolval));
    }
    render() {
        let {
            fields: { u_bloodGroup, u_phone, u_emial , u_id},
            resetForm,
            submitting,
            pristine, reset
        } = this.props
        return (
            <div id="post">
                <Form horizontal >
                    <Panel header=" " bsStyle="primary">
                        <FormGroup >
                            <Col sm={2}>Blood Group</Col>
                            <Col sm={10}>
                                <FormControl type="text" placeholder="Blood Group" {...u_bloodGroup} />
                            </Col>
                        </FormGroup>
                        <Panel header="Emergency Details" bsStyle="danger">

                        <FormGroup >
                            <Col sm={2}>Email</Col>
                            <Col sm={10}>
                                <FormControl type="text" placeholder="Enter the Email-Id" {...u_emial} />
                            </Col>
                        </FormGroup>
                        <FormGroup >
                            <Col sm={2}>Contact</Col>
                            <Col sm={10}>
                                <FormControl type="number" placeholder="Enter the Mobile Number" {...u_phone} />
                            </Col>
                        </FormGroup>
                        </Panel>
                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button type="button" className="pull-right" bsStyle="success" bsSize="large" onClick={ () => this.User_Data() }>
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
        form : 'PostARequest',
        fields
    }
)(PostARequest)

