import React, { useEffect, useState } from "react";
import Entry from "./components/Entry";
import timeline from './assets/timeline.png';
import wip from './assets/work-in-progress.png';

import styles from './App.module.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import { EntryType } from './types'
import entries from "./entries";

function sortEntries(a: EntryType, b: EntryType) {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    if (aDate < bDate) {
        return -1;
    }
    if (aDate > bDate) {
        return 1;
    }
    return 0;
}

let keywords = [] as String[];
entries.forEach(item => {
    if (item.keywords) {
        keywords.push(...item.keywords)
    }
})

keywords = keywords.filter((val: String, idx: Number, arr) => {
    return arr.indexOf(val) === idx;
})

const App = () => {

    // selected topic
    const [section, setSection] = useState('Home');
    // selected topic
    const [topic, setTopic] = useState('');
    // entries matching selected topic
    const [filteredEntries, setFilteredEntries] = useState(entries);
    // hide banner
    const [showBanner, setShowBanner] = useState(true);
    // navbar size
    const [isCollapseNavbar, setIsCollapseNavbar] = useState(true);

    // filter entries if topic selected
    useEffect(() => {
        if (topic !== '') {
            let fentries = [] as EntryType[];

            entries.forEach(item => {
                const entryTopics = item.keywords.map(item => item.toLowerCase())
                console.log('entryTopics', entryTopics)
                if (entryTopics.includes(topic.toLowerCase())) {
                    console.log('included: ' + topic)
                    console.log('adding item', item)
                    fentries.push(item);
                }
            });

            setFilteredEntries(fentries);
        } else {
            setFilteredEntries(entries);
        }
    }, [topic]);

    useEffect(() => {
        console.log('topic', topic)
    }, [topic])

    return (
        <div className={styles.container}>
            <div className={`${styles.left} ${isCollapseNavbar ? styles['left-nvcollapsed'] : styles['left-nvexpanded']}`}>
                <Navbar keywords={keywords} onTopicChange={setTopic} section_={section} onSectionChange={setSection} onNavbarCollapse={setIsCollapseNavbar} />
            </div>
            <div className={`${styles.right} ${isCollapseNavbar ? styles['right-nvcollapsed'] : styles['right-nvexpanded']}`}>
                {showBanner && <div className={styles.wip}>
                    <span className={styles.close} onClick={() => setShowBanner(false)}>&times;</span>
                    <div className={styles['wip-inner']}>
                        <div>
                            <p>Hey There!</p>
                            <p style={{ marginBottom: 0, paddingLeft: '1rem' }}>This page is not yet finished 😳</p>
                            <p style={{ marginTop: 5, paddingLeft: '1rem' }}>I am migrating the <i>Code Journal</i> from this <a target={'_blank'} href='https://github.com/franciscocgue/my-journey'>Github repo</a> and adding new sections</p>
                        </div>
                        <div className={styles['wip-img']}>
                            <img height={110} width={110} src={wip} />
                        </div>
                    </div>
                </div>}
                {!showBanner && <div className={`${styles['wip-inner']} ${styles['wip']}`}>
                    <span className={styles['msg-hidden']} onClick={() => setShowBanner(true)}>Click to see message</span>
                </div>}
                {section === 'Code Journal' && filteredEntries && filteredEntries.sort(sortEntries).map((entry, idx) => <Entry key={entry.title + entry.date + idx} date={entry.date} title={entry.title} summary={entry.summary} >{entry.content}</Entry>)}
                {section === 'Home' && <div>
                    <Home />
                </div>}
                {section === 'Hobby Projects' && <div></div>}
            </div>
        </div>
    )
}

export default App;