import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import MealPlan from './pages/MealPlan';
// import JournalPage from '.pages/JournalPage';
import Navigation from './components/NavBar';
// import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import JournalInfo from './components/FoodJournal/JournalInfo';
import Dashboard from './pages/UserPage';
import ProtectedRoute from './auth/protected-route';


function App() {
  return (
    <Router>
      <div>
      <Navigation />
          <Switch>
            <Route exact path = '/' component={Home} />
            <ProtectedRoute exact path = '/journal' component = {JournalInfo} />
            <ProtectedRoute exact path = '/Dashboard' component = {Dashboard} />
            <ProtectedRoute exact path = '/mealplan' component = {MealPlan} />
          </Switch>
      {/* <Footer /> */}
      </div>
    </Router>

  );
}

export default App;
