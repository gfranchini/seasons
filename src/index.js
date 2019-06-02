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
    this.state = { lat: null };

    // Getting user's location.
    window.navigator.geolocation.getCurrentPosition(
      //we called setState to update our object. We did not do direct assignment!!!
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
  };

  // React says that we must define render!!
  render() {
    return(<div>Latitude: {this.state.lat}</div>);
  };
};

ReactDOM.render(<App />, document.querySelector('#root'));
