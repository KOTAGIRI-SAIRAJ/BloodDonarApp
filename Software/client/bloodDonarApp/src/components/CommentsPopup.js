/**
 * Created by semanticbits on 28/7/17.
 */
import React, {Component} from "react";
import {reduxForm} from "redux-form";
import autobind from "autobind-decorator";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Well,Checkbox,Nav,NavItem,Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Panel, Row,Modal} from "react-bootstrap";
import {COMMENT_BOOLEAN_CHECK, POST_REQUEST_BOOLEAN, TOTAL_COMMENTS,POST_REQUEST_ROW_CLICK_RECORD} from "../actions/actions";


export const fields=[ 'comment', 'u_c_id']

@autobind
class CommentsPopup extends Component {

    comment_Data(){
        let { dispatch } =this.props
        this.props.values.u_c_id = this.props.storedDataRecord.u_id;
        dispatch(TOTAL_COMMENTS(this.props.values))
        let boolval = false;
        dispatch(COMMENT_BOOLEAN_CHECK(boolval));
        dispatch(POST_REQUEST_BOOLEAN(boolval));
    }

    onClosePostRequestClick(){
        let { dispatch } =this.props
        let boolval = false;
        dispatch(POST_REQUEST_BOOLEAN(boolval));
    }
    rowClick(row) {
        let { dispatch } =this.props
        let boolval = true;
        dispatch(POST_REQUEST_BOOLEAN(boolval));
        dispatch(POST_REQUEST_ROW_CLICK_RECORD(row));
    }
    render() {
        const style = {
            maxHeight:'50px',
            minHeight:'38px',
            resize:'none',
            padding:'10px',
            boxSizing:'border-box',
            width:'350px',
            fontSize:'15px',};
        let {
            fields: { comment , u_c_id},
            storedDataRecord,
            totalCommentsData,
            UserData,
            postRequestBooleanNew,
            resetForm,
            submitting,
            pristine, reset
        } = this.props
        let tempArray =[]
        totalCommentsData.forEach((eachRecord) => {
            if(storedDataRecord.u_id === eachRecord.u_c_id){
                tempArray.push(eachRecord)
            }
        })
        var options = {
            sizePerPage: 5,
            sizePerPageList: [ {
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {
                text: 'All', value: UserData.length
            } ],
            onRowClick: this.rowClick.bind(this),
            noDataText: 'No Posts...',
        }
        var namesList = tempArray.map(function(name){
            return (
                <div>
                    <Row className="show-grid">
                        <Col sm={1} ><img width={30} height={30}  src="../../src/assets/person.png"/></Col>
                        <Col sm={10} md={11}><Well bsSize="small" bsStyle="primary">{name.comment}</Well></Col>
                    </Row>
                </div>
            );
        })
        return (
            <div >
                <Panel header="All Requests" bsStyle="primary">
                    <BootstrapTable data={UserData} pagination options={options} striped hover search>
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
                <Form horizontal >
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
                            <Panel header="" bsStyle="primary">
                                { namesList }
                                <FormGroup >
                                    <Col sm={8}>
                                        <textarea style={style}  type="textarea" placeholder="Comment here..." {...comment} />
                                    </Col>
                                    <Col sm={4}>
                                        <Button type="button" className="pull-right" bsStyle="success" onClick={ () => this.comment_Data() }>
                                            SUBMIT
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Panel>
                        </Modal.Body>
                    </Modal>
                </Form>
            </div>
        )
    }
}

function selectProps (state) {
    return {
        storedDataRecord: state.allReducers.post_request_row_click_record,
        totalCommentsData: state.allReducers.total_comments,
        UserData: state.allReducers.user_request_data,
        postRequestBooleanNew: state.allReducers.post_request_boolean
    }
}

export default reduxForm({
        form : 'CommentsPopup',
        fields
    },
    selectProps
)(CommentsPopup)


