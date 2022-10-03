import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  //anytime you have state inside an object you have to have a constructor to instantiate the props.
  constructor(props) {
    super(props);
    this.state = {
      favorites: ""
    }
  }

  handleClick = () => this.setState({ favorites: this.state.favorites + "💗" });


  render() {
    return (
      <Col>
        <Card onClick={this.handleClick} className = "h-100 p-2">
          <h2>{this.props.title}</h2>
          <img src={this.props.imageUrl} alt={this.props.description} />
          <p>{this.props.description}</p>
          <p>Favor: {this.state.favorites}</p>
        </Card>
      </Col>
    )
  }
}

export default HornedBeast;
