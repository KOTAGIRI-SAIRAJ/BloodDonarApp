/**
 * Created by semanticbits on 21/7/17.
 */

import React, {Component, PropTypes} from "react";
import {reduxForm} from "redux-form";
import {Nav,NavItem,Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Panel, Row,Modal} from "react-bootstrap";
import autobind from "autobind-decorator";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { SEARCH_DATAA } from '../actions/actions'
import { BOOLEAN_POPUPS } from '../actions/actions'
import { USER_REQUEST_DATA } from '../actions/actions'
import { POPUP_CHECK_BOOLEANVALUE } from '../actions/actions'
import ReactDOM from 'react-dom'
import PostARequest from './postARequest'


export const fields=[ 'bloodGroup', 'city']
var total_Donars_data;
var boolean_Status = {show : false}

@autobind
class Search extends Component {
    SEARCH_DATA(){
        let searchVal = this.props.values;
        let tempArr =[];
        let { dispatch } =this.props
        total_Donars_data.forEach((eachRecord)=>{
            if(eachRecord.bloodGroup === searchVal.bloodGroup && eachRecord.city === searchVal.city){
                tempArr.push(eachRecord);
            }
        })
        dispatch(SEARCH_DATAA(tempArr));
    }

    rowClick(row) {
        boolean_Status = {show : true}
        let { dispatch } =this.props
        dispatch(BOOLEAN_POPUPS(row));
    }

    onCloseClick(){
        let row ={};
        boolean_Status = {show : false}
        let { dispatch } =this.props
        dispatch(BOOLEAN_POPUPS(row));
    }
    onPostARequestClick(){
        let { dispatch } =this.props
        let boolval = true;
        dispatch(POPUP_CHECK_BOOLEANVALUE(boolval));
    }
    onClosePostRequestClick(){
        let { dispatch } =this.props
        let boolval = false;
        dispatch(POPUP_CHECK_BOOLEANVALUE(boolval));
    }
    getEachRecord(Recorddata){
        console.log(Recorddata);
    }
    render() {
        var options = {
            onRowClick: this.rowClick.bind(this)
        }
    let {
        fields: { bloodGroup, city},
        SearchData,
        PostRequestBoolean,
        PersonalSearchData,
        boolean_result,
        GetThePostRequestedDate,
        resetForm,
        submitting,
        pristine, reset
    } = this.props

        var namesList = GetThePostRequestedDate.map(function(name){
            return (
                <Nav bsStyle="pills" stacked activeKey={1} >
                    <NavItem eventKey={1} href="/home">Request Posted By {name.u_emial}</NavItem>
                    <p>Requested for the Blood Group <strong>{name.u_bloodGroup}</strong></p>
                    <p> Contact <strong>+91-{name.u_phone}</strong></p>
                    <Button type="button" className="pull-right" bsStyle="success" onClick={ () => this.getEachRecord(name.u_id) }>Comment</Button>
                    <br /><hr /><br />
                </Nav>
            );
        })

        return (
            <div>
                <Form horizontal >
                    <Panel header="Search" bsStyle="primary">
                        <FormGroup >
                            <Col sm={2}>Blood Group</Col>
                            <Col sm={10}>
                                <FormControl type="text" placeholder="Blood Group" {...bloodGroup} />
                            </Col>
                        </FormGroup>
                        <FormGroup >
                            <Col sm={2}>City</Col>
                            <Col sm={10}>
                                <FormControl type="text" placeholder="City" {...city} />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button type="button" className="pull-right" bsStyle="success" bsSize="large" onClick={ () => this.SEARCH_DATA() } >
                                    Search
                                </Button>
                            </Col>
                        </FormGroup>

                    </Panel>
                    <FormGroup>
                        <BootstrapTable data={SearchData} options={options} striped hover>
                            <TableHeaderColumn isKey dataField='firstName'>First Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='lastName'>Last Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='occupation'>Occupation</TableHeaderColumn>
                            <TableHeaderColumn dataField='martial_status'>Martial Status</TableHeaderColumn>
                            <TableHeaderColumn dataField='dob'>Date Of Birth</TableHeaderColumn>
                            <TableHeaderColumn dataField='bloodGroup'>Blood Group</TableHeaderColumn>
                            <TableHeaderColumn dataField='city'>City</TableHeaderColumn>
                        </BootstrapTable>
                    </FormGroup>
                    <Modal
                        show={boolean_result.show}
                        onHide={() => this.onCloseClick() }
                        container={this}
                        aria-labelledby="contained-modal-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title">Personal Information</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <BootstrapTable data={PersonalSearchData} striped hover>
                                <TableHeaderColumn isKey dataField='p_email'>Personal Email</TableHeaderColumn>
                                <TableHeaderColumn dataField='p_phone'>Personal Contact</TableHeaderColumn>
                                <TableHeaderColumn dataField='e_email'>Emergency Email</TableHeaderColumn>
                                <TableHeaderColumn dataField='e_phone'>Emergency Contact</TableHeaderColumn>
                            </BootstrapTable>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={ () => this.onCloseClick() }>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
                <Panel header="POST A REQUEST" bsStyle="danger">
                    <p>You can post a request of which blood group you want</p>
                    <Button type="button" className="pull-right" bsStyle="primary" bsSize="large" onClick={ () => this.onPostARequestClick() }>POST A REQUEST</Button>
                    <br /><br /><br />
                    <Panel header="Requests" bsStyle="success">
                        <ul>{ namesList }</ul>
                    </Panel>

                </Panel>
                <Modal
                    show={PostRequestBoolean}
                    onHide={() => this.onClosePostRequestClick() }
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">User Information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <PostARequest />
                    </Modal.Body>
                </Modal>

            </div>
        )
    }
}

Search.propTypes = {
    SearchData: PropTypes.array
}

function selectProps (state) {
    total_Donars_data= state.allReducers.donars_data;
    return {
        SearchData: state.allReducers.search_data,
        boolean_result: boolean_Status,
        PersonalSearchData: state.allReducers.boolean_popups,
        PostRequestBoolean: state.allReducers.popup_check_booleanValue,
        GetThePostRequestedDate: state.allReducers.user_request_data
    }
}

export default reduxForm({
        form : 'Search',
        fields
    },
    selectProps
)(Search)
