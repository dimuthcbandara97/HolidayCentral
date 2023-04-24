import { Outlet } from "react-router-dom";
import HeaderItem from "./Header";

export default function Layout(){
    return(
        <div>
            <HeaderItem/>
            <Outlet/>
        </div>
    )
}