import React, { Dispatch, useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { BsJournalCode } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiGame } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

import { NavLink } from 'react-router-dom';
import { useNavStore } from '../store/navStore';

import { useLocation } from 'react-router-dom';

interface Props {
    keywords: String[],
    onTopicChange: Dispatch<any>,
};

const Navbar = ({ keywords, onTopicChange }: Props) => {

    // search key
    const [search, setSearch] = useState('');
    // list of filtered items
    const [filtered, setFiltered] = useState(keywords || [])
    // selected topic
    // const [topic, setTopic] = useState('');
    const topic = useNavStore(state => state.topic);
    const setTopic = useNavStore(state => state.setTopic);
    const isNavbarCollapsed = useNavStore(state => state.isMainNavbarCollapsed)
    const toggleIsNavbarCollapsed = useNavStore(state => state.toggleIsMainNavbarCollapsed);
    // navbar size
    const [isCollapseNavbar, setIsCollapseNavbar] = useState(true);


    // update topics based on search
    useEffect(() => {
        if (Array.isArray(keywords) && keywords.length) {
            if (search !== '') {
                let p: String[] = [];
                keywords.forEach(item => {
                    if (item.toLowerCase().indexOf(search.toLowerCase()) > -1) {
                        p.push(item);
                    }
                });
                setFiltered(p);
            } else {
                setFiltered(keywords || []);
            }
        } else {
            setFiltered([]);
        }
    }, [search]);

    // on search value changed
    const onChangeHandler = (e: any) => {
        setSearch(e.target.value)
    }

    const pathname = useLocation().pathname;
    const currSection = pathname.includes('projects') ? 'Hobby Projects'
        : pathname.includes('journal') ? 'Code Journal' : 'Home'

    return (
        <nav className={styles.container}>
            <div className={styles['menu-icon']}>
                <span onClick={(e) => { toggleIsNavbarCollapsed() }}><GiHamburgerMenu /></span>
                {isNavbarCollapsed && <span className={styles.selection} onClick={(e) => { toggleIsNavbarCollapsed() }}>{currSection}</span>}
            </div>
            <div className={`${styles.content} ${isNavbarCollapsed ? styles.collapsed : ''}`}>
                <ul>
                    <li className={styles.section}>

                        <NavLink
                            to={'/'}
                            // className={({ isActive }) =>
                            //     (isActive ? styles.selected : styles.selected)}
                            style={({ isActive }) =>
                            (isActive ? {
                                // textDecoration: 'none',
                                backgroundColor: 'white',
                                color: 'black',
                                textDecoration: 'none'
                            } : {
                                textDecoration: 'none'
                            })}
                        >
                            <span><AiOutlineHome /></span><span className={`${isNavbarCollapsed ? styles['hide-menu'] : ''}`}>Home</span>
                        </NavLink>

                    </li>
                    <li className={styles.section}>
                        <NavLink
                            to={'/projects/chess'}
                            // className={({ isActive }) =>
                            //     (isActive ? styles.selected : styles.unselected)}
                            style={({ isActive }) =>
                            (isActive ? {
                                // textDecoration: 'none',
                                backgroundColor: 'white',
                                color: 'black',
                                textDecoration: 'none'
                            } : {
                                textDecoration: 'none'
                            })}
                        >
                            <span><BiGame /></span><span className={`${isNavbarCollapsed ? styles['hide-menu'] : ''}`}>Hobby Projects</span>
                        </NavLink>

                    </li>
                    <li className={styles.section}>

                        <NavLink
                            to={'/journal'}
                            // className={({ isActive }) =>
                            //     (isActive ? styles.selected : styles.selected)}
                            style={({ isActive }) =>
                            (isActive ? {
                                // textDecoration: 'none',
                                backgroundColor: 'white',
                                color: 'black',
                                textDecoration: 'none'
                            } : {
                                textDecoration: 'none'
                            })}
                        >
                            <span><BsJournalCode /></span><span className={`${isNavbarCollapsed ? styles['hide-menu'] : ''}`}>Code Journal</span>
                        </NavLink>

                    </li>
                    {useLocation().pathname === '/journal' && !isNavbarCollapsed && <li className={styles.search}>
                        <span className={styles.icon}><AiOutlineSearch /></span>
                        <div>
                            <input type={'text'} placeholder={'Search topic...'} onChange={onChangeHandler} />
                        </div>
                    </li>}
                </ul>
                {!isNavbarCollapsed && <div className={`${styles.topics} ${isNavbarCollapsed ? styles.collapsed : ''}`}>
                    {useLocation().pathname === '/journal' && filtered.sort().map((item, idx) => <p className={`${topic === item ? styles['highlight-topic'] : ''}`} key={idx} onClick={() => {
                        onTopicChange(topic === item ? '' : item);
                        // current state = new?
                        if (useNavStore.getState().topic === item) {
                            setTopic('')
                        } else {
                            setTopic(item)
                        }
                    }}>{item}</p>)}
                </div>}
            </div>
        </nav>
    )
}

export default Navbar;