// Code The Spaceship Component Here
import React from 'react'
import ReactDOM from 'react-dom'

class Spaceship extends React.Component {

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
  name:PropTypes.string,
  speed:PropTypes.integer,
  country:PropTypes.string
};

Spaceship.getDefaultProps() {
  speed: 'slow'
}


ReactDOM.render(
  <Spaceship />,
  document.getElementById('global')
);

export default class Spaceship extends React.Component { ... }
