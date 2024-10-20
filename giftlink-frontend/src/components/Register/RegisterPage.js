import React, { useState } from 'react';
import {urlConfig} from '../../config';
import { useAppContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

function RegisterPage() {
    const navigate = useNavigate();
    const { setIsLoggedIn } = useAppContext();
    const [showerr, setShowerr] = useState('');
    //insert code here to create useState hook variables for firstName, lastName, email, password
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //{{Insert code here}} //Task 1: Import urlConfig from `giftlink-frontend/src/config.js`
    //{{Insert code here}} //Task 2: Import useAppContext `giftlink-frontend/context/AuthContext.js`
    //{{Insert code here}} //Task 3: Import useNavigate from `react-router-dom` to handle navigation after successful registration.
    
    
    //Do these tasks inside the RegisterPage function, after the useStates definition
    //{{Insert code here}} //Task 4: Include a state for error message.
    //{{Insert code here}} //Task 5: Create a local variable for `navigate`   and `setIsLoggedIn`.
    

    // insert code here to create handleRegister function and include console.log
    const handleRegister = async () => {
         try{
            const response = await fetch(`${urlConfig.backendUrl}/api/auth/register`, {
                method: "post",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                })
        })
        }catch (e) {
            console.log("Error fetching details: " + e.message);
        }
        const json = await response.json();
                if (json.authtoken) {
                    sessionStorage.setItem('auth-token', json.authtoken);
                    sessionStorage.setItem('name', firstName);
                    sessionStorage.setItem('email', json.email);
                    setIsLoggedIn(true);
                    navigate('/app')
                }
                // Task 3: Set the state of user to logged in using the `useAppContext`.
                // Task 4: Navigate to the MainPage after logging in.
                // Task 5: Set an error message if the registration fails.
                // Task 6: Display error message to enduser.
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="register-card p-4 border rounded">
                        <h2 className="text-center mb-4 font-weight-bold">Register</h2>

                        {/* insert code here to create input elements for all the variables - firstName, lastName, email, password */}
                        <div className="mb-4">

                            <label htmlFor="firstName" className="form label"> FirstName</label><br/>
                            <input
                            id="firstName"
                            type="text"
                            className="form-control"
                            placeholder="Enter your firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">

                            <label htmlFor="lastName" className="form label"> LastName</label><br/>
                            <input
                            id="lastName"
                            type="text"
                            className="form-control"
                            placeholder="Enter your lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">

                            <label htmlFor="email" className="form label"> Email</label><br/>
                            <input
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">

                            <label htmlFor="password" className="form label"> Password</label><br/>
                            <input
                            id="password"
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {/* insert code here to create a button that performs the `handleRegister` function on click */}
                        <button className="btn btn-primary w-100 mb-3" onClick={handleRegister}>Register</button>
                        <p className="mt-4 text-center">
                            Already a member? <a href="/app/login" className="text-primary">Login</a>
                        </p>

                    </div>
                </div>
            </div>
        </div>

    )//end of return
}

export default RegisterPage;