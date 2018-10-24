import React, { Component } from 'react';
import axios from 'axios';
import api from './Api';

export default class PersonList extends Component{
    state = {
        persons: []
    }

    componentDidMount(){
        api.get('users')
        .then(res => {
            if(res.status !== 201) {
                const persons = res.data;
                this.setState({ persons });
            }           
        })
    }

    render() {
        return(
            <ul>
            {
                this.state.persons.map(person => 
                    <li key={person.name}>{person.name}</li>
                )
            }
            </ul>
        )
    }
}