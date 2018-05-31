var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css')
import {Router, Route, browserHistory, Link} from 'react-router';

// Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');


class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <Router history={browserHistory}>
        <Route path={'/'} component={TodoComponent}></Route>
        <Route path={'/about'} component={About}></Route>
      </Router>
    );
  }
}

// Create Component
class TodoComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers'],
      age: 30
    };
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
  };
  
  // Render
  render(){
    var todos = this.state.todos;
    todos = todos.map(function(todo, index) {
      return(
        <TodoItem todo={todo} key={index} onDelete={this.onDelete}/>
      );
    }.bind(this));
    return(
      <div id="todo-list">
        <Link to={'/about'}>About</Link>
        <p>The busiest people have the most leisure...</p>
        <ul>{todos}</ul>
        <AddItem onAdd={this.onAdd}/>
      </div>
    );
  };

  // custom functions
  onDelete(item) {
    var updatedTodos = this.state.todos.filter(function(val, index) {
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  };

  onAdd(item) {
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    });
  };

  // lifecycle functions
  componentWillMount() {
    console.log('component will mount');
  };

  componentDidMount() {
    console.log('component did mount');
    // any grabbing of external data
  };

  componentWillUpdate() {
    console.log('component will update');
  }

};

// Put component into html page
ReactDOM.render(<App />, document.getElementById("todo-wrapper"));