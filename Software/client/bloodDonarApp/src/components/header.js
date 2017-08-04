/**
 * Created by semanticbits on 20/7/17.
 */
import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form';
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import {Nav, Navbar, NavItem,Button, NavDropdown, MenuItem, Grid, Row, Col} from 'react-bootstrap'
import { POPUP_CHECK_BOOLEANVALUE } from '../actions/actions'
import {  USER_REQUEST_DATA,SEARCH_DATA, COMMENT_BOOLEAN_CHECK, RECENT_DONAR,POST_REQUEST_BOOLEAN,NEW_DONAR_REGISTERED_DATA } from '../actions/actions'
import moment from 'moment'

@autobind
class Header extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount () {
        let donararray1=  {
            'Id':"2017-08-03T16:49:45+05:30",
            'firstName':'user1',
            'lastName': 'user1',
            'occupation':'Employee1',
            'martial_status':'UnMarried',
            'dob':'02-03-1994',
            'p_email':'user1@gmail.com',
            'p_phone':'8142428301',
            'e_email':'user1@gmail.com',
            'e_phone':'8142428301',
            'bloodGroup':'A+',
            'city':'Hyderabad',
            'recent_donar':'NO',
            'current_date': undefined,
            'end_date': undefined
        }
        let donararray2=     {
            'Id':"2017-08-03T16:49:46+05:30",
            'firstName':'user2',
            'lastName': 'user2',
            'occupation':'Employee2',
            'martial_status':'UnMarried',
            'dob':'02-03-1994',
            'p_email':'user2@gmail.com',
            'p_phone':'8142428302',
            'e_email':'user2@gmail.com',
            'e_phone':'8142428302',
            'bloodGroup':'AB+',
            'city':'Hyderabad',
            'recent_donar':'NO',
            'current_date': undefined,
            'end_date': undefined
        }
        let donararray3=     {
            'Id':"2017-08-03T16:49:47+05:30",
            'firstName':'user3',
            'lastName': 'user3',
            'occupation':'Employee3',
            'martial_status':'UnMarried',
            'dob':'02-03-1994',
            'p_email':'user3@gmail.com',
            'p_phone':'8142428303',
            'e_email':'user3@gmail.com',
            'e_phone':'8142428303',
            'bloodGroup':'AB+',
            'city':'Hyderabad',
            'recent_donar':'NO',
            'current_date': undefined,
            'end_date': undefined
        }

        let donararray4=     {
            'Id':"2017-08-03T16:49:48+05:30",
            'firstName':'user4',
            'lastName': 'user4',
            'occupation':'Employee4',
            'martial_status':'UnMarried',
            'dob':'02-03-1994',
            'p_email':'user4@gmail.com',
            'p_phone':'8142428304',
            'e_email':'user4@gmail.com',
            'e_phone':'8142428304',
            'bloodGroup':'AB+',
            'city':'Hyderabad',
            'recent_donar':'NO',
            'current_date': undefined,
            'end_date': undefined
        }

        let donararray5=     {
            'Id':"2017-08-03T16:49:48+05:30",
            'firstName':'user5',
            'lastName': 'user5',
            'occupation':'Employee5',
            'martial_status':'UnMarried',
            'dob':'02-03-1994',
            'p_email':'user5@gmail.com',
            'p_phone':'8142428305',
            'e_email':'user5@gmail.com',
            'e_phone':'8142428305',
            'bloodGroup':'O+',
            'city':'Hyderabad',
            'recent_donar':'NO',
            'current_date': undefined,
            'end_date': undefined
        }
        let donararray6=     {
            'Id':"2017-08-03T16:49:49+05:30",
            'firstName':'user6',
            'lastName': 'user6',
            'occupation':'Employee6',
            'martial_status':'UnMarried',
            'dob':'02-03-1994',
            'p_email':'user6@gmail.com',
            'p_phone':'8142428306',
            'e_email':'user6@gmail.com',
            'e_phone':'8142428306',
            'bloodGroup':'B+',
            'city':'Hyderabad',
            'recent_donar':'NO',
            'current_date': undefined,
            'end_date': undefined
        }
        let { dispatch } =this.props
        dispatch(NEW_DONAR_REGISTERED_DATA(donararray1));
        dispatch(SEARCH_DATA(donararray1));
        dispatch(NEW_DONAR_REGISTERED_DATA(donararray2));
        dispatch(SEARCH_DATA(donararray2));
        dispatch(NEW_DONAR_REGISTERED_DATA(donararray3));
        dispatch(SEARCH_DATA(donararray3));
        dispatch(NEW_DONAR_REGISTERED_DATA(donararray4));
        dispatch(SEARCH_DATA(donararray4));
        dispatch(NEW_DONAR_REGISTERED_DATA(donararray5));
        dispatch(SEARCH_DATA(donararray5));
        dispatch(NEW_DONAR_REGISTERED_DATA(donararray6));
        dispatch(SEARCH_DATA(donararray6));

        let obj1  = {
            'u_firstName':'requestName1',
            'u_lastName':'requestName1',
            'u_bloodGroup':'AB+',
             'u_phone':'1234567890',
            'u_emial':'requestName1@gmail.com',
            'u_age':22,
            'u_id':"2017-08-03T16:49:20+05:30",
            'u_dob':'02-03-2000',
            'u_city':'Hyderabad',
            'u_comments':undefined,
            'u_individualCommment':undefined
        }
        let obj2  = {
            'u_firstName':'requestName2',
            'u_lastName':'requestName2',
            'u_bloodGroup':'B+',
            'u_phone':'1234567891',
            'u_emial':'requestName2@gmail.com',
            'u_age':23,
            'u_id':"2017-08-03T16:49:22+05:30",
            'u_dob':'02-03-2001',
            'u_city':'Hyderabad',
            'u_comments':undefined,
            'u_individualCommment':undefined
        }
        let obj3  = {
            'u_firstName':'requestName3',
            'u_lastName':'requestName3',
            'u_bloodGroup':'O+',
            'u_phone':'1234567892',
            'u_emial':'requestName3@gmail.com',
            'u_age':24,
            'u_id':"2017-08-03T16:49:24+05:30",
            'u_dob':'02-03-1999',
            'u_city':'Hyderabad',
            'u_comments':undefined,
            'u_individualCommment':undefined
        }
        let obj4  = {
            'u_firstName':'requestName4',
            'u_lastName':'requestName4',
            'u_bloodGroup':'AB+',
            'u_phone':'1234567893',
            'u_emial':'requestName4@gmail.com',
            'u_age':24,
            'u_id':"2017-08-03T16:49:26+05:30",
            'u_dob':'02-03-2002',
            'u_city':'Hyderabad',
            'u_comments':undefined,
            'u_individualCommment':undefined
        }
        dispatch(USER_REQUEST_DATA(obj1))
        dispatch(USER_REQUEST_DATA(obj2))
        dispatch(USER_REQUEST_DATA(obj3))
        dispatch(USER_REQUEST_DATA(obj4))
    }
    render() {

        let { dispatch } =this.props
        let boolval = false;
        let temp = false;
        dispatch(POPUP_CHECK_BOOLEANVALUE(boolval));
        dispatch(COMMENT_BOOLEAN_CHECK(boolval));
        dispatch(RECENT_DONAR(temp));
        dispatch(POST_REQUEST_BOOLEAN(temp));

        return (
            <div >
                <Navbar inverse collapseOnSelect>
                    <Navbar.Collapse>

                        <Nav>
                            <LinkContainer to='/search'>
                                <NavItem eventKey={2} href="#">Search</NavItem>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <LinkContainer to='/register'>
                                <NavItem eventKey={3} href="#">Register</NavItem>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <LinkContainer to='/postrequest'>
                                <NavItem eventKey={4} href="#">Post A Request</NavItem>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <LinkContainer to='/requests'>
                                <NavItem eventKey={5} href="#">Recent Requests</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Grid>
                    <Row className="show-grid">
                        <Col md={10} mdPush={1}>
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }

}

Header.propTypes = {
    dispatch: PropTypes.func,
    children: PropTypes.object
}
Header.defaultProps={
    dispatch :  () => {}
}
function selectProps (state) {
    console.log(state)
    return {
    }
}

export default connect(selectProps) (Header)

/*

 <Navbar inverse collapseOnSelect>
 <Navbar.Header>
 <Navbar.Brand>
 <a >DashBoard</a>
 </Navbar.Brand>
 <Navbar.Toggle />
 </Navbar.Header>
 <Navbar.Collapse>
 <Nav>
 <NavItem eventKey={1} href="#">Link</NavItem>
 <NavItem eventKey={2} href="#">Link</NavItem>
 <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
 <MenuItem eventKey={3.1}>Action</MenuItem>
 <MenuItem eventKey={3.2}>Another action</MenuItem>
 <MenuItem eventKey={3.3}>Something else here</MenuItem>
 <MenuItem divider />
 <MenuItem eventKey={3.3}>Separated link</MenuItem>
 </NavDropdown>
 </Nav>
 <Nav pullRight>
 <NavItem eventKey={1} href="#">Link Right</NavItem>
 <NavItem eventKey={2} href="#">Link Right</NavItem>
 </Nav>
 </Navbar.Collapse>
 </Navbar>*/
