import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Dashboard, Navbar } from './components';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/:ruleId' element={<Dashboard/>}/>
      </Routes>
      <Dashboard/>
    </div>
  );
}

export default App;
