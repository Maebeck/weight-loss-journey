import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import RecipeTable from '../components/Dashboard/recipeTable';
import JournalTable from '../components/Dashboard/journalTable';
function Dashboard() {
    const { user } = useAuth0();
    const {name, picture, email } = user;
    return (
        <div className ="Dashboard">
            <div>
                <div>
                <img src={picture} alt='Profile'/>
                </div>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>

                <pre>{JSON.stringify(user,null,2)}</pre>
                </div>
            </div>
            
            
            <RecipeTable />
            <JournalTable />
        </div>
    
    )
};

export default Dashboard;