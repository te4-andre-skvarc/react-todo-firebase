import React from "react"; 
import './App.css';
import TodoForm from "./components/TodoForm"
import Handler from "./components/index";
import About from "./components/About";
import TodoList from './components/TodoList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  function Home() {
    return <h2>Home</h2>;
  }
  
  
  function Users() {
    return <h2>Users</h2>;
  }

  return (
    <div className="App">
      <Router>
      <div className="routebox">
        <nav>
            <p><Link to="/">Home</Link></p><p><Link to="/about">About</Link></p> <p><Link to="/users">Users</Link></p>  
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about" component= { About}>
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
      <header className="App-header">
        <p>React Todo</p>
        <TodoForm />
        < Handler />
        <TodoList />
      </header>
    </div> 
  );
}

export default App;
