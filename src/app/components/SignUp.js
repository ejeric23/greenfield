import React from 'react';
import axios from 'axios';

export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      user: {
        username: '',
        password: ''
      }
    }
    this.processForm = this.processForm.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }
  changeUsername(event) {
    const user = this.state.user;
    user.username = event.target.value;
    this.setState({user});
  }
  changePassword(event) {
    const user = this.state.user;
    user.password = event.target.value;
    this.setState({ user });
  }
  // Process the form
  processForm(event) {
    event.preventDefault();
    axios.post('/signup', this.state.user).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="mainContainer">
        <div className="header">
          <h1>Sign Up</h1>
        </div>
        <div className="mainBody">
          <div className="signupForm">
            <form onSubmit={this.processForm}>
              <div className="form-group">
                <input type="signupUsername" className="form-control" id="signupUsername" placeholder="username" onChange={this.changeUsername}/>
              </div>
              <div className="form-group">
                <input type="signupPassword" className="form-control" id="signupPassword" placeholder="password" onChange={this.changePassword}/>
              </div>
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}