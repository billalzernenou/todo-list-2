import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ToDoList from "../components/ToDoList";
import AddTask from "../components/AddTask";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="home">
      <Header />
      <div className="container">
        <AddTask tasks={tasks} setTasks={setTasks} />
        <ToDoList tasks={tasks} setTasks={setTasks} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
