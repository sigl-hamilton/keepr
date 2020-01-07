import React, { useState } from "react";
import { Button, Input, FormGroup, Label } from "reactstrap";

export default function Login(props) {
    const [name, setName] = useState("");

    function validateForm() {
        return name.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
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
                <Button block bsSize="large" disabled={!validateForm()} type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
}