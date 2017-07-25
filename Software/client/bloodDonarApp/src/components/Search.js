/**
 * Created by semanticbits on 21/7/17.
 */

import React, {Component, PropTypes} from "react";
import {reduxForm} from "redux-form";
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Panel, Row} from "react-bootstrap";
import autobind from "autobind-decorator";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { SEARCH_DATAA } from '../actions/actions'


export const fields=[ 'bloodGroup', 'city']
var temp =0;
var total_Donars_data;

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
    /*SEARCH_DATA(SearchLogData){
        let { dispatch } =this.props
        dispatch(SEARCH_DATA(this.props.values))
    }*/
    render() {

            let {
            fields: { bloodGroup, city},
            SearchData,
            resetForm,
            submitting,
            pristine, reset
        } = this.props
        return (
            <div>
                <Panel header="Search" bsStyle="primary">
                    <Form horizontal >
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
                    </Form>
                </Panel>
                <BootstrapTable data={SearchData} striped hover>
                    <TableHeaderColumn isKey dataField='firstName'>First Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='lastName'>Last Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='occupation'>Occupation</TableHeaderColumn>
                    <TableHeaderColumn dataField='martial_status'>Martial Status</TableHeaderColumn>
                    <TableHeaderColumn dataField='dob'>Date Of Birth</TableHeaderColumn>
                    <TableHeaderColumn dataField='p_email'>Personal Email</TableHeaderColumn>
                    <TableHeaderColumn dataField='p_phone'>Personal Phone</TableHeaderColumn>
                    <TableHeaderColumn dataField='bloodGroup'>Blood Group</TableHeaderColumn>
                    <TableHeaderColumn dataField='city'>City</TableHeaderColumn>
                </BootstrapTable>
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
        SearchData: state.allReducers.search_data
    }
}
/*
function selectProps (state) {

    total_Donars_data =  state.allReducers.donars_data;
    if(temp === undefined){
      return {
        SearchData: state.allReducers.donars_data
    }}
    else{
        SearchData= temp;
        return SearchData ;
    }
}
*/
export default reduxForm({
        form : 'Search',
        fields
    },
    selectProps
)(Search)



/*
 import React, { Component } from 'react'
 import autobind from 'autobind-decorator'
 import {Nav,Navbar, NavItem, NavDropdown,Col, Form,MenuItem,FormGroup,FormControl,Button, Panel} from 'react-bootstrap'
 import { reduxForm } from 'redux-form';
 import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
 import allReducers from '../components/reducers'


 var products = [{
 id: 1,
 name: "Sairaj",
 price: 120
 }, {
 id: 2,
 name: "Sai",
 price: 80
 }];

 @autobind
 class Search extends Component{

 render(){
 /!*let { searchData } = this.props*!/

 return(
 <div>
 <Panel header="Search" bsStyle="primary">
 <Form horizontal >
 <FormGroup >
 <Col sm={2}>Blood Group</Col>
 <Col sm={10}>
 <FormControl type="text" placeholder="Blood Group" />
 </Col>
 </FormGroup>
 <FormGroup >
 <Col sm={2}>City</Col>
 <Col sm={10}>
 <FormControl type="text" placeholder="City" />
 </Col>
 </FormGroup>
 <FormGroup>
 <Col smOffset={2} sm={10}>
 <Button type="button" className="pull-right" bsStyle="success" bsSize="large"  >
 Search
 </Button>
 </Col>
 </FormGroup>
 </Form>
 </Panel>
 <BootstrapTable data={products} striped hover>
 <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
 <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
 <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
 </BootstrapTable>
 </div>
 )
 }
 }

 function selectProps (state) {
 console.log('--------------------')
 console.log(state);
 console.log('--------------------')
 return {
 searchData: state.allReducers.donars_data
 }
 }

 export default reduxForm({
 form: 'Search',
 },
 selectProps
 )(Search)

 */