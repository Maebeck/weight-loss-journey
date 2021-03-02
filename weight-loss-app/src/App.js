import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
// import RecipePage from './pages/RecipePage';
// import JournalPage from '.pages/JournalPage';
import Navigation from './components/NavBar';
// import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import JournalInfo from './components/FoodJournal/JournalInfo';
import Dashboard from './components/LogInPage/Dashboard';
// import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';


function App() {
  // const [ token, setToken ] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <Router>
      <div>
      <Navigation />
          <Switch>
            <Route exact path = '/' component={Home} />
            <Route exact path = '/journal' component = {JournalInfo} />
            <Route exact path = '/dashboard' component = {Dashboard} />
            
            {/* <Route exact path = '/Recipe' component = {RecipePage} />
            <Route exact path = '/Journal' component = {Journal} /> */}
          </Switch>
      {/* <Footer /> */}
      </div>
    </Router>

  );
}

export default App;
