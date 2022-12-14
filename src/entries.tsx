import React from 'react';
import styles from './App.module.css';
import {EntryType} from './types';

const chessGameUrl = 'http://chessalb-1072294051.eu-central-1.elb.amazonaws.com/chess';

let entries: EntryType[];
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
            <p>But yes, it is still a pain to be forced to add types to every single thing you write. Fortunately one can always configure it to allow nulls, but then it kind of loses the point, does it not?</p>
        </>
    },
    {
        date: '2022-07-12',
        title: 'Testing (I)',
        summary: 'Snapshot testing with Jest',
        keywords: ['Jest - snapshot testing'],
        content: <>
        <p>Today I added the 'turns' or 'goes' feasture to the chess game, so that a player cannot move twice in a row. Then I wanted to have a peak into testing, with which I was barely familar.</p>
        <p>After some initial reading and some recalling, there are several testing types: unit tests and integration (whose threshold in React components is vague). Also quite simplified, one can use React-Testing-Library and / or Jest. There are of course other options we could use.</p>
        <p>In this first contact with React testing (let's be honest, with testing), I am using just Jest. Not having created the project with CRA, I had to fight some initial setup, including some new devDependencies (<i>react-test-rendered, jest, babel-jest and @babel/preset-typescript, ts-jest</i>). Last two added due to having TypeScript files (it seems you cannot import a .ts file into .js, so I had to have .ts test files to be able to import the .tsx components).</p>
        <p>Using CSS modules also complicated a bit the setup, but <a href='https://jestjs.io/docs/webpack#mocking-css-modules'>Mocking CSS Modules link</a> explains how to do this very gracefully.</p>
        <p>So it was an interesting setup, but in the end, as usually, it paid off. I added the most simple test file for a Cell rendering (in the Chess board). I run <code className={styles.code}>npm test</code>, which calls <code className={styles.code}>jest</code> command. It passed the (snapshot) test. Then I made a mistake (on purpose, of course) in which a white cell gets a class for a black one. I run the test again and it fail the test! Wonderfull. It even detailed why it failed: class had changed. And this is how snapshot tests work, they compare the current snapshot to a previous (even commited) one. Really cool.</p>
        <p>This is great to get started into more serious testing, and having a way to make sure any refractoring does not change the rendered components.</p>
        </>
    },
    {
        date: '2022-07-14',
        title: 'Debugging',
        summary: 'From printing to actual debugging',
        keywords: ['Debugging'],
        content: <>
        <p>Todays learnings are as short as they are nice. And they are very short. A few weeks ago I deciding if buying a book whose title I do not remember, but it was something like <i>How to program</i> less <i>bad</i>. At the beginning there were a few questions, aiming for the reader to realize if the book was suitable or not. One of the questions was "How do you debug?". There where three possible anwers:</p>
        <ul>
            <li>Who needs debugging anyway, the user will just inform about the bugs</li>
            <li>I print / log everything to the console</li>
            <li>I use a debugging tool</li>
        </ul>
        <p>We will skip the first answer (clearly the correct one). The last one did not actually say 'debugging tools', but some actual tool whose name I do not remember. My case is the second one, I tend to print (console.log / print) eeeeeverything when I want to debug. Efficient, uh?</p>
        <p>Well today printing was not enough, so I decided to take the step. I went to Google and typed 'react vscode debugging'.</p>
        <p>I can only say it is awesome. Not only the potential, but also how easy it was, how simple it is to watch specific variables, etc. It reminds me to debugging in Matlab, back in the university when I had a single file (or a few anyway), and all was nice and sequential. I was afraid of how this would be in a React a??pplication, but it ended up being quite a nice experience.</p>
        </>
    },
    {
        date: '2022-11-19',
        title: 'CSS on mobile',
        summary: 'CSS, media queries, and meta tag',
        keywords: ['CSS', 'CSS - Media queries'],
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
        keywords: ['Redux', 'React - Redux', 'React - useReducer', 'React - Context API'],
        content: <>
            <p>So far I had never used Redux nor <a href="https://react-redux.js.org/" target={'_blank'}>React Redux</a>. I have used however the <a href="https://reactjs.org/docs/context.html" target={'_blank'}>React Context API</a> and the <a target={'_blank'} href='https://es.reactjs.org/docs/hooks-reference.html#usereducer'>useReducer</a> React hook. And from my basic understanding, it seems equivalent. Even the React documentation for useReducer says <i>"If you???re familiar with Redux, you already know how this works."</i></p>
            <p>But I was curious, and you cannot judge something without using. So I started to get familiar with Redux.</p>
            <p>Below example shows how to use the (main?) Redux advantages by using the Context API and useState. For simplicity (and because writing code as HTML is not fun ????), instead of using useReducer dispatching actions, the actual context object has "handlers" to do the actions, via useState.</p>
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

export default entries;