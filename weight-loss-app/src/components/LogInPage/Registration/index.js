// import React from 'react';


// class Registration extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             username: '',
//             password: '',
//             weight: '',
//             desiredWeight: '',
//             age: '' 
//         };
//     }

//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value,
//         });
//     }

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      Sign Up
    </button>
  );
};

export default SignupButton;