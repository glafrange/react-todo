var React = require('react');
var ReactDOM = require('react-dom');
require('./css/todoItem.css');

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  };

  //render
  render() {
    return(
      <li>
        <div className="todo-item">
          <span className="item-name" ref="todoDisplay" onDoubleClick={this.handleEdit}>{this.props.todo}</span>
          <input className="item-input" ref="editField" onBlur={this.handleSubmit} onKeyDown={this.handleKeyDown}/>
          <span className="item-delete" onClick={this.handleDelete}> X</span>
        </div>
      </li>
    );
  };

  //custom functions
  handleDelete() {
    this.props.onDelete(this.props.todo);
  };

  handleEdit(e) {
    e.currentTarget.style.display = "none";
    var editField = ReactDOM.findDOMNode(this.refs.editField);
    editField.value = e.currentTarget.innerHTML;
    editField.style.display = "block";
  }

  handleSubmit(e) {
    e.currentTarget.style.display = "none";
    var todoDisplay = ReactDOM.findDOMNode(this.refs.todoDisplay);
    todoDisplay.innerHTML = e.currentTarget.value;
    todoDisplay.style.display = "block";
  }

  handleKeyDown(e) {
    if (e.which === 13) {
      this.handleSubmit(e);
    }
  }
};

module.exports = TodoItem;