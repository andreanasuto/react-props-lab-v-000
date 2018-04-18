// Code The Spaceship Component Here
import React from 'react'
import ReactDOM from 'react-dom'

class Spaceship extends React.Component {

  render () {
    return (
      <div>
        this.props.name
        this.props.speed
        this.props.hasRockets
        this.props.colors
      <div>
    )
  }
}

Spaceship.propTypes = {
  name:PropTypes.string,
  speed:PropTypes.number,
  country:PropTypes.bool,
  colors: PropTypes.array
};

Spaceship.getDefaultProps() {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}


ReactDOM.render(
  <Spaceship />,
  document.getElementById('global')
);

export default class Spaceship extends React.Component { ... }
