import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  //anytime you have state inside an object you have to have a constructor to instantiate the props.
  constructor(props) {
    super(props);
    this.state = {
      favorites: "",
    }
  }

  handleClick = () => this.setState({ favorites: this.state.favorites + "💗" });
  handleSelection = () => {
    const handled = {
      title: this.props.title,
      description: this.props.description,
      imageUrl: this.props.imageUrl,
    }
    this.props.handleOpen(handled);
  }

  render() {
    return (
      <Col>
        <Card onClick={this.handleClick} className = "h-100 p-2">
          <h2>{this.props.title}</h2>
          <img src={this.props.imageUrl} alt={this.props.description} />
          <p>{this.props.description}</p>
          <p>Favor: {this.state.favorites}</p>
          <button onClick = {this.handleSelection}>
          Zoom
          </button>
        </Card>
      </Col>
    )
  }
}

export default HornedBeast;
