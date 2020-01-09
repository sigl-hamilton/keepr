import React, { Component } from 'react';
import ObjectAddForm from "../Components/Containers/ObjectAddForm";
import { Alert } from "reactstrap";

export default class ObjectAddPage extends Component {
    constructor(props) {
        super(props);

        this.dispatchWithAlert = this.dispatchWithAlert.bind(this);
    }

    dispatchWithAlert() {
        console.log(this.props.appProps);
        if (this.props.appProps.authenticatedUser === null)
            return(
                <Alert color="danger">
                    You have to be logged in to add an object!
                </Alert>
            );
        else
            return(
                <ObjectAddForm appProps={this.props.appProps} />
            );
    }

    render() {
        return (
            <div>
                {this.dispatchWithAlert()}
            </div>
        )
    }
}