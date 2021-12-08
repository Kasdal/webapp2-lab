import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import SignUp from "../components/signUp";
import Login from "../components/login";
import SiteHeader from "../components/siteHeader";
import HomePage from "../pages/homePage";

const AuthenticationPage = () => {
    const [user, setUser] = useState('');
    const [toggleForm, setToggleForm] = useState(true);
    const formMode = () => {
        setToggleForm(!toggleForm);
    }

    const userState = () => {
      const data = localStorage.getItem('user');
      const us = data !== null ? JSON.parse(data) : null;
      setUser(us);
    }
    
    useEffect(() => {
      userState();
    }, []);

    return (
        <>
            {user !== null ? (
                <>
                <SiteHeader setUserState={() => setUser(null)} />
                <HomePage />
                </>
            ) : (
                <>
                {toggleForm ? (
                    <Login loggedIn={(user) => setUser(user)} toggle={() => formMode()}/>
                    ) : 
                    (<SignUp toggle={() => formMode()}/>)}
                
            </>
            )}
        </>
        
    );
};

export default withRouter(AuthenticationPage);