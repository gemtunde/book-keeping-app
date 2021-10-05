

import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Books from './components/Book/Books';
import Navbar from './components/Navbar/Navbar';
import AddBook from './components/Book/AddBook';

function App() {
  return (
    <>
      <Router>
         <Navbar />
            <Switch>
              <Route exact path='/books'component={Books} />
              <Route exact path='/addbook'component={AddBook} />
            </Switch>
      </Router>

     </>
  );
}

export default App;
