import React, { useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom'
import HomeWrapper from './layout/HomeWrapper';
import LoginWrapper from './layout/LoginWrapper';
import ErrorPage from './routes/ErrorPage';


const App = () => {
    const location = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
        if (!location.pathname || location.pathname === "/") {
            navigate("/")
        }
    }, [location])

    const LoginWrapperRoutes = ["/login", "/register", "/check-email", "/careset-passwordrt", "/verification", "/create-password"]
    const isLoginRoute = LoginWrapperRoutes.includes(location.pathname);

    return (
        <>
            <ToastContainer position='top-right' />

            {isLoginRoute ?
                <LoginWrapper />
                :
                <HomeWrapper />
            }
        </>
    )
}

export default App