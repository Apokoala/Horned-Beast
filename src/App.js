
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import Form from 'react-bootstrap';
import data from './data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      handleSelection: {},
      beasts: data,

    }
  }


  handleOpen = (beast) => this.setState ({handleSelection: beast, show: true});
  handleClose = () => this.setState({ show: false });
  galleryChange = (numHorns) => this.setState({beasts: numHorns})

  // sendHorns = (event) =>{
  // event.preventDefault();
  // const select = Number(event.target.value);
  // let element
  // select ? element = data.filter(beast => beast.horns === select) : element = data;
  // this.setstate({beasts:element});
  // }


  render() {
    return (
      <div className="App">
        <Header />>

        <Main
          handleOpen = {this.handleOpen}
          data={this.state.beasts}
          galleryChange={this.galleryChange}
        />
        <SelectedBeast
          show={this.state.show}
          handleSelection={this.state.handleSelection}
          handleClose={this.handleClose}/>
        <Footer />
      </div>
    );
  }
}


export default App;
