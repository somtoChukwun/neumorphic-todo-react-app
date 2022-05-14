
import { Divider, IconButton, Paper } from '@material-ui/core';
import './components/RootStyles.css'
import './App.css';
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo';
import ListTodos from './components/ListTodos';
import RealtimeTodos from './components/RealtimeTodos';
import AppHeader from './components/AppHeader'
import CreateIcon from '@material-ui/icons/Create';
import AppBadge from './components/AppBadge';


function App() {
  return (
    <div className="App">
      <div 
      className='App-wrapper'
      >
         <AppBadge />
        <AppHeader />
      <div className='App-body'>
        <AddTodo />
        <Divider className='divider__head'/>
        <RealtimeTodos />
        <Divider className='divider__head'/>
        <ListTodos /> 
        <Divider className='divider__head'/>
        <EditTodo />
      </div>
      <div className='App-credits'>
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </div>
    </div>
    </div>
  );
}

export default App;
