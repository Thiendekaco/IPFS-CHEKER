
import './App.css';
import MainPage from "./pages/mainPage/mainPage.page";
import { Outlet } from "react-router";
import { CheckRareLimitClass } from "./class/checkRareLimit.class";
import {useEffect} from "react";





function App() {

    return (
        <div className={'app_content'}>
            <Outlet />
        </div>
    );
}

export default App;
