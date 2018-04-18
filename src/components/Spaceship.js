// Code The Spaceship Component Here
import React from 'react'
import ReactDOM from 'react-dom';


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

Spaceship.defaultProps = {
  name: 'Stranger'
};

export default class Spaceship extends React.Component { ... }

ReactDOM.render(
  <Spaceship />,
  document.getElementById('global')
);
