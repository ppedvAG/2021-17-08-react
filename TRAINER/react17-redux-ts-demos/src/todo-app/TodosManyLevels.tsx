import React, { Component } from "react";
import Rating from "./Rating";

/* 
Szenario:

Titles von Todos sollen editierbar werden. Die geänderten Titel werden in das Array übernommen.
*/

interface TodoInterface {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
export default class TodosAsClass2 extends Component<{}, { todos: TodoInterface[] }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            todos: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            // .then(json => console.log(json))
            .then(json => this.setState({ todos: json }))
    }
    handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        let newTodos = [...this.state.todos];
        for (let iterator of newTodos) {
            console.log('iterator :>> ', iterator);
            if (iterator.id === +e.currentTarget.id) {
                // if (iterator.id === Number(e.currentTarget.id))      
                iterator.title = e.currentTarget.value;
            }
        }
        this.setState({ todos: newTodos });
    }

    render() {
        const todosTable = <table>
            <tbody>
                {this.state.todos.map(todo => {
                    return <Todo key={todo.id} todo={todo} handleChange={this.handleChange} />
                })}
            </tbody>
        </table>
        return (
            <>
                <div>{todosTable}</div>
            </>
        )
    }
}


export class Todo extends React.Component<{ todo: TodoInterface, handleChange: (e: React.FormEvent<HTMLInputElement>) => void }, {}> {

    render() {
        return (
            <tr>
                <td>{this.props.todo.userId}</td>
                <td>{this.props.todo.id}</td>
                <td>
                    <input type="text" value={this.props.todo.title} id={String(this.props.todo.id)} onChange={this.props.handleChange} />
                </td>
                <td>{this.props.todo.completed}</td>
                <td>
                    {/* <Rating starsNumber={(todo.id < 5) ? todo.id : 5} /> */}
                    <Rating starsNumber={Math.ceil(Math.random() * 5)} />
                </td>
            </tr>)
    }
}
        //     {/* <li key={this.props.todo.id} className={this.props.todo.completed ? 'durchgestrichen' : ''}> */ }
        // {/* in der ID noch string todo für den Fall, wenn weitere inputs mit id angelegt werden, wie z.B. für inputs für die user */ }
        // {/* <input id={'todo' + this.props.todo.id.toString()} type="text" value={this.props.todo.title} onChange={this.props.handleChange}/> */ }
        // {/* <input id={this.props.todo.id.toString()} name={'title'} type="text" value={this.props.todo.title} onChange={this.props.handleChange}/> */ }
        // {/* </li>            */ }