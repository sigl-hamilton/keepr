import React, { useState } from "react";
import { Button, Input, FormGroup, Label, Alert } from "reactstrap";
import axios from "axios";
import axiosURL from "../axios-config";

export default function Login(props) {
    const [name, setName] = useState("");
    const [error, setError] = useState(false);

    function validateForm() {
        return name.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios.get(axiosURL("user"))
            .then(response => {
                let foundUser = null;
                response.data.forEach(user => {
                    if (user.name === name)
                        foundUser = user;
                });
                if (foundUser == null)
                    setError(true);
                else {
                    props.appProps.authenticateUser(foundUser);
                    setError(false);
                }
            })
            .catch(function (error){
                console.log(error);
            })
    }

    function conditionalError() {
        if (error)
            return (
                <Alert color="danger">
                    Invalid name!
                </Alert>
            );
        return null;
    }

    console.log(props.appProps);

    return (
        <div className="Login">
            {conditionalError()}
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name-input">Username</Label>
                    <Input
                        type="name"
                        name="name"
                        id="name-input"
                        placeholder="Your name"
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                </FormGroup>
                <Button block disabled={!validateForm()} type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
}