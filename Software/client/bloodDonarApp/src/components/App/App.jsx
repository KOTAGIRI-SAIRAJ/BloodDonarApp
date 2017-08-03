import React, {Component, PropTypes} from "react";
import {Router} from "react-router";
import routes from "../../components/routes";
import autobind from "autobind-decorator";

import {Jumbotron,PageHeader ,Well} from "react-bootstrap";
import moment from "moment";
import momentLocalizer from "react-widgets/lib/localizers/moment";

momentLocalizer(moment)

@autobind
export default class App extends Component {
    /*
     * Component render()
     * see: https://facebook.github.io/react/docs/reusable-components.html#es6-classes
     */
    componentWillReceiveProps(nextProps) {
        this.setState({ prevPath: this.props.location })
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <Well bsSize="large" bsStyle="primary"><h1>BLOOD DONAR</h1></Well>
                <Router history={this.props.history}>
                    {routes}
                </Router>
            </div>
        );
    }
}
App.propTypes = {
    history: PropTypes.object.isRequired
}
