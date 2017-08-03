/**
 * Created by semanticbits on 28/7/17.
 */
import React, {Component} from "react";
import {reduxForm} from "redux-form";
import {Button,Well, Col, Form, FormGroup, Panel} from "react-bootstrap";
import autobind from "autobind-decorator";

import {COMMENT_BOOLEAN_CHECK, POST_REQUEST_BOOLEAN, TOTAL_COMMENTS} from "../actions/actions";


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
            resetForm,
            submitting,
            pristine, reset
        } = this.props
        let tempArray =[]
        totalCommentsData.forEach((eachRecord)=>{
            if(storedDataRecord.u_id === eachRecord.u_c_id){
                tempArray.push(eachRecord)
            }
        })
        var options = {
            noDataText: 'No Comments...',
            /*searchPosition: 'left'*/
        }
        var namesList = tempArray.map(function(name){
            return (
                <div>
                    <img width={30} height={30}  src="../../src/assets/person.png"/>
                    <Well bsSize="small" bsStyle="primary">{name.comment}</Well>
                </div>
            );
        })
        return (
            <div >
                <Form horizontal >
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
                </Form>
            </div>
        )
    }
}

function selectProps (state) {
    return {
        storedDataRecord: state.allReducers.post_request_row_click_record,
        totalCommentsData: state.allReducers.total_comments
    }
}

export default reduxForm({
        form : 'CommentsPopup',
        fields
    },
    selectProps
)(CommentsPopup)


