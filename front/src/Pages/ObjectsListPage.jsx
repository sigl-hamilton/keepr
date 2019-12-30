import React, { Component } from 'react';
import ObjectList from "../Components/Containers/ObjectList";
import Select from "../Components/Atomic/Select";

export default class ObjectsListPage extends Component {
    render() {
        return (
            <div>
                <Select
                    id="test-select"
                    users={[{id: 2}, {id: 3}]}
                    enabled={true}

                />
                <ObjectList />
            </div>
        )
    }
}