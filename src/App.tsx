import React, { useEffect, useState } from "react";
import Entry from "./components/Entry";
import timeline from './assets/timeline.png';

import styles from './App.module.css';
import Navbar from "./components/Navbar";

interface Entry {
    date: Date | string,
    title: string,
    summary?: string,
    content: React.ReactNode,
    keywords: String[]
}

const chessGameUrl = 'http://chessalb-1072294051.eu-central-1.elb.amazonaws.com/chess';

let entries: Entry[];
entries = [
    {
        date: 'Until now - June 2022',
        title: 'Background - 😄 PAGE IN PROGRESS 😄',
        summary: 'First 5 years',
        keywords: [],
        content: <>
            <p style={{ borderBottom: '1px dashed grey', paddingBottom: '1rem', marginBottom: '1rem' }}>The background before starting this <i>Code Journal</i> is shown below. Some additional details is how I started using python to <a target='_blank' href="https://automatetheboringstuff.com/">Automate the Boring Stuff</a>, or how I started learning AWS to host a hobby project I am working on.</p>
            <div className={styles.img}>
                <img width='100%' src={timeline} />
            </div>
        </>
    },
    {
        date: '2022-07-01',
        title: 'Chess Game',
        summary: 'Hobby project - learning',
        keywords: ['Hobby Project'],
        content: <>
            <p>I decided to start a hobby project to try things for which I do not have time in the fast-paced work environment. I picked a Chess game, for three main reasons:</p>
            <ul>
                <li>Sharpen frontend skills</li>
                <li>Interesting practice for backend & logic</li>
                <li>Project can be easily extended: multiplayer, saving scores to DB, AI & single player, realtime with websockets, etc.</li>
            </ul>
            <p>The idea is to use this project as a way to learn, get familiar or improve:</p>
            <p style={{ marginLeft: '2rem' }}><i>TypeScript, app deployment, docker, react redux, react testing library, jest, webpack, bable, debugging</i> and much more!</p>
            <p style={{ borderTop: '1px dashed grey', paddingTop: '1rem', marginTop: '1rem' }}>
                By the way, game deployed now in <a target='_blank' href={chessGameUrl}>Amazon AWS</a>
            </p>
        </>
    },
    {
        date: '2022-07-08',
        title: 'One Day With TypeScript',
        summary: 'Getting started with TypeScript',
        keywords: ['TypeScript'],
        content: <>
            <p>When I started using TypeScript a few days ago I was unsure. It looked like it required more work than it actually paid off. But in search of motivation I kept reading how nice it was, specially for large projects. And how it was like documenting the code.</p>
            <p>Well, I am beginning to agree. The autocompletion is great when the IDE you use (let's say, vs code) knows what the type is. So if you define a variable with no type as in <code className={styles.code}>const whatIsMyType;</code>, then vs code will not be able to autocomplete when you write <code className={styles.code}>whatIsMyType.</code>. But if instead you do <code className={styles.code}>const iHaveAType: string[];</code>, then it will greatly help you by providing you with autocomplete functions proper of an Array, such as <i>includes</i> and others.</p>
            <p>As for the documentation, you will no longer have Objects whose key-value pairs have uncertain types.</p>
            <p>But yes, it is still a pain to be forced to add types to every single thing you write. For that you can configure it to allow nulls, but then what would be the point?</p>
        </>
    },
    {
        date: '2022-07-12',
        title: 'Testing',
        summary: 'Snapshot testing with Jest',
        keywords: ['Testing', 'Testing - Snapshot', 'Jest'],
        content: <>
            <p>Bla bla bla</p>
            <p>Y más bla bla bla</p>
        </>
    },
    {
        date: '2022-09-10',
        title: 'AWS Deploy',
        summary: 'example',
        keywords: ['AWS', 'Redux', 'Testing - Jest', 'Testing - RTL', 'CSS'],
        content: <>
            <p>Bla bla bla</p>
            <p>Y más bla bla bla</p>
        </>
    },
    {
        date: '2022-09-10',
        title: 'AWS Deploy',
        summary: 'example',
        keywords: ['AWS'],
        content: <>
            <p>Bla bla bla</p>
            <p>Y más bla bla bla</p>
        </>
    },
    {
        date: '2022-09-10',
        title: 'AWS Deploy',
        summary: 'example',
        keywords: ['AWS'],
        content: <>
            <p>Bla bla bla</p>
            <p>Y más bla bla bla</p>
        </>
    },
]

let keywords = [] as String[];
entries.forEach(item => {
    if (item.keywords) {
        keywords.push(...item.keywords)
    }
})

keywords = keywords.filter((val: string, idx: number, arr) => {
    return arr.indexOf(val) === idx;
})

const App = () => {

    // selected topic
    const [section, setSection] = useState('Code Journal');
    // selected topic
    const [topic, setTopic] = useState('');
    // entries matching selected topic
    const [filteredEntries, setFilteredEntries] = useState(entries);

    // filter entries if topic selected
    useEffect(() => {
        if (topic !== '') {
            let fentries = [] as Entry[];

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
            <div className={styles.left}>
                <Navbar keywords={keywords} onTopicChange={setTopic} section_={section} onSectionChange={setSection} />
            </div>
            <div className={styles.right}>
                {section === 'Code Journal' && filteredEntries && filteredEntries.map((entry, idx) => <Entry key={entry.title + entry.date + idx} date={entry.date} title={entry.title} summary={entry.summary} >{entry.content}</Entry>)}
                {section === 'Home' && <div>Oops this is not yet finished! 😳</div>}
                {section === 'Curriculum' && <div>Oops this is not yet finished! 😳</div>}
                {section === 'Hobby Projects' && <div>Oops this is not yet finished! 😳</div>}
            </div>
        </div>
    )
}

export default App;