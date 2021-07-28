import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="container">
      <header>
        <h1>My ToDo list</h1>
    </header>

    <Form />

    <TodoList />
    </div>
  );
}

export default App;
