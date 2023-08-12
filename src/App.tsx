import React, { useEffect, useState } from "react";
import Entry from "./components/Entry";
import timeline from './assets/timeline.png';
import wip from './assets/work-in-progress.png';
import { Outlet } from "react-router-dom";

import styles from './App.module.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import { EntryType } from './types'
import entries from "./entries";

import { useLocation } from "react-router-dom";
import { useNavStore } from "./store/navStore";

// import Chess from "../proj-chessdrez/src/client/App";

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
    const isNavbarCollapsed = useNavStore(state => state.isMainNavbarCollapsed);

    // filter entries if topic selected
    useEffect(() => {
        if (topic !== '') {
            let fentries = [] as EntryType[];

            entries.forEach(item => {
                const entryTopics = item.keywords.map(item => item.toLowerCase())
                // console.log('entryTopics', entryTopics)
                if (entryTopics.includes(topic.toLowerCase())) {
                    // console.log('included: ' + topic)
                    // console.log('adding item', item)
                    fentries.push(item);
                }
            });

            setFilteredEntries(fentries);
        } else {
            setFilteredEntries(entries);
        }
    }, [topic]);

    useEffect(() => {
        // console.log('topic', topic)
    }, [topic])

    return (
        <div className={styles.container}>
            <div className={`${styles.left} ${isNavbarCollapsed ? styles['left-nvcollapsed'] : styles['left-nvexpanded']}`}>
                <Navbar keywords={keywords} onTopicChange={setTopic} />
            </div>
            <div>
                
                <div><Outlet /></div>
                
            </div>
            
        </div>
    )
}

export default App;