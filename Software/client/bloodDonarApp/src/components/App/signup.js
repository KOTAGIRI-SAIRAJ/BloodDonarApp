/**
 * Created by semanticbits on 19/7/17.
 */
import React, { Component } from 'react';
import { Grid, Row, Col ,Panel ,Form ,FormGroup,ControlLabel,Button,FormControl,Radio,Checkbox } from 'react-bootstrap'

export default class SignupPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            occupation:'',
            martial_status:'',
            dob:'',
            p_email:'',
            p_phone:'',
            e_email:'',
            e_phone:'',
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name] : e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
        console.log(this)
    }

    render (){
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={12} md={8} mdPush={2}><code>
                            <Panel header="Donar Registration Page"  bsStyle="primary">

                                <Panel header="Personal Details"  bsStyle="success">
                                    <label className="control-label"> First Name </label>
                                    <input value={this.state.firstName} onChange={this.onChange} type="text" name="firstName" className="form-control" />
                                    <label className="control-label"> Last Name </label>
                                    <input value={this.state.lastName} onChange={this.onChange} type="text" name="lastName" className="form-control" />
                                    <label className="control-label"> Occupation </label>
                                    <input value={this.state.occupation} onChange={this.onChange} type="text" name="occupation" className="form-control" />
                                    <label className="control-label " > Martial Status </label>
                                    <div >
                                    <input type="radio" value={"Married"} onChange={this.onChange} name="martial_status"/> Married
                                    <input type="radio" value={"UnMarried"} onChange={this.onChange} name="martial_status" /> UnMarried
                                    </div>
                                    <br/>
                                    <label className="control-label"> Date Of Birth </label>
                                    <input value={this.state.dob} onChange={this.onChange} type="date" name="dob" className="form-control" />
                                </Panel>

                                <Panel header="Contact details"  bsStyle="info">

                                    <Panel header="Personal Details"  bsStyle="warning">
                                        <label className="control-label">Email Id</label>
                                        <input value={this.state.p_email} onChange={this.onChange} type="email" name="p_email" className="form-control" />
                                        <label className="control-label">Mobile Number</label>
                                        <input value={this.state.p_phone} onChange={this.onChange} type="number" name="p_phone" className="form-control" />
                                    </Panel>

                                    <Panel header="Emergency Details"  bsStyle="danger">
                                        <label className="control-label">Email Id</label>
                                        <input value={this.state.e_email} onChange={this.onChange} type="email" name="e_email" className="form-control" />
                                        <label className="control-label">Mobile Number</label>
                                        <input value={this.state.e_phone} onChange={this.onChange} type="number" name="e_phone" className="form-control" />
                                    </Panel>

                                </Panel>

                                <div className="form-group">
                                    <button className="btn btn-primary btn-lg pull-right">Register</button>
                                </div>

                            </Panel>
                            </code></Col>
                        </Row>
                    </Grid>
                </div>
            </form>
        )
    }
}