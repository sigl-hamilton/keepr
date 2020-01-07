import React, { useState } from "react";
import { Button, Input, FormGroup, Label, Alert } from "reactstrap";
import axios from "axios";

export default function Login(props) {
    const [name, setName] = useState("");
    const [error, setError] = useState(false);

    function validateForm() {
        return name.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios.get('http://localhost:4000/user')
            .then(response => {
                console.log(response.data)
                setError(!error);
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