import {Outlet} from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar, SmallSidebar } from '../components';
import NavBar from '../components/Navbar';
import { useState, createContext, useContext } from 'react';


const DashboardContext = createContext();

const DashboardLayout = () => {
    // temp to be changed when server is setup
    const user = {name: 'john'}
    const [showSidebar, setShowSidebar] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleDarkTheme = () => {
        console.log('toggle dark theme');
    }

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    const logoutUser = async () => {
        console.log('logout user');
    }

    return (
        <DashboardContext.Provider value={{
            user, 
            showSidebar, 
            isDarkTheme, 
            toggleDarkTheme, 
            toggleSidebar, 
            logoutUser}}
        >
            <Wrapper>
                <main className='dashboard'>
                    <SmallSidebar />
                    <BigSidebar />
                    <div>
                        <NavBar />
                        <div className="dashboard-page">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </Wrapper>
        </DashboardContext.Provider>
        
    )
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;