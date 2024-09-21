import React from 'react';
import styles from './Home.module.css';
import timeline from '../assets/timeline.jpg';
import LinkedInBadge from './LinkedInBadge';

import { BsCheckLg } from 'react-icons/bs';
import webpack from '../assets/webpack.png';
import react from '../assets/react.png';
import python from '../assets/python.png';
import node from '../assets/node.png';
import { useNavStore } from '../store/navStore';

const Home = () => {

    const isNavbarCollapsed = useNavStore(state => state.isMainNavbarCollapsed)

    return (

        <div className={`${styles.container} ${isNavbarCollapsed ? styles['container-nvcollapsed'] : styles['container-nvexpanded']}`}>
            <div className={styles.top}>
                <div className={styles.badge}>
                    <LinkedInBadge />
                </div>
                <div className={styles.intro}>
                    <h3>Welcome !</h3>
                    <p className={styles['border-light-top-bottom']}><b>TL;DR</b> - this site was created for <b>fun</b>, to have some extra <b>coding practice</b>, and keep a <b>code diary</b> 😄</p>
                    <p>As an engineer my first contact with programmation was <i>Matlab</i>. Then, wanting to automate something, I met <img className={styles.img} src={python} />, with <a target='_blank' href="https://automatetheboringstuff.com/">Automate the Boring Stuff</a>. Then I had the opportunity to use <i>Flask</i> to create simple web applications. That was followed by <i>databases</i> and <i>SCADA application</i>, and later <i>web development</i>.</p>
                    <p>All that time I felt fascination for programming. How some thinking can be transformed to perform tasks, automate processes, create beautiful UIs... just fascinating. One afternoon I was wondering 🤔</p>
                    <ul>
                        <li>
                                <BsCheckLg /> how to get more practice on
                                <img className={styles.img} src={react} />
                                <img className={styles.img} src={node} />
                                <img className={styles.img} src={webpack} /> etc.?
                        </li>
                        <li>
                            <BsCheckLg /> how to keep track of my learning 🤓?
                        </li>
                        <li>
                            <BsCheckLg /> and how to have a <i>history</i> for found and solved code issues?
                        </li>
                    </ul>
                    <p>After some googling I found what I needed: <b>Hobby Projects</b> and a <b>Code Journal</b>. AWS and GitHub Pages gave the final touch.</p>
                </div>
            </div>
            <div className={styles.content}>
                <p style={{ paddingBottom: '1rem', marginBottom: '1rem' }}>But I am not starting at the beginning of the journey, so what happened until then...</p>
                <div className={styles.timeline}>
                    <img width='100%' src={timeline} />
                </div>
            </div>
        </div>
    )
};

export default Home;