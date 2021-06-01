import "./App.css";
import Home from "./containers/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faThList,
  faCheck,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
library.add(faThList, faCheck, faTrashAlt);

function App() {
  return <Home />;
}

export default App;
