import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import chess_logo from '../assets/chess_logo.png';

const Navbar = () => {

    return (
        <ul className={styles.container}>
            <NavLink
                to={'/projects/chess'}
            >
                <img className={styles.logo} src={chess_logo} />
            </NavLink>
            <NavLink
                to={'/projects/chess'}
                end
                className={({ isActive }) =>
                    (isActive ? styles.active : "")}
                style={{ color: 'white', textDecoration: 'none' }}
            >
                <div>Home</div>
            </NavLink>

            <NavLink
                to={'/projects/chess/game'}
                className={({ isActive }) =>
                    (isActive ? styles.active : "")}
                style={{ color: 'white', textDecoration: 'none' }}
            >
                <div>Chess</div>
            </NavLink>

            <NavLink
                to={'/projects/chess/config'}
                end
                className={({ isActive }) =>
                    (isActive ? styles.active : "")}
                style={{ color: 'white', textDecoration: 'none' }}
            >
                <div>Settings</div>
            </NavLink>

            <NavLink
                to={'/projects/chess/about'}
                end
                className={({ isActive }) =>
                    (isActive ? styles.active : "")}
                style={{ color: 'white', textDecoration: 'none' }}
            >
                <div>About</div>
            </NavLink>
        </ul>
    )
}

export default Navbar;

