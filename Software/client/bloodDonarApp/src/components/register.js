import React, { Component, PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Radio,Col,Panel,Button,Form,FormControl,FormGroup, ControlLabel } from 'react-bootstrap'
import autobind from 'autobind-decorator'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const renderField = field => (
    <div>
        <label>{field.input.label}</label>
        <input {...field.input}/>
        {field.touched && field.error && <div className="error">{field.error}</div>}
            </div>
            );
const renderSelect = field => (
    <div>
        <label>{field.input.label}</label>
        <select {...field.input}/>
        {field.touched && field.error && <div className="error">{field.error}</div>}
            </div>
            );
@autobind
class RegisterDonor extends Component {

    /*DONOR_REGISTRATION () {
        console.log(this.props.values)
        let {dispatch} =this.props
        dispatch(DONOR_REGISTRATION(this.props.values))
    }*/
    handleFormSubmit(formProps) {
        console.log("formprops")
        console.log(formProps)
        console.log("formprops")
        this.props.submitFormAction(formProps);
    }
    componentDidMount() {
        //TODO: remove all console logs
        console.log("componentDidMount")
        console.log(this.props)
        console.log("componentDidMount")
        this.handleInitialize();
    }
    handleInitialize() {
        const initData = {
            "firstName": this.props.firstName,
            "lastName": this.props.lastName,
            "sex": this.props.sex,
            "email": this.props.userEmail,
            "phoneNumber": this.props.phoneNumber
        };

        this.props.initialize(initData);
    }
    render () {
        const { handleSubmit } = this.props;
        return (
                <form >

                    <Field name="firstName" type="text" component={renderField} label="First Name"/>
                    <Field name="lastName" type="text" component={renderField} label="Last Name"/>
                    <Field name="sex" component={renderSelect} label="Gender">
                        <option></option>
                        <option name="male">Male</option>
                        <option name="female">Female</option>
                    </Field>
                    <Field name="email" type="email" component={renderField} label="Email" />
                    <Field name="phoneNumber" type="tel" component={renderField} label="Phone Number"/>

                    <button  onClick={this.handleFormSubmit}>Save changes</button>
                </form>
        )

    }
    getFprmData(values){
        console.log(this.props)
    }

}


function getInitFields() {
    let initValues = {
        firstName : 'puram',
        lastName : 'purushotham',
        email: 'puram.purushotham@india.semanticbits.com',
        dob: '08/12/1993',
        occupation:'employee',
        phone:'89744565841',
        martial_status:'UnMarried'
    }
    return initValues;
}
function validate(formProps) {
    console.log(formProps)
    const errors = {};

    if (!formProps.firstName) {
        errors.firstName = 'Please enter a first name';
    }

    if (!formProps.lastName) {
        errors.lastName = 'Please enter a last name';
    }

    if (!formProps.email) {
        errors.email = 'Please enter an email';
    }

    if (!formProps.phoneNumber) {
        errors.phoneNumber = 'Please enter a phone number'
    }

    if(!formProps.sex) {
        errors.sex = 'You must enter your sex!'
    }

    return errors;
}
export default reduxForm({
    form: 'RegisterDonor',
    validate
})(RegisterDonor)
