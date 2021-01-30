import logo from './logo.svg';
import './App.css';


const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div>
      { task('oi') }
    </div>
  );
}

export default App;
