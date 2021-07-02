import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn'
import Todo from './components/Todo'

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/todo' component={Todo}/>



        </Switch>
      </Router>
    </main>
  );
}

export default App;
