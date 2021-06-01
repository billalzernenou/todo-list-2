import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToDo = ({ task, tasks, setTasks }) => {
  // validate a task
  const ToggleValidate = () => {
    const newTasks = [...tasks];
    for (let i = 0; i < newTasks.length; i++) {
      if (newTasks[i].id === task.id) {
        newTasks[i].completed = !newTasks[i].completed;
      }
    }
    setTasks(newTasks);
  };

  // delete a task
  const handleDelete = () => {
    let newTasks = [...tasks];
    newTasks = newTasks.filter((elem) => task.id !== elem.id);
    setTasks(newTasks);
  };

  return (
    <div className={task.completed ? "task-validated to-do" : "to-do"}>
      <div> {task.name}</div>
      <div>
        <FontAwesomeIcon
          icon="check"
          size="lg"
          color={task.completed ? "green" : "grey"}
          className="buttons"
          onClick={ToggleValidate}
        />
        <FontAwesomeIcon
          icon="trash-alt"
          size="lg"
          className="buttons"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default ToDo;
