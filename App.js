import './App.css'
import { FcHome } from "react-icons/fc";
import Form from './components/Form';
function App() {
  return (
    // am adaugat clasa de bootstrap ('container'), margin top and bottom din axa y, 1 rem = 16px
    <div className="App container" style= {{maxWidth: 500, margin: "1 rem auto"}}> 
      
      <h1 className="display-1 my-5"> <FcHome /> {""}
       Mortgage Calculator</h1>
       <Form />
    </div>
  );
}

export default App;
