import React from 'react';
import Jumbotron from '../components/HomePage/Jumbotron';
import Cards from '../components/HomePage/Cards';
import './home.css';

function Home () {
    return (
   
        <div class='home'>
        <Jumbotron />
        <Cards />
        </div>
       
    )
    }

    export default Home;