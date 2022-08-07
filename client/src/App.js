import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [id,setId] = useLocalStorage('id');

  return (
    <div className="App">
      {id ? <Dashboard /> : <Login setId={setId} />}
    </div>
  );
}

export default App;
