import React, { useEffect, useState } from "react";
import Entry from "./components/Entry";
import timeline from './assets/timeline.png';
import wip from './assets/work-in-progress.png';

import styles from './App.module.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";

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
        date: '2022-11-19',
        title: 'CSS on mobile',
        summary: 'CSS, media queries, and meta tag',
        keywords: ['CSS', 'Media queries'],
        content: <>
            <p>I was checking how this web page looked on my smartphone. Not the first time I do that, but this time I wanted to improve the layout.</p>
            <p>I started playing with media queries and learned about the difference about <code className={styles.code}>min-width</code>, <code className={styles.code}>max-width</code>, and <b>mobile-first</b> development.</p>
            <p>So I set a threshold to change CSS of 320px, reading how it is a best practice or convention for phones. But on my phone it did not trigger. No matter what. On my desktop, I can resize screen to be 319px wide and it would work. But not onmy mobile phone.</p>
            <p>Google came to help me, and now I know the importance of the meta tag in the HTML file, something like:</p>
            <pre>
                <code>{'<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">'}</code>
            </pre>
        </>
    },
    {
        date: '2022-11-11',
        title: 'Redux vs React Context and Reducer',
        // summary: 'Redux vs React Context and Reducer',
        keywords: ['Redux', 'React Redux', 'useReducer', 'React Context API'],
        content: <>
            <p>So far I had never used Redux nor <a href="https://react-redux.js.org/" target={'_blank'}>React Redux</a>. I have used however the <a href="https://reactjs.org/docs/context.html" target={'_blank'}>React Context API</a> and the <a target={'_blank'} href='https://es.reactjs.org/docs/hooks-reference.html#usereducer'>useReducer</a> React hook. And from my basic understanding, it seems equivalent. Even the React documentation for useReducer says <i>"If you’re familiar with Redux, you already know how this works."</i></p>
            <p>But I was curious, and you cannot judge something without using. So I started to get familiar with Redux.</p>
            <p>Below example shows how to use the (main?) Redux advantages by using the Context API and useState. For simplicity (and because writing code as HTML is not fun 😅), instead of using useReducer dispatching actions, the actual context object has "handlers" to do the actions, via useState.</p>
            <p><i>store.js</i></p>
            <pre>
                <code></code>
                <code className={styles['code-comment']}>// Create context and initialize as empty (for autocompletion later)</code>
                <code>{' '}</code>
                <code>const MyContext = React.createContext({'{'}</code>
                <code>  counter: 0,</code>
                <code>  onIncrease: (qty) ={'>'} {'{ }'},</code>
                <code>{'}'})</code>
                <code>{' '}</code>
                <code className={styles['code-comment']}>// Next create the provider and export it</code>
                <code className={styles['code-comment']}>// It will be used there where components below need to access it</code>
                <code>{' '}</code>
                <code>export const MyContextProvider = props ={'> {'}</code>
                <code className={styles['code-comment']}>  // Via useState (or better, useReducer) define logic to update the context object</code>
                <code>  const [counter, setCounter] = useState(0);</code>
                <code>  const onIncreaseHandler = qty ={'> {'}</code>
                <code>      setValue(prev ={'>'} prev + qty)</code>
                <code>  {'}'}</code>
                <code>{' '}</code>
                <code className={styles['code-comment']}>  // Return provider</code>
                <code>{' '}</code>
                <code>  return (</code>
                <code>    {'<MyContext.Provider'}</code>
                <code>        value={'{{'}</code>
                <code>            counter: counter,</code>
                <code>            onIncrease: onIncreaseHandler,</code>
                <code>        {'}}'}</code>
                <code>    {'>'}</code>
                <code>        {'{props.children}'}</code>
                <code>    {'</MyContext.Provider>'}</code>
                <code>  )</code>
                <code>{'};'}</code>
                <code>{' '}</code>
                <code>{'export default MyContext;'}</code>
            </pre>
            <p>And how to use in a component (equivalent to the Redux <i>subscribe</i> to update the render of the UI):</p>
            <p><i>MyComponent.js</i></p>
            <pre>
                <code>import MyContext from './path/to/store'</code>
                <code>{'const MyComponent = () => {'}</code>
                <code>  {'const ctx = useContext(MyContext);'}</code>
                <code className={styles['code-comment']}>  // ctx.value and ctx.onIncrease available!</code>
                <code>  {'...'}</code>
                <code>{'}'}</code>
            </pre>
            <p>That is very similar to the benefits we get with Redux:</p>
            <ul>
                <li>Shared states are in a central location accessible by components (no need to lift up state)</li>
                <li>State logic management is central, meaning better maintenability</li>
            </ul>
            <p>If instead of <i>useState</i> we use <i>useReducer</i> in the store, logic would be more 'organized', since instead of defining the actions as functions or handlers in the store object, we could use a single (reducer) function.</p>
            <p>In any case, I never used Redux in an application <i>yet</i>
                , all this is based on some reading. So that is of course the next step!</p>
        </>
    },
]

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
                {section === 'Code Journal' && filteredEntries && filteredEntries.map((entry, idx) => <Entry key={entry.title + entry.date + idx} date={entry.date} title={entry.title} summary={entry.summary} >{entry.content}</Entry>)}
                {section === 'Home' && <div>
                    <Home />
                </div>}
                {section === 'Hobby Projects' && <div></div>}
            </div>
        </div>
    )
}

export default App;