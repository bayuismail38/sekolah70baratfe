import React from "react";
import AuthProvider from "../components/AuthProvider";

const dashboardPage = () => {
    return (
        <AuthProvider>
            Dashboard
        </AuthProvider>
    );
}

export default dashboardPage