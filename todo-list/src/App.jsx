import { Component } from "react";
import "./App.css";

class Apps extends Component {
    constructor() {
        super();

        this.state = {
            text: "",
            array: [],
        };

        // Binding methods
        this.addItem = this.addItem.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.updatefn = this.updatefn.bind(this);
        this.deletefn = this.deletefn.bind(this);
    }

    addItem(event) {
        let todoText = event.target.value;
        this.setState({ text: todoText });
    }

    addTodo() {
        let oldContent = this.state.array;
        let content = this.state.text;
        let modifiedArray = [...oldContent, content];
        this.setState({ array: modifiedArray, text: "" });
    }

    updatefn(index) {
        let newContent = prompt("Enter new todo..");
        let updatedArray = [...this.state.array];
        updatedArray[index] = newContent;
        this.setState({ array: updatedArray });
    }

    deletefn(id) {
        let filteredArray = this.state.array.filter((ele, ind) => id !== ind);
        this.setState({ array: filteredArray });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Type here"
                    className="textbox"
                    onChange={this.addItem}
                />
                <button onClick={this.addTodo}>Add Item</button>

                {this.state.array.map((element, index) => (
                    <div key={index}>
                        <h1>{element}</h1>
                        <button onClick={() => this.updatefn(index)}>Update</button>
                        <button onClick={() => this.deletefn(index)}>Delete</button>
                    </div>
                ))}
            </div>
        );
    }
}

export default Apps;