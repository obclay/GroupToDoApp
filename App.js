// import React, { Component } from 'react'
// import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Todo: [
                {title: "", desc: ""}
            ]
        }
        }

    }

    onSubmit = () => {this.addItem}
    entries= () => {this.state.items}

  render() {
    return (
      <div className="App">
      <form>
            <input placeholder="enter task">
            </input>
            <button type="submit">add</button>
        </form>

        <TodoList />
      </div>
    )
  }
}
