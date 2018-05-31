var React = require('react');
var ReactDOM = require('react-dom');

// Create Component
class TodoComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers'],
      age: 30
    };
    this.onDelete = this.onDelete.bind(this);
  };
  render(){
    var todos = this.state.todos;
    todos = todos.map(function(todo, index) {
      return(
        <TodoItem todo={todo} key={index} onDelete={this.onDelete}/>
      );
    }.bind(this));
    return(
      <div id="todo-list">
        <p>The busiest people have the most leisure...</p>
        <ul>{todos}</ul>
      </div>
    );
  };// Render

  // custom functions
  onDelete(item) {
    var updatedTodos = this.state.todos.filter(function(val, index) {
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  };

};

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
  };

  //render
  render() {
    return(
      <li>
        <div className="todo-item">
          <span className="item-name" onClick={this.tst}>{this.props.todo}</span>
          <span className="item-delete" onClick={this.handleDelete}> X</span>
        </div>
      </li>
    );
  };

  //custom functions
  handleDelete() {
    this.props.onDelete(this.props.todo);
  };

};


// Put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById("todo-wrapper"));