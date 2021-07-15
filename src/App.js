import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Signup from './pages/Signup';
import Login from './pages/Login'
import Home from './pages/Home'
import CreateQuiz from './pages/CreateQuiz';
import AttemptQuiz from './pages/AttemptQuiz';
import ThankYou from './pages/ThankYou';
import QuizCreated from './pages/QuizCreated';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/quiz/create" component={CreateQuiz}></Route>
          <Route exact path='/quiz/attempt/:id/submitted' component={ThankYou}></Route>
          <Route exath path='/quiz/attempt/:id' component={AttemptQuiz}></Route>
          <Route exact path='/quiz/create/:id/created' component={QuizCreated}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
