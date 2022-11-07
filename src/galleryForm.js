import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import data from './data.json';
// import HornedBeast from './HornedBeast';


class Gallery extends React.Component {

filter = (event) => {
  event.preventDefault();
  const hornNum = parseInt(event.target.value);
  let numHorns = data;

  if (hornNum) {
    numHorns = data.filter(HornedBeast => HornedBeast.horns === hornNum);
  } else if (hornNum === 0) {
    numHorns = data;}
this.props.galleryChange(numHorns);
}

render() {
  return (
      <>
      <Container>
        <Form>
          <Form.Label>Select desired number of Horns</Form.Label>
          <Form.Select name="horns" onChange={this.filter}>
            <option value="1">1 Horn</option>
            <option value="2">2 Horn</option>
            <option value="3">3 Horn</option>
            <option value="100">Like...so many horns</option>
          </Form.Select>
        </Form>
      </Container>
      </>
      )
  }
}

export default Gallery;
