import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: getls || []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.checkedItem = this.checkedItem.bind(this);
    };

    functionToSetLocalStorage() {
        console.log(this.state.items);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {

            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            }

            this.setState((prevState) => {

                localStorage.setItem('todoEntries', JSON.stringify(prevState.items.concat(newItem)));

                return {
                    items: prevState.items.concat(newItem)
                }
            }, this.functionToSetLocalStorage);

            this._inputElement.value = "";
        }

        e.preventDefault();

    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });
        localStorage.setItem('todoEntries', JSON.stringify(filteredItems));
        this.setState({
            items: filteredItems
        }, this.functionToSetLocalStorage)
    }
    checkedItem() {
        function strikeThrough(text) {
            return text
                .split("")
                .map(char => char + "\u0336")
                .join("")
        }
        return strikeThrough(this.state.items);
    }
    handleChange = () => {
        console.log(this.state.items);
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                            placeholder="Enter Todos!">
                        </input>
                        <button type="submit">Go</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}
                    delete={this.deleteItem} />
            </div>
        );
    }
};

let getls = JSON.parse(localStorage.getItem('todoEntries'));

export default TodoList;  