import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import SignUpForm from "../components/signUp";
import LoginForm from "../components/login";


const SignUp = () => {
    const [toggleForm, setToggleForm] = useState(true);
    const formMode = () => {
        setToggleForm(!toggleForm);
    }
    return (
        <>
            {toggleForm ? (
                <LoginForm toggle={() => formMode()}/>
                ) : 
                (<SignUpForm toggle={() => formMode()}/>)}
            
        </>
    );
};

export default withRouter(SignUp);