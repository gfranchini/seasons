import React from 'react';
import ReactDOM from 'react-dom';

// Class Component
class App extends React.Component {
  // This is a javascript thing rather than a React thing. Like initializing a class in Ruby.
  // super overrides the React.Component constructor.
  constructor(props) {
    super(props);

    // This is a javascript object. We are initializing its own state. This is the
    // time we do direct assignment to this.state.
    this.state = { lat: 'loading...', errorMessage: '' };

    // Getting user's location.
    window.navigator.geolocation.getCurrentPosition(
      //we called setState to update our position object. We did not do direct assignment!!!
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.Message });
      }
    );
  };

  // React says that we must define render!!
  render() {
    if(this.state.errorMessage && !this.state.lat) {
      return(<div>Error: {this.state.errorMessage}</div>);
    };

    if(!this.state.errorMessage && this.state.lat){
      return(<div>Latitude: {this.state.lat}</div>);
    };

    return(<div>Loading....</div>);
  };
};

ReactDOM.render(<App />, document.querySelector('#root'));
