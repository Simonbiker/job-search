import {Outlet} from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar, SmallSidebar } from '../components';
import NavBar from '../components/Navbar';

const DashboardLayout = () => {
    return (
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
    )
};

export default DashboardLayout;