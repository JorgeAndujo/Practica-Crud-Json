import logo from './logo.svg';
import './App.css';
import CrudApp from './components/CrudApp';
import CrudApi from './components/CrudApi';

function App() {
  return (
    <div className="App">
      <CrudApi />
      {/* <CrudApp /> */}
    </div>
  );
}

export default App;
