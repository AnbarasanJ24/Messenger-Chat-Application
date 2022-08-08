import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import ContactContextProvider from "./contexts/ContactContextProvider";
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [id,setId] = useLocalStorage('id');

  const dashboard = (
    <ContactContextProvider><Dashboard id={id} /> </ContactContextProvider>
  )

  return (
    <div className="App">
      {id ? dashboard: <Login setId={setId} />}
    </div>
  );
}

export default App;
