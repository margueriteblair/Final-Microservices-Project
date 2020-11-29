import './App.css';
import './Components/Navbar'
import AppRouter from './Components/AppRouter';
import LoggedInContextProvider from './Contexts/LoggedInContext';

function App() {
  return (
  <div>
    <LoggedInContextProvider>
    <AppRouter/>
    </LoggedInContextProvider>
  </div>
  );
}

export default App;
