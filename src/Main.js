import React from 'react';
import HornedBeast from './HornedBeast';
// import data from './data.json'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import { Container } from 'react-bootstrap';
// import data from './data.json';
import Gallery from './galleryForm';

class Main extends React.Component {





  render() {
    return (
      //<> </> are fragments which act as a parent.


      <>
        <Gallery galleryChange={this.props.galleryChange} />
        <Row sm={1} md={2} lg={4} xl={5} className="g-2">



          {this.props.data.map(hornedObject =>
            <HornedBeast
              title={hornedObject.title}
              imageUrl={hornedObject.image_url}
              description={hornedObject.description}
              handleOpen={this.props.handleOpen}
              key={hornedObject._id} />

          )}

        </Row>
      </>
    )


  }
}

export default Main;
