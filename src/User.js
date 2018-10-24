import React, {Component} from 'react';
import api from './Api';

export default class User extends Component{

     constructor() {        
         super();
         this.state = {
             id: '',
             name: '',
             username: '',
             email: ''
         }
      }
      

    render(){        
        api.get("users/"+ this.props.match.params.id)        
          .then(res => {
              if(res.status !== 201) {
                  const users = res.data;
                  this.setState({ 
                      id: users.id,
                      name: users.name,
                      username: users.username,
                      email: users.email
                  });
             } 
              else {
                 this.setState({ 
                     id: '',
                     name: '',
                     username: '',
                     email: ''
                  });
              }          
          })
         return(
    
         <div>
                 <p>{this.state.id}</p>
                 <p>{this.state.name}</p>
                 <p>{this.state.username}</p>
                 <p>{this.state.email}</p>
             </div>
         )
     }

}

