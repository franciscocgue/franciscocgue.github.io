import React, { Dispatch, useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { BsJournalCode } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';

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
    const [topic, setTopic] = useState('');

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

    return (
        <nav className={styles.container}>
            <ul>
                <li className={styles.section}><span><CgProfile /></span><span>Lebenslauf</span></li>
                <li className={styles.section}><span><BsJournalCode /></span><span>Code Journal</span></li>
                <li className={styles.search}>
                    <span className={styles.icon}><AiOutlineSearch /></span>
                    <div>
                        <input type={'text'} placeholder={'Search topic...'} onChange={onChangeHandler} />
                    </div>
                </li>
            </ul>
            <div className={styles.topics}>
                {filtered.sort().map((item, idx) => <p className={`${topic === item ? styles['highlight-topic'] : ''}`} key={idx} onClick={() => {
                    onTopicChange(topic === item ? '' : item);
                    setTopic(prev => {
                        if (prev === item) {
                            return ''
                        } else {
                            return item.toString()
                        }
                    });
                }}>{item}</p>)}
            </div>
        </nav>
    )
}

export default Navbar;