
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { useTodos } from "../hooks";
export const TodoApp = () => {

  //useTodo
  //todos, handleNewTodo, handleDeleteTodo, handleToogleTodo

  const {todos, todosCount,pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToogleTodo} = useTodos()

  return (
    <>
      <h1>
        TodoApp {todosCount}, <small>Pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToogleTodo}/>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
