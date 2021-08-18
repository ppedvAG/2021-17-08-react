import { Component } from "react";
import Rating from "./Rating";

/* 
Aufgabe:

Holen Sie Todos, nachdem die Komponente an DOM angeschlossen wurde.
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => console.log(json))
*/

interface TodoInterface {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
export default class TodosAsClass extends Component<{}, { todos: TodoInterface[] }> {
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
    /* renderTable = (table: any) => {
        const todosTable = <table>
            <tbody>
                {this.state.todos.map(todo => {
                    return <tr key={todo.id}>
                        <td>{todo.userId}</td>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed}</td>
                        <td>
                            <Rating starsNumber={todo.rating} />
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
        return todosTable;
    } */

    render() {
        const todosTable = <table>
            <tbody>
                {this.state.todos.map(todo => {
                    return <tr key={todo.id}>
                        <td>{todo.userId}</td>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed}</td>
                        <td>
                            {/* <Rating starsNumber={(todo.id < 5) ? todo.id : 5} /> */}
                            <Rating starsNumber={Math.ceil(Math.random()*5)} />
                        </td>
                    </tr>
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