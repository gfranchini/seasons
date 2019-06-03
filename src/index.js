import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

  // We are allowed to declare state without a constructor because babel does this for us. Remember the babels site example.
  state = { lat: null, errorMessage: ''};

  componentDidMount(){
    // Getting user's location.
    window.navigator.geolocation.getCurrentPosition(
      //we called setState to update our position object. We did not do direct assignment!!!
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // Helper method we created to keep our conditional logic
  renderContent() {
    if(this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return(<Spinner message="Please accept the location request" />);
  }

  // React says that we must define render!!
  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  };
};

ReactDOM.render(<App />, document.querySelector('#root'));
