import React from 'react';
import axios from 'axios';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mostRecent: null }
  }
  componentDidMount() {
    axios.get('api/diary').then(result => {
      this.setState({mostRecent: result.data[result.data.length - 1]});
      console.log(this.state.mostRecent);
    });
  }
  render() {
    return (
      <div className="mainContainer">
        <div className="header">
          {/* <h2>Welcome to LifeData!</h2> */}
        </div>
        <div className="mainBody">
          {/* <h3>When you made your last post on (date), you were feeling (mood)</h3> */}
        </div>
        <div className="footer">
          {/* <h2>How are you feeling today?</h2> */}
        </div>
      </div>
    );
  }
}