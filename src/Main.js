import React from 'react';
import HornedBeast from './HornedBeast';
// import data from './data.json'
import Row from 'react-bootstrap/Row'


class Main extends React.Component {
  render() {
    return (
      //<> </> are fragments which act as a parent.
      <Row sm={1} md={2} lg={4} xl={5}>
        {this.props.data.map(hornedObject => (
            <HornedBeast
            title={hornedObject.title}
            imageUrl={hornedObject.image_url}
            description={hornedObject.description}
            handleOpen = {this.props.handleOpen}/>

        ))}

        {/* <HornedBeast
          title = {"Jackalope!!!"}
          imageUrl = {"https://www.legendsofamerica.com/wp-content/uploads/2017/08/Jackalopepc.jpg"}
          description = {"The mythical creature that was fast as fast can be!"}
        />
        <HornedBeast
          title = {"TIM THE ENCHANTER"}
          imageUrl = {"https://external-preview.redd.it/LIB7fgP5g9c5cY7UNNN9_E1HNfOY1GFnSfjjfC8ZmF8.jpg?auto=webp&s=5b96ab70dcda1f4619a2641b1ffe2516c4a3c100"}
          description = {"There are some, who call him... Tim"}
        /> */}
      </Row>

    )


  }
}

export default Main;
