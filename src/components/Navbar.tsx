import React, { Dispatch, useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { BsJournalCode } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiGame } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

interface Props {
    keywords: String[],
    onTopicChange: Dispatch<any>,
    section_: String,
    onSectionChange: Dispatch<any>,
    onNavbarCollapse: Dispatch<any>,
};

const Navbar = ({ keywords, onTopicChange, section_, onSectionChange, onNavbarCollapse }: Props) => {

    // selected topic
    const [section, setSection] = useState(section_);
    // search key
    const [search, setSearch] = useState('');
    // list of filtered items
    const [filtered, setFiltered] = useState(keywords || [])
    // selected topic
    const [topic, setTopic] = useState('');
    // navbar size
    const [isCollapseNavbar, setIsCollapseNavbar] = useState(true);

    useEffect(() => {
        onNavbarCollapse(isCollapseNavbar);
    }, [isCollapseNavbar])

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
    }, [search, section]);

    // on search value changed
    const onChangeHandler = (e: any) => {
        setSearch(e.target.value)
    }

    return (
        <nav className={styles.container}>
            <div className={styles['menu-icon']}>
                <span onClick={(e) => { setIsCollapseNavbar(prev => !prev) }}><GiHamburgerMenu /></span>
                {isCollapseNavbar && <span className={styles.selection} onClick={(e) => { setIsCollapseNavbar(prev => !prev) }}>{section}</span>}
            </div>
            <div className={`${styles.content} ${isCollapseNavbar ? styles.collapsed : ''}`}>
                <ul>
                    <li className={styles.section}>
                        <button className={`${section === 'Home' ? styles.selected : ''}`} onClick={() => {
                            setSection('Home');
                            onSectionChange('Home');
                            onTopicChange('');
                            setTopic('');
                            setSearch('');
                        }
                        }>
                            <span><AiOutlineHome /></span><span className={`${isCollapseNavbar ? styles['hide-menu'] : ''}`}>Home</span>
                        </button>
                    </li>
                    {/* <li className={styles.section}>
                    <button className={`${section === 'Curriculum' ? styles.selected : ''}`} onClick={() => {
                        setSection('Curriculum');
                        onSectionChange('Curriculum');
                        onTopicChange('');
                        setTopic('');
                        setSearch('');
                    }
                    }>
                        <span><CgProfile /></span><span>Curriculum</span>
                    </button>
                </li> */}
                    <li className={styles.section}>
                        <button className={`${section === 'Hobby Projects' ? styles.selected : ''}`} onClick={() => {
                            setSection('Hobby Projects');
                            onSectionChange('Hobby Projects');
                            onTopicChange('');
                            setTopic('');
                            setSearch('');
                        }
                        }>
                            <span><BiGame /></span><span className={`${isCollapseNavbar ? styles['hide-menu'] : ''}`}>Hobby Projects</span>
                        </button>
                    </li>
                    <li className={styles.section}>
                        <button className={`${section === 'Code Journal' ? styles.selected : ''}`} onClick={() => {
                            if (section !== 'Code Journal') {
                                setSection('Code Journal');
                                onSectionChange('Code Journal');
                                onTopicChange('');
                                setTopic('');
                                setSearch('');
                            }
                        }
                        }>
                            <span><BsJournalCode /></span><span className={`${isCollapseNavbar ? styles['hide-menu'] : ''}`}>Code Journal</span>
                        </button>
                    </li>
                    {section === 'Code Journal' && !isCollapseNavbar && <li className={styles.search}>
                        <span className={styles.icon}><AiOutlineSearch /></span>
                        <div>
                            <input type={'text'} placeholder={'Search topic...'} onChange={onChangeHandler} />
                        </div>
                    </li>}
                </ul>
                {!isCollapseNavbar && <div className={`${styles.topics} ${isCollapseNavbar ? styles.collapsed : ''}`}>
                    {section === 'Code Journal' && filtered.sort().map((item, idx) => <p className={`${topic === item ? styles['highlight-topic'] : ''}`} key={idx} onClick={() => {
                        onTopicChange(topic === item ? '' : item);
                        setTopic(prev => {
                            if (prev === item) {
                                return ''
                            } else {
                                return item.toString()
                            }
                        });
                    }}>{item}</p>)}
                </div>}
            </div>
        </nav>
    )
}

export default Navbar;