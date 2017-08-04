/**
 * Created by semanticbits on 21/7/17.
 */

import React, {Component, PropTypes} from "react";
import {reduxForm} from "redux-form";
import {Button,Row, Col, ControlLabel, Form, Checkbox,FormControl, FormGroup, Modal, Nav, NavItem, Panel} from "react-bootstrap";
import autobind from "autobind-decorator";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import {
    BOOLEAN_POPUPS,
    COMMENT_BOOLEAN_CHECK,
    POPUP_CHECK_BOOLEANVALUE,
    RECENT_DONAR,
    SEARCH_DATAA,
    TEMP_UID,
    UPDATE_DONAR_REGISTERED_DATA
} from "../actions/actions";
import moment from "moment";
import {ReactSelectize, SimpleSelect, MultiSelect} from 'react-selectize';



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
            let tempCurrDate = moment().format();
            //TODO: make it globalized...
            tempCurrDate= moment(tempCurrDate,'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss')
            if(eachRecord.bloodGroup === searchVal.bloodGroup && eachRecord.city === searchVal.city && eachRecord.recent_donar === 'NO'  ){
                tempArr.push(eachRecord);
            }
        })
        dispatch(SEARCH_DATAA(tempArr));
    }

    SEARCH_DATA_WITHOUT_RECENTDONARS(){
        let tempArr =[];
        let { dispatch } =this.props
        let tempCurrDate = moment().format();
        tempCurrDate= moment(tempCurrDate,'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss')
        total_Donars_data.forEach((eachRecord)=>{
            if((eachRecord.end_date === tempCurrDate) || (tempCurrDate > eachRecord.end_date) ){
                eachRecord.recent_donar = 'NO'
            }
            if(eachRecord.recent_donar === 'NO' ){
                tempArr.push(eachRecord);
            }
        })
        dispatch(SEARCH_DATAA(tempArr));
    }

    rowClick(row) {
        boolean_Status = {show : true}
        let { dispatch } =this.props
        if(row.recent_donar === 'NO'){
            let bo = false
            dispatch(RECENT_DONAR(bo))
        }else{
            let bo = true
            dispatch(RECENT_DONAR(bo))
        }
        let temparr =[]
        temparr.push(row)
        dispatch(BOOLEAN_POPUPS(temparr));
        this.SEARCH_DATA_WITHOUT_RECENTDONARS();
    }

    newrowClick(row){
        let { dispatch } =this.props
        let bool = true;
        dispatch(TEMP_UID(row.u_id));
        dispatch(COMMENT_BOOLEAN_CHECK(bool));
        this.SEARCH_DATA_WITHOUT_RECENTDONARS();
    }

    onCloseClick(){
        let row ={};
        boolean_Status = {show : false}
        let { dispatch } =this.props
        let data =[];
        dispatch(BOOLEAN_POPUPS(data));
        this.SEARCH_DATA_WITHOUT_RECENTDONARS();
    }

    onPostARequestClick(){
        let { dispatch } =this.props
        let boolval = true;
        dispatch(POPUP_CHECK_BOOLEANVALUE(boolval));
        this.SEARCH_DATA_WITHOUT_RECENTDONARS()
    }

    onClosePostRequestClick(){
        let { dispatch } =this.props
        let boolval = false;
        dispatch(POPUP_CHECK_BOOLEANVALUE(boolval));
        this.SEARCH_DATA_WITHOUT_RECENTDONARS()
    }

    onCloseCommentClick(){
        let { dispatch } =this.props
        let bool = false;
        dispatch(COMMENT_BOOLEAN_CHECK(bool));
        this.SEARCH_DATA_WITHOUT_RECENTDONARS();
    }

    onChangeCallMethod(){
        let tempTotalRegisterdDonars = this.props.TotalRegisterdDonars;
        let tempPersonalSearchData = this.props.PersonalSearchData[0];
        let { dispatch } =this.props
        console.log('onchage data')
        if(this.props.recentDonarStatus) {
            let bool = false;
            tempTotalRegisterdDonars.forEach((eachRecord)=>{
                if(eachRecord.Id === tempPersonalSearchData .Id){
                    eachRecord.current_date = undefined;
                    eachRecord.end_date = undefined;
                    eachRecord.recent_donar = "NO";
                }
            })
            dispatch(UPDATE_DONAR_REGISTERED_DATA(tempTotalRegisterdDonars))
            dispatch(RECENT_DONAR(bool));
        }else{
            let bool = true;
            tempTotalRegisterdDonars.forEach((eachRecord)=>{
                if(eachRecord.Id === tempPersonalSearchData .Id){
                    let tempCurrDate = moment().format();
                    eachRecord.current_date  = moment(tempCurrDate,'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss')
                    let newCurrentDate = moment(eachRecord.current_date).add(50, 'seconds')
                    eachRecord.end_date= moment(newCurrentDate,'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss')
                    eachRecord.recent_donar = "YES";
                }
            })
            dispatch(UPDATE_DONAR_REGISTERED_DATA(tempTotalRegisterdDonars))
            dispatch(RECENT_DONAR(bool));
        }
    }
    getTheBloodGroup(res){
        this.props.values.bloodGroup = res.value;
    }
    getTheCityName(res){
        this.props.values.city = res.value;
    }
    render() {
        var newoptions = {
            onRowClick: this.newrowClick.bind(this)
        }
        let {
            fields: { bloodGroup, city},
            SearchData,
            PostRequestBoolean,
            PersonalSearchData,
            boolean_result,
            GetThePostRequestedDate,
            commentbooleanvalue,
            totalComments,
            recentDonarStatus,
            TotalRegisterdDonars,
            resetForm,
            submitting,
            pristine, reset
        } = this.props
        var options = {
            sizePerPage: 5,
            sizePerPageList: [ {
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {
                text: 'All', value: SearchData.length
            } ],
            onRowClick: this.rowClick.bind(this)
        }
        let cities = [];
        let bloodGroups =[];
        TotalRegisterdDonars.forEach((eachRecord)=>{
            bloodGroups.push(eachRecord.bloodGroup);
            cities.push(eachRecord.city);
        })
        let storeComments;
        var commentForAPerson = function gettingrecords(id) {
            storeComments = [];
            if(totalComments.length === 0){
                console.log('no Records');
            }else{
                totalComments.forEach((eachRecord)=>{
                    if(eachRecord.u_c_id === id){
                        storeComments.push(eachRecord);
                    }
                })
            }
        }
        var namesList = GetThePostRequestedDate.map(function(name){
            return (
                <Nav bsStyle="pills" stacked activeKey={1} >
                    <NavItem eventKey={1} href="/home">Request Posted By {name.u_emial}</NavItem>
                    <p>Requested for the Blood Group <strong>{name.u_bloodGroup}</strong></p>
                    <p> Contact <strong>+91-{name.u_phone}</strong></p>

                    <br />
                    { commentForAPerson(name.u_id) }
                    <BootstrapTable data={storeComments} striped hover>
                        <TableHeaderColumn isKey dataField='comment'>COMMENTS</TableHeaderColumn>
                    </BootstrapTable>
                    <hr />
                    <br />
                </Nav>
            );
        })
        var newList = function gettingdata() {
            return (
                <BootstrapTable data={GetThePostRequestedDate} options={ newoptions } striped hover>
                    <TableHeaderColumn isKey dataField='u_emial'>List Of Posted Requests</TableHeaderColumn>
                </BootstrapTable>
            );
        }

        return (
            <div >
                <Form  >
                    {/*<MultiSelect
                        placeholder = "Select fruits"
                        options = {["apple", "mango", "orange", "banana"].map(
                            fruit => ({label: fruit, value: fruit})
                        )}
                        onValuesChange = {(value) => this.getTheBloodGroup(value) }
                    />*/}
                    <Panel header="Search" bsStyle="primary">
                        <FormGroup >
                            <Row className="show-grid">
                            <Col sm={5}>
                                <SimpleSelect
                                placeholder="Select a Blood Group"
                                options = {bloodGroups.map(
                                    eachbloodGroup => ({label: eachbloodGroup, value: eachbloodGroup})
                                )} onValueChange={(value) => this.getTheBloodGroup(value) }/>
                            </Col>
                            <Col sm={4} md={6}>
                                <SimpleSelect
                                placeholder="Search for a City Name"
                                options = {cities.map(
                                    eachCity=> ({label: eachCity, value: eachCity})
                                )} onValueChange={(value) => this.getTheCityName(value) }/></Col>
                            </Row>
                        </FormGroup>
                        <br /><br />
                        <FormGroup>
                            <Col smOffset={2} sm={9}>
                                <Button type="button" className="pull-right" bsStyle="success" onClick={ () => this.SEARCH_DATA() } >
                                    Search
                                </Button>
                            </Col>
                        </FormGroup>

                    </Panel>
                    <FormGroup>
                        <BootstrapTable data={SearchData} pagination options={options} striped hover >
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
                            <br />
                            <div>
                                <BootstrapTable data={PersonalSearchData} striped hover>
                                    <TableHeaderColumn isKey dataField='p_email'>Personal Email</TableHeaderColumn>
                                    <TableHeaderColumn dataField='p_phone'>Personal Contact</TableHeaderColumn>
                                    <TableHeaderColumn dataField='e_email'>Emergency Email</TableHeaderColumn>
                                    <TableHeaderColumn dataField='e_phone'>Emergency Contact</TableHeaderColumn>
                                </BootstrapTable>
                                <br />
                                <label>
                                    <Checkbox checked={recentDonarStatus}
                                           onChange={ () => this.onChangeCallMethod()}>
                                        &nbsp;Mark as Recent Donar!</Checkbox>
                                </label>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={ () => this.onCloseClick() }>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
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
        TotalRegisterdDonars: state.allReducers.donars_data,
        boolean_result: boolean_Status,
        PersonalSearchData: state.allReducers.boolean_popups,
        PostRequestBoolean: state.allReducers.popup_check_booleanValue,
        GetThePostRequestedDate: state.allReducers.user_request_data,
        commentbooleanvalue: state.allReducers.comment_boolean_check,
        totalComments :state.allReducers.total_comments,
        recentDonarStatus: state.allReducers.recent_donar_status
    }
}

export default reduxForm({
        form : 'Search',
        fields
    },
    selectProps,
)(Search)
