/* 
Geben Sie die Todos aus dem Array in Form von einer Tabelle aus:


    */

import Rating from "./Rating";

export default function Todos() {
    let todos = [
        {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false,
            rating: 3

        },
        {
            userId: 1,
            id: 2,
            title: "quis ut nam facilis et officia qui",
            completed: false,
            rating: 4
        },
        {
            userId: 1,
            id: 3,
            title: "fugiat veniam minus",
            completed: false,
            rating: 5
        },
        {
            userId: 1,
            id: 4,
            title: "et porro tempora",
            completed: true,
            rating: 3
        }
    ]

    const todosTable = <table>
        <tbody>
            {todos.map(todo => {
                return <tr key={todo.id}>
                    <td>{todo.userId}</td>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>{todo.completed}</td>
                    <td>
                        <Rating starsNumber={todo.rating}/>
                    </td>
                </tr>
            })}
        </tbody>
    </table>
    return todosTable;

}