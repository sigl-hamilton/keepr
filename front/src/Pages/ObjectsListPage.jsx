import React, { Component } from 'react';
import ObjectList from "../Components/Containers/ObjectList";
import Select from "../Components/Atomic/Select";
import axios from "axios";
import axiosURL from "../axios-config";

export default class ObjectsListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            objects: [],
            owner: -1
        };

        this.setOwner = this.setOwner.bind(this);
        this.filterObjects = this.filterObjects.bind(this);
    }

    setOwner(newOwner) {
        console.log(newOwner);
        if (newOwner === "All")
            this.setState({owner: -1});
        else
            this.setState({owner: parseInt(newOwner)});
    }

    componentDidMount() {
        axios.get(axiosURL('registeredObject'))
            .then(response => {
                this.setState({
                    objects: response.data
                });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    filterObjects() {
        console.log(this.state);
        let filteredObjects = [];
        this.state.objects.forEach((object) => {
            if (this.state.owner === -1 || this.state.owner === object.user_id)
                filteredObjects.push(object);
        });
        console.log(filteredObjects);
        return filteredObjects;
    }

    render() {
        console.log("Render page");
        return (
            <div>
                <Select
                    id="test-select"
                    options={["All", "2", "3"]}
                    enabled={true}
                    onChange={e => this.setOwner(e.target.value)}
                />
                <ObjectList objects={this.filterObjects()}/>
            </div>
        )
    }
}