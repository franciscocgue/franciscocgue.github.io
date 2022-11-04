import React, { useEffect, useState } from "react";
import Entry from "./components/Entry";

import styles from './App.module.css';
import Navbar from "./components/Navbar";

interface Entry {
    date: Date | string,
    title: string,
    summary?: string,
    content: React.ReactNode,
    keywords: String[]
}

let entries: Entry[];
entries  = [
    {
        date: 'Until now - June 2022',
        title: 'Getting started',
        summary: 'First 5 years',
        keywords: [],
        content: <>
            <p>Unfortunately I am not starting this at the beginning of the path, but 5 years later, since I started working. After finishing a master in Aerospace Engineering in Madrid in late 2017, I moved to Germany, where I began to work as engineer. Before that, I did a couple of internships related to aircraft systems modelling. </p>
            <p>During the last years, I developed SCADA applications (Supervisory Control adn Data Acquisition). Both the backend and frontend, including the database design. The SCADA software used a Java version of Python, Jython. Apart from that, my first contacts with Python came from the need to automate some spreadsheets work, Excel. For that I used the awesome resource <a href="https://automatetheboringstuff.com/" target={'_blank'}>Automate the Boring Stuff with Python</a>. Later, I had to face some repetitive tasks, which are as necessary as boring. For that I started using Selenium, and discovered how nice it felt to automate broswer tasks. To keep track of these files I used git.</p>
            <p>Around one year ago, the environment changed to React and Node: web applications. So I started to learn JavaScript. And HTML adn CSS, with which I was already familiar. This opened a whole new set of possibilities and things I did not know: hosting applications in the cloud (AWS), CI/CD, Docker, etc.</p>
        </>
    },
    {
        date: '2022-09-10',
        title: 'AWS Deploy',
        keywords: ['Deploy', 'webpack'],
        content: <>
            <p>Bla bla bla</p>
            <p>Y más bla bla bla</p>
        </>
    },
    {
        date: '2022-09-10',
        title: 'AWS Deploy',
        summary: 'example',
        keywords: ['AWS', 'Testing'],
        content: <>
            <p>Bla bla bla</p>
            <p>Y más bla bla bla</p>
        </>
    },
    {
        date: '2022-09-10',
        title: 'AWS Deploy',
        summary: 'example',
        keywords: ['AWS', 'React', 'Node'],
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

    useEffect(()=> {
        console.log('topic', topic)
    }, [topic])

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Navbar keywords={keywords} onTopicChange={setTopic}/>
            </div>
            <div className={styles.right}>
                {filteredEntries && filteredEntries.map((entry, idx) => <Entry key={entry.title + entry.date + idx} date={entry.date} title={entry.title} summary={entry.summary} >{entry.content}</Entry>)}
            </div>
        </div>
    )
}

export default App;