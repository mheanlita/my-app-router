import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import api from './Api';

export default class UserList extends Component{
    state = {
        users: []
    }

    componentDidMount(){
        api.get('users')
        .then(res => {
            if(res.status !== 201) {
                const users = res.data;
                this.setState({ users });
            }           
        })
    }

    render() {
        return(
            <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                </tr>
            </thead>
            <tbody>
            {
                this.state.users.map(item => 
                    <tr key={item.id}>   
                        <td><NavLink to={"/User/" +item.id}>{item.id}</NavLink></td>                                            
                        <td>{item.name}</td>
                    </tr>
                    
                )
            }
            </tbody>           
            </table>
        )
    }
}