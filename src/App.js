
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/service'>
              <Services></Services>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          
        </Router>

    </div>
  );
}

export default App;
