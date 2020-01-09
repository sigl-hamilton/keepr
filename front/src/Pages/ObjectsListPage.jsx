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
            possibleOwners: [],
            owner: {id: -1},
            deletions: 0,
        };

        this.setOwner = this.setOwner.bind(this);
        this.filterObjects = this.filterObjects.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    setOwner(newOwnerName) {
        if (newOwnerName === "All")
            this.setState({owner: {id: -1}});
        else {
            let foundOwner = null;
            this.state.possibleOwners.forEach((user) => {
                if (user.name === newOwnerName)
                    foundOwner = user;
            });
            if (foundOwner == null)
                this.setState({owner: {id: -1}});
            else
                this.setState({owner: foundOwner});
        }
    }

    componentDidMount() {
        axios.get(axiosURL('user'))
            .then(response => {
                this.setState({
                    possibleOwners: response.data
                });
            })
            .catch(function (error){
                console.error("Error: " + error.toString());
            });

        axios.get(axiosURL('registeredObject'))
            .then(response => {
                this.setState({
                    objects: response.data
                });
            })
            .catch(function (error){
                console.error("Error: " + error.toString());
            })
    }

    filterObjects() {
        let filteredObjects = [];
        this.state.objects.forEach((object) => {
            if (this.state.owner.id === -1 || this.state.owner.id === object.user_id)
                filteredObjects.push(object);
        });
        return filteredObjects;
    }

    buildSelectOptions() {
        let options = ["All"];
        this.state.possibleOwners.forEach((user) => {
            options.push(user.name);
        });
        return options;
    }

    onDelete(objectId) {
        axios.delete(axiosURL('registeredObject/' + objectId.toString()))
            .then(response => {
                this.forceUpdate();
            })
            .catch(function (error){
                console.error("Error: " + error.toString());
            })
            .finally(() => {
                this.forceUpdate();
            });
    }

    render() {
        return (
            <div>
                <Select
                    id="test-select"
                    options={this.buildSelectOptions()}
                    enabled={true}
                    onChange={e => this.setOwner(e.target.value)}
                />
                <ObjectList objects={this.filterObjects()} onDelete={this.onDelete}/>
            </div>
        )
    }
}