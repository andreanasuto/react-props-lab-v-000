// Code The Spaceship Component Here
import React from 'react'
import ReactDOM from 'react-dom'

class Spaceship extends React.Component {
  propTypes: {

  },

  getDefaultProps() {
    return {
      speed: 'slow'
    };
  },

  render () {
    return (
      <div>
        this.props.name
        this.props.speed
      <div>
    )
  }
}

Spaceship.propTypes = {
  firstName:PropTypes.string,
  lastName:PropTypes.string,
  country:PropTypes.string
};


ReactDOM.render(
  <Spaceship />,
  document.getElementById('global')
);

export default class Spaceship extends React.Component { ... }
