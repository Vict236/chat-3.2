import React from "react";
import { Outlet } from "react-router-dom";


return (
    <>
        <header >
            <div>
                <img src={logoQ} alt="logoQ" className="logoQ" />
            </div>
            <LogOutButton id="logOutButton" onClick={handleClick}>
                Logout
            </LogOutButton>

        </header>
        <Outlet />
    </>
)


export { Header }
