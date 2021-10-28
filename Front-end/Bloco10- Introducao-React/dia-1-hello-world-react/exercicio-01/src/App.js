// import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li key={value} >{value}</li>
  );
}

function App() {
  const arrTask = ['Correr', 'Estudar', 'Almoçar', 'Revisar Matéria'];
  return arrTask.map((task) => Task(task));
}

export default App;
