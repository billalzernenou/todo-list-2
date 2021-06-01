import { useState } from "react";
import uniqueid from "uniqueid";

const AddTask = ({ tasks, setTasks }) => {
  const [input, setInput] = useState("");

  // controlled form input
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // make sure that input is not empty
    if ((e.target.value = "")) {
      alert("veuillez renseigner la tache à ajouter");
    } else {
      const newTasks = [...tasks];
      const newTask = {
        id: uniqueid(),
        name: input,
        completed: false,
      };
      console.log(newTask);
      newTasks.unshift(newTask);
      setTasks(newTasks);
      setInput("");
    }
  };

  return (
    <div className="add-task">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nouvelle tache"
          type="text"
          value={input}
          onChange={(e) => {
            handleChange(e);
          }}
          required
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddTask;
