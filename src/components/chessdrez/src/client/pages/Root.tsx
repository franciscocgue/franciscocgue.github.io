import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styles from './Root.module.css';
import { useNavStore } from '../../../../../store/navStore';

const Root = () => {

    const isNavbarCollapsed = useNavStore(state => state.isMainNavbarCollapsed)
    return <div className={`${styles.container} ${isNavbarCollapsed ? styles['container-nvcollapsed'] : styles['container-nvexpanded']}`}>
        <Navbar />
        {<Outlet />}
    </div>
}

export default Root;