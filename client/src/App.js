import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import ContactProvider from "./contexts/ContactsProvider";
import ConversationProvider from "./contexts/ConversationProvider";
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [id, setId] = useLocalStorage('id');

  const dashboard = (
    <ContactProvider>
      <ConversationProvider>
        <Dashboard id={id} />
      </ConversationProvider>
    </ContactProvider>
  )

  return (
    <div className="App">
      {id ? dashboard : <Login setId={setId} />}
    </div>
  );
}

export default App;
