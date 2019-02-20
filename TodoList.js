class TodoList extends Component {

    constructore(props) {
        super(props);
        this.addItem=this.addItem.bind(this);
    }

    return <li key={item.key}>{item.text}</li>    addItem(e) {
        
    }

    render() {
      return (
        <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.addItem}>
              <input placeholder="enter task">
              </input>
              <button type="submit">add</button>
            </form>
          
</div>
        </div>
      );
    }
  }
   blah