
import './App.css';
import MainPage from "./pages/mainPage.page";
import { Outlet } from "react-router";





function App() {
    return (
            <div className={'app_content'}>
                <Outlet />
            </div>
    );
}

export default App;
