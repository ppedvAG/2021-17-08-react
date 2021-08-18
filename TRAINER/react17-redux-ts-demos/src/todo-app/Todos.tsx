// import TodosAsClass from "./TodosAsClass";
import TodosAsFunction from "./TodosAsFunction";
import TodosAsClass2 from "./TodosManyLevels";

export default function Todos() {
    return (
        <>
            <TodosAsFunction />
            {/* <TodosAsClass /> */}
            <TodosAsClass2 />
        </>
    )
}

