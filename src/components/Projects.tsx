import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Projects = () => {
    return (
        <div>
            {/* <h1>Projetcs</h1>
            <NavLink
                to={'/projects/chess'}>
                Proj #1
            </NavLink> */}
            <div><Outlet /></div>
        </div>
    )
}

export default Projects;