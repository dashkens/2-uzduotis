import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

export default function RootLayout() {
    return (
        <div className="root-layout">
        <header>
        <h1>My Board Games API</h1>

            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='boardgames'>Board games</NavLink>
                <NavLink to='boardgames/create-boardgame'>Add new board game</NavLink>
            </nav>
        </header>
        <Breadcrumbs/>
        <main>
            <Outlet/>
        </main>
        
        </div>
    )
}
