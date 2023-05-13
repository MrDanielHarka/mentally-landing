import './App.css';
import { Chat } from './components/Chat';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <>
      <div className="container">
        <Chat />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
