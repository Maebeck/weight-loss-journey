import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
// import RecipePage from './pages/RecipePage';
// import JournalPage from '.pages/JournalPage';
import NavBar from './components/NavBar';
// import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <Router>
      <div>
      <NavBar />
          <Switch>
            <Route exact path = '/' component={Home} />
            {/* <Route exact path = '/Recipe' component = {RecipePage} />
            <Route exact path = '/Journal' component = {Journal} /> */}
          </Switch>
      {/* <Footer /> */}
      </div>
    </Router>

  );
}

export default App;
