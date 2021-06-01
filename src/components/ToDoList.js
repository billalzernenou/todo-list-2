import ToDo from "../components/ToDo";

const ToDoList = ({ tasks, setTasks }) => {
  return (
    <div className="todo-list">
      {tasks.map((task, index) => {
        return <ToDo task={task} tasks={tasks} setTasks={setTasks} />;
      })}
    </div>
  );
};

export default ToDoList;
