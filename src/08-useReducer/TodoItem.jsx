export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span
          className={`align-self-center ${
            todo.done ? "text-decoration-line-through" : ""
          } non-selectable`}
          onClick={() => {
            onToggleTodo(todo.id);
          }}
          style={{ cursor: "pointer" }}
        >
          {todo.description}
        </span>

        <button
          onClick={() => onDeleteTodo(todo.id)}
          className="btn btn-danger"
        >
          Borrar
        </button>
      </li>
    </>
  );
};
