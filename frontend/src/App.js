

import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Books from './components/Book/Books';
import Navbar from './components/Navbar/Navbar';
import AddBook from './components/Book/AddBook';
import RegisterUser from './components/users/RegisterUser';
import LoginUser from './components/users/LoginUser';

function App() {
  return (
    <>
      <Router>
         <Navbar />
            <Switch>
              <Route exact path='/books'component={Books} />
              <Route exact path='/addbook'component={AddBook} />
              <Route exact path='/register'component={RegisterUser} />
              <Route exact path='/login'component={LoginUser} />
            </Switch>
      </Router>

     </>
  );
}

export default App;
