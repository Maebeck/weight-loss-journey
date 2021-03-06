import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
function Dashboard() {
    const { user } = useAuth0();
    const {name, picture, email } = user;
    return (
        <div>
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
        </div>

    )
};

export default Dashboard;