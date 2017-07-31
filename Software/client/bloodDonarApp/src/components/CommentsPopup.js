/**
 * Created by semanticbits on 28/7/17.
 */
import React, {Component, PropTypes} from "react";
import {reduxForm} from "redux-form";
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Panel, Row,Modal} from "react-bootstrap";
import autobind from "autobind-decorator";
import { TOTAL_COMMENTS,COMMENT_BOOLEAN_CHECK } from '../actions/actions'


export const fields=[ 'comment', 'u_c_id']
let tempUid;

@autobind
class CommentsPopup extends Component {

    Comment_Data(){
        let { dispatch } =this.props
        this.props.values.u_c_id = tempUid;
        dispatch(TOTAL_COMMENTS(this.props.values))
        let boolval = false;
        dispatch(COMMENT_BOOLEAN_CHECK(boolval));
    }
    render() {
        let {
            fields: { comment , u_c_id},
            storeUid,
            resetForm,
            submitting,
            pristine, reset
        } = this.props
        tempUid =storeUid;
        return (
            <div >
                <Form horizontal >
                    <Panel header="" bsStyle="primary">
                        <FormGroup >
                            <Col sm={2}>Comment</Col>
                            <Col sm={10}>
                                <textarea type="textarea" placeholder="Comment here..." {...comment} />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button type="button" className="pull-right" bsStyle="success" bsSize="large" onClick={ () => this.Comment_Data() }>
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
        storeUid: state.allReducers.temp_uid,
    }
}

export default reduxForm({
        form : 'CommentsPopup',
        fields
    },
    selectProps
)(CommentsPopup)


