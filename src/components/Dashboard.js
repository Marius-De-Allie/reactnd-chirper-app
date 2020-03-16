import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Your Timeline</h3>
        <ul className="dashboard-list">
          {this.props.tweetsIds.map(id => 
            <li key={id}>
              <Tweet id={id} />
            </li>
          )}
        </ul>
      </div>
    );
  }
};

const mapStatetoProps = ({tweets}) => ({
  tweetsIds: Object.keys(tweets)
  .sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
});

export default connect(mapStatetoProps)(Dashboard);