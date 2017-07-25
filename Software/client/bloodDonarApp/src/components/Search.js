/**
 * Created by semanticbits on 21/7/17.
 */

import React, {Component, PropTypes} from "react";
import {reduxForm} from "redux-form";
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Panel, Row,Modal} from "react-bootstrap";
import autobind from "autobind-decorator";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { SEARCH_DATAA } from '../actions/actions'
import { BOOLEAN_POPUPS } from '../actions/actions'


export const fields=[ 'bloodGroup', 'city']
var temp =0;
var total_Donars_data;
var boolean_Status = {show : false}
var boolean_Status1 = {show: false}

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
        console.log(row);
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

    render() {
        var options = {
            onRowClick: this.rowClick.bind(this)
        }
    let {
        fields: { bloodGroup, city},
        SearchData,
        PersonalSearchData,
        boolean_result,
        resetForm,
        submitting,
        pristine, reset
    } = this.props
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
            <Button type="button" className="pull-right" bsStyle="primary" bsSize="large" >POST A REQUEST</Button>
        </Panel>
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
        PersonalSearchData: state.allReducers.boolean_popups
    }
}

export default reduxForm({
        form : 'Search',
        fields
    },
    selectProps
)(Search)




