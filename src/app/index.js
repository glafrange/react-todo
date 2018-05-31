var React = require('react');
var ReactDOM = require('react-dom');

// Create Component
class TodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers'],
      age: 30
    };
  };
  render(){
    var todos = this.state.todos;
    todos = todos.map(todo => <TodoItem todo={todo} />);
    return(
      <div id="todo-list">
        <p>The busiest people have the most leisure...</p>
        <ul>{todos}</ul>
      </div>
    );
  };// Render
};

class TodoItem extends React.Component {
  render() {
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.todo}</span>
        </div>
      </li>
    );
  };
}


// Put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById("todo-wrapper"));