import {Route, Routes, useNavigate, useParams} from "react-router";
import App from "./App";
import MainPage from "./pages/mainPage/mainPage.page";
import { useEffect } from "react";
import RateLimitPage from "./pages/rateLimitPage/RateLimitPage.page";


const Router = ()=>{
    const param = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if(!(param['*']==='type1' ||
            param['*'] === 'type2' ||
            param['*'] === 'type3')){
           navigate("type1");
        }
    }, []);
    return (
        <Routes>
            <Route path="/*"   element={<App/>}>
                <Route path = "type1" index={true} element={<MainPage />} />
                <Route path = "type2"  element={<MainPage />} />
                <Route path = "type3"  element={<MainPage />} />
                <Route path= ":checkRateLimit" element={<RateLimitPage />} />
            </Route>
        </Routes>
    )
}


export default Router