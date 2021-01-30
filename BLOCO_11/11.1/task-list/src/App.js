import './App.css';


const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasksArray = ['Estudar', 'trabalhar', 'lala', 'teste'];

function listTasks () {
  return tasksArray.map(element => task(element));
}

function App() {
  return (
    <ul>
      { listTasks() }
    </ul>
  );
}

export default App;
