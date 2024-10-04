import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Projects.module.css';
import { useNavStore } from '../store/navStore';
import Card from './ui/Card';
import aiGame from '../assets/ai-game.png';
import craftify from '../assets/craftify2-motivation.png';
import codeJournalImg from '../assets/code-journal.png';
import { useNavigate } from "react-router-dom";

const Projects = () => {

    const isNavbarCollapsed = useNavStore(state => state.isMainNavbarCollapsed);
    const navigate = useNavigate();

    return (
        <div className={`${styles.container} ${isNavbarCollapsed ? styles['container-nvcollapsed'] : styles['container-nvexpanded']}`}>
            <div className={styles['cards-container']}>
                <Card
                    image={aiGame}
                    title='Chess (AI) Game'
                    bgColor='linear-gradient(120deg, #1E3A8A, #6366F1, #3B82F6, #60A5FA)'
                    description={<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p><i>Chessdrez</i>, a React chess game with AI! Want to see how it is made? Click below and check out the <i>About</i> section.</p>
                        <button
                            className={styles['card-btn']}
                            onClick={() => navigate('/projects/chess')}
                        > Check it out!</button>
                    </div>}
                />
                <Card
                    image={craftify}
                    title='Craftify'
                    description={<div>
                        <p>Creating my own web application builder!</p>
                        <p>Check out the
                            <a className={styles.link} href='https://www.linkedin.com/posts/francisco-carmona-guerrero-504773118_webdevelopment-lowcode-sideproject-activity-7216477079922503680-LHGh' target='_blank'>motivation</a>,
                            <a className={styles.link} href='https://www.linkedin.com/posts/francisco-carmona-guerrero-504773118_sideproject-react-lowcode-activity-7224364691047784448-edWI' target='_blank'>the leassons learned</a> and
                            <a className={styles.link} href='https://www.linkedin.com/posts/francisco-carmona-guerrero-504773118_react-lowcode-hobbyproject-activity-7231928695358124032-ZQ-m' target='_blank'>a demo</a>!
                        </p>
                    </div>
                    }
                />
                <Card
                    image={codeJournalImg}
                    title='Code Journal'
                    bgColor='#00d49f'
                    description={<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p>Here tracking progress and lessons. Not so active now, but it will make a comeback! Craftify's beginnings are documented here 😄</p>
                        <button
                            className={styles['card-btn']}
                            onClick={() => navigate('/journal')}
                        > Check it out!</button>
                    </div>
                    }
                />
            </div>
            <div><Outlet /></div>
        </div>
    )
}

export default Projects;