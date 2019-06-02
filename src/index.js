import React from 'react';
import ReactDOM from 'react-dom';

// Class Component
class App extends React.Component {
  // This is a javascript thing rather than a React thing. Like initializing a class in Ruby.
  // super overrides the React.Component constructor.
  constructor(props) {
    super(props);

    // This is a javascript object. We are initializing its own state.
    this.state = { lat: null };
  };

  // React says that we must define render!!
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return(<div>Latitude: </div>);
  };
};

ReactDOM.render(<App />, document.querySelector('#root'));
