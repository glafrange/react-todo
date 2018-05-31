var React = require('react');
require('./css/todoItem.css');

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

module.exports = TodoItem;