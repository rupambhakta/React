import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header"
import Footer from "./components/footer/Footer"
import authService from './appwrite/auth'
import Logo from "./components/Logo"
import { useNavigate } from "react-router-dom";

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        authService
            .getCurrentUser()
            .then((userData) => {
                if (userData) dispatch(login({ userData }));
                else {
                    dispatch(logout())
                    navigate("/login")
                }
            })
            .catch((error) => {
                console.error("Error fetching user:", error);
                dispatch(logout());
                navigate("/login"); // Redirect on error
            })
            .finally(() => setLoading(false));
    }, [dispatch,navigate]);

    return !loading ? (
        <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
            <div className="w-full block">
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
            <div className="w-full block">
                <Footer />
            </div>
        </div>
    ) : null;
}

export default App