var React = require('react');
var ReactDOM = require('react-dom');

// Create Component
class TodoComponent extends React.Component {
  render(){
    return(
      <h1>Helooooooooo</h1>
    );
  }
};

// Put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById("todo-wrapper"));