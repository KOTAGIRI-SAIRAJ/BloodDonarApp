/**
 * Created by semanticbits on 25/7/17.
 */
import React, {Component} from "react";
import autobind from "autobind-decorator";
import { reduxForm } from "redux-form";
import moment from 'moment'
import {Checkbox,Nav,NavItem,Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Panel, Row,Modal} from "react-bootstrap";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { USER_REQUEST_DATA,POPUP_CHECK_BOOLEANVALUE,POST_REQUEST_BOOLEAN,POST_REQUEST_ROW_CLICK_RECORD } from '../actions/actions'
import CommentsPopup from './CommentsPopup'
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
    }

    rowClick(row) {
        let { dispatch } =this.props
        let boolval = true;
        dispatch(POST_REQUEST_BOOLEAN(boolval));
        dispatch(POST_REQUEST_ROW_CLICK_RECORD(row));
    }

    onClosePostRequestClick(){
        let { dispatch } =this.props
        let boolval = false;
        dispatch(POST_REQUEST_BOOLEAN(boolval));
    }

    render() {
        let {
            fields: { u_bloodGroup, u_phone, u_emial , u_id,u_firstName,u_lastName,u_dob,u_city, u_age , u_comments ,u_individualCommment},
            UserData,
            postRequestBooleanNew
        } = this.props
        var options = {
            onRowClick: this.rowClick.bind(this),
            noDataText: 'No Posts...',
            /*searchPosition: 'left'*/
        }

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
                <Panel header="All Requests" bsStyle="primary">
                    <BootstrapTable data={UserData} options={options} search striped hover condensed>
                        <TableHeaderColumn dataField='u_firstName'>First Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='u_lastName'>Last Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='u_bloodGroup'>Blood Group</TableHeaderColumn>
                        <TableHeaderColumn dataField='u_city'>City</TableHeaderColumn>
                        <TableHeaderColumn isKey={true} dataField='u_emial'>Email-Id</TableHeaderColumn>
                        <TableHeaderColumn dataField='u_phone'>Phone</TableHeaderColumn>
                        <TableHeaderColumn dataField='u_age'>Age</TableHeaderColumn>
                        <TableHeaderColumn dataField='u_dob'>DOB</TableHeaderColumn>
                    </BootstrapTable>
                </Panel>
                <Modal
                    show={postRequestBooleanNew}
                    onHide={() => this.onClosePostRequestClick() }
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">Comments</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CommentsPopup />
                    </Modal.Body>
                </Modal>

            </div>
        )
    }
}

function selectProps (state) {
    return {
        UserData: state.allReducers.user_request_data,
        postRequestBooleanNew: state.allReducers.post_request_boolean
    }
}


export default reduxForm({
        form : 'PostARequestN',
        fields
    },
    selectProps
)(PostARequestN)
