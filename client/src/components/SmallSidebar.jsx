import Wrapper from "../assets/wrappers/SmallSidebar"
import { useDashboardContext } from "../pages/DashboardLayout";


const SmallSidebar = () => {
    const data = useDashboardContext()
    console.log('DATA' ,data);
    return <Wrapper>SmallSideBar</Wrapper>
}

export default SmallSidebar;