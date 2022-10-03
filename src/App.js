
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      handleSelection: {}
    }
  }

  handleOpen = (handleSelection) => this.setState ({ show: true, handleSelection });
  handleClose = () => this.setState({ show: false });


  render() {
    return (
      <div className="App">
        <Header />
        <Main
          data={data}
          handleOpen = {this.handleOpen}
        />
        <SelectedBeast
          handleClose={this.handleClose}
          show={this.state.show}
          handleSelection={this.state.handleSelection}/>
        <Footer />
      </div>
    );
  }
}

export default App;
