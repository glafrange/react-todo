var React = require('react');
var ReactDOM = require('react-dom');

// Create Component
class TodoComponent extends React.Component {
  render(){
    return(
      <div>
        <p><strong>Cheese name: </strong>{this.props.cheese.name}</p>
        <p><strong>Cheese name: </strong>{this.props.cheese.smellFactor}</p>
        <p><strong>Cheese name: </strong>{this.props.cheese.price}</p>
      </div>
    );
  }
};

var myCheese = {name: 'Camembert', smellFactor: 'Extreme pong', price: '3.50'}

// Put component into html page
ReactDOM.render(<TodoComponent msg="I like cheese" cheese={myCheese}/>, document.getElementById("todo-wrapper"));