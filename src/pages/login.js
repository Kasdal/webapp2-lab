import React from "react";
import { withRouter } from "react-router-dom";
import LoginForm from "../components/login";


const Login = () => {

    return (
        <>
            <LoginForm  />
        </>
    );
};

export default withRouter(Login)