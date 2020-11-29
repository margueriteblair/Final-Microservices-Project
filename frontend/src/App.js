import './App.css';
import './Components/Navbar'
import Navbar from './Components/Navbar';
import Input from './Components/Input';
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
