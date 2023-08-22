import {Route, Routes, useNavigate, useParams} from "react-router";
import App from "./App";
import MainPage from "./pages/mainPage.page";
import { useEffect } from "react";


const Router = ()=>{
    const param = useParams();
    const naviagte = useNavigate();
    // useEffect(() => {
    //     if(!(param['*']?.includes('type1') ||
    //         param['*']?.includes('type2') ||
    //         param['*']?.includes('type3'))){
    //        naviagte("type1");
    //     }
    // }, []);
    return (
        <Routes>
            <Route path="/*"   element={<App/>}>
                <Route path = "type1" index={true} element={<MainPage />} />
                <Route path = "type2"  element={<MainPage />} />
                <Route path = "type3"  element={<MainPage />} />
            </Route>
        </Routes>
    )
}


export default Router