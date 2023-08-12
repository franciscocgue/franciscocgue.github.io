import React, { useEffect, useState } from "react";
import entries from "../entries";
import Entry from "./Entry";
import { EntryType } from "../types";
import { useNavStore } from "../store/navStore";

import styles from './CodeJournal.module.css';

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


const CodeJournal = () => {

    const [filteredEntries, setFilteredEntries] = useState(entries)

    const topic = useNavStore(state => state.topic)
    const setTopic = useNavStore(state => state.setTopic)

    const isNavbarCollapsed = useNavStore(state => state.isMainNavbarCollapsed);

    useEffect(() => {
        if (topic != '') {
            let fentries = [] as EntryType[];

            entries.forEach(item => {
                const entryTopics = item.keywords.map(item => item.toLowerCase())
                // console.log('entryTopics', entryTopics)
                if (entryTopics.includes(topic.toLowerCase())) {
                    // console.log('included: ' + topic)
                    // console.log('adding item', item)
                    fentries.push(item);
                }
            })
            setFilteredEntries(fentries)
        } else {
            setFilteredEntries(entries)
        }
    }, [topic])

    return (
        <div className={`${styles.container} ${isNavbarCollapsed ? styles['container-nvcollapsed'] : styles['container-nvexpanded']}`}>
            {filteredEntries && filteredEntries.sort(sortEntries).map((entry, idx) => <Entry key={entry.title + entry.date + idx} date={entry.date} title={entry.title} summary={entry.summary} >{entry.content}</Entry>)}
        </div>
    )
};


export default CodeJournal;