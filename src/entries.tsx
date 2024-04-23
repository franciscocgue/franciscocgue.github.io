import React from 'react';
import styles from './App.module.css';
import { EntryType } from './types';
import { Image } from 'antd';

const chessGameUrl = 'http://chessalb-1072294051.eu-central-1.elb.amazonaws.com';

let entries: EntryType[];
entries = [
    {
        date: '2022-07-01',
        title: 'Chess Game',
        summary: 'Hobby project - learning',
        keywords: ['Hobby Project', 'Chessdrez'],
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
                By the way, game used to be deployed in AWS, but was later embedded into this GitHub Page to save costs 🙃
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
            <p>I can only say it is awesome. Not only the potential, but also how easy it was, how simple it is to watch specific variables, etc. It reminds me to debugging in Matlab, back in the university when I had a single file (or a few anyway), and all was nice and sequential. I was afraid of how this would be in a React aüpplication, but it ended up being quite a nice experience.</p>
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

    {
        date: '2023-01-29',
        title: 'Deploying in AWS',
        summary: 'Deploying Chessdrez on Amazon EC2',
        keywords: ['Hobby Project', 'Deploy', 'Hosting', 'AWS - EC2', 'Chessdrez'],
        content: <>
            <p>Around half a year ago, I deployed my Chessdrez application in AWS (but later was embedded into this GitHub Page to save costs 🙃). Roughly, main steps were:</p>
            <ol>
                <li>Setting up the ECS instance</li>
                <li>SSH-logging into the instace</li>
                <li>Cloning the GitHub project from within the instance</li>
                <li><code className={styles.code}>npm install</code>ing dependencies</li>
                <li><code className={styles.code}>npm build</code>ing the application</li>
                <li>running the application</li>
            </ol>
            <p>One of the <b>issues</b> I faced were resources. The EC2 instance I chose is... let's say it is not the most expensive and powerful I could have selected. This meant that most of the times <code className={styles.code}>npm run build</code> was not even able to execute.</p>
            <p>The <b>solution</b> came just recently. I realized there is no actual need to have the whole project folder (cloned from GitHub) in the instance! The <i>dist</i> folder, where the bundle is, and thge server-side code is enough. In fact, the server side could be removed, but I like it there. <a href='https://filezilla-project.org/' target={`_blank`}>FileZilla</a> offered a superb experience when moving these files from local to the cloud intance.</p>
            <p>Since then, promoting any new featture or fix to the cloud has become a breeze.</p>
        </>
    },


    {
        date: '2023-02-20',
        title: 'Asynchronous programming',
        summary: 'Cancelling requests',
        keywords: ['Asynchronous actions', 'Promises'],
        content: <>
            <p>Lets imagine we need to cancell a request, for example with a timeout. There are many options for this, some of which are:</p>
            <ul>
                <li>Define some middleware on the server side (Express middleware or custom)</li>
                <li>Set the timeout in Node via <code className={styles.code}>server.setTimeout(someTimeInMs)</code></li>
                <li>Using the <i>signal</i> parameter in the <i>fetch</i> method (<a href='https://stackoverflow.com/questions/31061838/how-do-i-cancel-an-http-fetch-request' target={'_blank'}>SO link</a>)</li>
            </ul>
            <p>To be honest I did not look (yet) into these methods in detail. But I focused on a fourth one: <code className={styles.code}>Promise.race()</code>.
                This method is given an array of promises, and it will settle when the quickest promise settles.
                One of these promises can be a promise that we know will settle after X seconds (X being the timeout).</p>

            <p>This can be combined with <code className={styles.code}>Promise.all()</code>, so that we can send multiple request as a group (we want all of them to settle), but will time out if needed. This Promise-based solution is really simple and effective to time out long database fetches.</p>
            <h4><span style={{ fontSize: '150%' }}>🤓</span> Edit:</h4>
            <p>I was wondering what happens to requests, after they are cancelled. I read a bit and set a simple sample project (html file + minimal Node backend with some routes). Basically, since we are dealing with HTTP requests, andf HTTP is stateless, the API will not know a request was cancelled, and it will continue to execute.</p>
            <p>This question showed me that, not unlike Jon Snow, I know nothing. So I end up enrolling in a Udemy course about APIs</p>
        </>
    },
    {
        date: '2023-05-11',
        title: '"this" value',
        summary: 'array vs normal JS functions',
        keywords: ['JavaScript', 'JS', 'JavaScript - this', 'JavaScript - functions', 'JavaScript - arrow functions'],
        content: <>
            <p>A few days ago I was learning OpenUI5, and I (surprise) had an error. After some investigation I realized it was due to using <i>arrow functions</i> instead of the "normal" JS functions. And specifically, with the way these two functions define the <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this' target='_blank'>this</a> value when created as methods inside an object.</p>
            <p>Todays entry will not exhaustively describe <i>this</i> (for that, the web is always a better option), but rather focus on the difference between its use in arrow and in normal JS functions. And more specifically, in objects.</p>
            <p>In the <b>first "test"</b>, I created <b>two functions</b>, one normal and one arrow function. Both just print <i>this</i> to the console. <b>In both cases we observe the <i>window</i> object.</b></p>
            <p>In the <b>second one</b>, I created an <b>object with two method</b> (that is, two functions). One is an arrow function, the other a normal one. Both simply print the value <i>this</i> into the console. <b>For the normal function, the actual object to which the method belongs is printed. The arrow function, on the other hand, prints the <i>window</i> object.</b></p>
            <p><b>Conclusion: </b>when working with OpenUI5, normal functions are preferred. This might not apply always though, and will surely depend on where the function is used and defined (inside an object or not, for example).</p>
        </>
    },
    {
        date: '2023-08-13',
        title: 'Cost saving example',
        summary: 'Free hosting',
        keywords: ['Hosting', 'GitHub Pages', 'AWS'],
        content: <>
            <p>Until today I had 2 applications: a React/Node-based Chess Game, and this Code Journal. The game was hosted in an AWS instance, and used a load balancer too. The diary, on the other hand, was hosted in GitHub Pages.</p>
            <p>So what is the difference? There are many, but 2 key ones for my use cases were:</p>
            <ul>
                <li>GitHub Pages is free</li>
                <li>GitHub Pages can only host static files, which means no server side</li>
            </ul>
            <p>In my case the Chess game was using a Node backend. But it was actually a placeholder for possible future features, such as storing game results, multi-player gaming, etc. Skipping that, a static side would be perfect for it. And that is why I embedded it into the Code Journal. You can find it under <i>Hobby Projects</i>.</p>
            <p>When adding Chessdrez into the Code Journal project, I used this oportunity to include other changes, like using React Router and Zustand. All in all, main changes were:</p>
            <ul>
                <li>Copy Chessdrez into Code Journal project</li>
                <li>Add Chessdrez <b>dependencies</b> into the Code Jourmnal <i>package.json</i></li>
                <li><b>Remove backend</b> references in copied project</li>
                <li>(optional) Add <b>Zustand</b> to manage global state</li>
                <li>(optional) Use <b>React Router</b> to navigate the sections of the Code Journal</li>
                <li>Include Chessdrez routes as <b>nested routes</b></li>
                <li>Adapt all <b>CSS</b></li>
            </ul>
        </>
    },

    // ####################################
    // CRAFTIFY
    // ####################################

    {
        date: '2023-12-22',
        title: 'Craftify - 0 - new hobby project',
        summary: '',
        keywords: [' Craftify ⭐'],
        content: <>

            <p>Get started creating apps with no-code & low-code... with Craftify!</p>


            <p>This project is born out of pure curiosity. The idea is to create a very simple application<b style={{ color: 'darkblue' }}>(*)</b> that allows a user to create applications. Initially super simple, later to be (hopefully) expanded with new features.</p>

            <p><b>DISCLAIMER</b></p>

            <p>After working with some of these low-code applications that allow one to create applications (websites but also desktop), I realized I really wonder how they work, what is the complexity behind.</p>

            <p>So I wanted to try and make something similar (even if way simpler), to get a better understanding.</p>

            <p>Therefore the key concepts or ideas behind, such as drag and drop of components into the canvas, are of coursed shared with these other applications.</p>

            <p style={{ color: 'darkblue' }}><b>(*)</b> 4 months after starting the project I can only laugh at that 'very simple'. Refreshing how such a simple idea can grow and grow in no time!</p>

        </>
    },
    {
        date: '2023-12-23',
        title: 'Craftify - 1 - Concept',
        summary: '',
        keywords: [' Craftify ⭐'],
        content: <>
            <p>With <a href='https://vitejs.dev/' target='_blank'>vite</a> and a mega simple layout, the project is started!</p>

            <p>There is also some logic that was sketched on paper, including workflows, components, pages, and possible future features.</p>

            <p>Basically, the main page should include</p>

            <ul>
                <li>toolbar: save, preview, etc.</li>
                <li>component palette</li>
                <li>variables</li>
                <li>main canvas</li>
                <li>properties palette</li>
                <li>application tree</li>
            </ul>


            <div className={styles['img-wrapper']}>
                <Image
                    className={styles.img}
                    src='src\assets\image_d01.png'
                    style={{ borderRadius: '10px' }}
                />
                <p style={{ margin: '0', fontSize: 'small', fontStyle: 'italic', color: '#333' }}>Spoiler: Mega basic layout not worth previewing - click image to preview 😃</p>
            </div>
        </>
    },
    {
        date: '2023-12-28',
        title: 'Craftify - 2 - basic drag and drop',
        summary: 'Drag and drop with dnd kit',
        keywords: [' Craftify ⭐', 'dnd kit', 'Dragging'],
        content: <>

            <p>Slightly better layout and drag and drop functionality! 🥳</p>

            <div className={styles['img-wrapper']}>
                <Image
                    className={styles.img}
                    src='src\assets\image_d02.png'
                    style={{ borderRadius: '10px' }}
                />
                <p style={{ margin: '0', fontSize: 'small', fontStyle: 'italic', color: '#333' }}>click image to preview</p>
            </div>

            <p>Using the cool <a href='https://dndkit.com/' target='_blank'>dnd kit</a>, we are able to drag and drop a few components into the canvas.</p>

            <p>What now works (even if barebones):</p>

            <ul>
                <li>dragging</li>
                <li>dropping (known delta coordinates)</li>
                <li>dynamic creation of components</li>
                <li>canvas highlighted when component hovering</li>
                <li>canvas should be ready for positioning components (relative / absolute), including scrollbar when overflowing</li>
            </ul>

        </>
    },
    {
        date: '2023-12-30',
        title: 'Craftify - 3 - zustand & Ant Design',
        summary: 'New libraries',
        keywords: [' Craftify ⭐'],
        content: <>
            <p>Visually there is not much of a difference with respect to Day 2, but functionally it is quite something (at least I like to think that).</p>
            <ul>
                <li>Added <a href='https://github.com/pmndrs/zustand' target='_blank'>zustand</a> to manage state (list) of components added to the canvas</li>
                <li>Better positioning of dragged components (long story short, solved some positioning issues due to e.g., having the component palette scrolled-down before dragging; custom dnd kit modifiers and collision detectors where used)</li>
                <li>Using <a href='https://ant.design/' target='_blank'>Ant Design</a> for (re-)usable components</li>
            </ul>

            <div className={styles['img-wrapper']}>
                <Image
                    className={styles.img}
                    src='src\assets\image_d03.png'
                    style={{ borderRadius: '10px' }}
                />
                <p style={{ margin: '0', fontSize: 'small', fontStyle: 'italic', color: '#333' }}>click image to preview</p>
            </div>
        </>
    },
    {
        date: '2024-01-06',
        title: 'Craftify - 4 - component selection',
        summary: 'New features',
        keywords: [' Craftify ⭐'],
        content: <>


            <ul>
                <li>More accurate component positioning and better dragging experience</li>
                <li>Selectable components (this will be useful later on for the <i>Component Palette</i>)</li>
            </ul>

            <div className={styles['img-wrapper']}>
                <Image
                    width={130}
                    src='src\assets\image_d04_1.png'
                    style={{ borderRadius: '10px' }}
                    preview={false}
                />
            </div>

            <div className={styles['img-wrapper']}>
                <Image
                    width={130}
                    src='src\assets\image_d04_2.png'
                    style={{ borderRadius: '10px' }}
                    preview={false}
                />
            </div>

            <p>Once again, visually not much has changed. It seems positioning components with <code className={styles.code}>position: absolute</code> in a <code className={styles.code}>position: relative</code> container in dnd kit is not that much fun, meaning that the <code className={styles.code}>left</code> (etc.) attributes of the dragged component is no longer that of the dragged one, but of the inmediate container.</p>

            <p>Rendering components dynamically based on an array works perfectly, until you decided to filter out some of the components. Should have been caused by a poor ID or Key for the mapped components, but that was OK.</p>

            <p>The first issue got solved editing how the <code className={styles.code}>measuring</code> prop in the <code className={styles.code}>DnDContext</code> works <a href='https://github.com/clauderic/dnd-kit/issues/50' target='_blank'>(more info)</a>. For the second, keeping the display of the component been dragged in the canvas solved the issue, but it also improves UX. Initial position of the dragged component is greyed out, to keep it as a reference.</p>

        </>
    },
    {
        date: '2024-01-07',
        title: 'Craftify - 5 - new features',
        summary: '',
        keywords: [' Craftify ⭐'],
        content: <>
            <p>Main new features:</p>

            <ul>
                <li>Default components (default size, text, etc. depending on each component)</li>
                <li>Properties palette (properties editor); re-uses ant design components</li>
                <li>Better TS types for component properties</li>
                <li>ant design theme (currently fixed as dark mode)</li>
            </ul>


            <div className={styles['img-wrapper']}>
                <Image
                    className={styles.img}
                    src='src\assets\image_d05.png'
                    style={{ borderRadius: '10px' }}
                />
                <p style={{ margin: '0', fontSize: 'small', fontStyle: 'italic', color: '#333' }}>click image to preview</p>
            </div>
        </>
    },
    {
        date: '2024-01-13',
        title: 'Craftify - 6 - minor improvements & fixes',
        summary: '',
        keywords: [' Craftify ⭐'],
        content: <>
            <p>Minor improvements and fixes, including:</p>

            <ul>
                <li>Now <i>both</i> relative (percentual) and absolute (px) positioning work! 🥳</li>
                <li>Properties editor working as well, for a very limited number of properties (besides positioning and size ones)</li>
                <li>Added <i>Preview</i> and <i>Modelling</i> status, so that user can see how the components behave too</li>
            </ul>

        </>
    },
    {
        date: '2024-01-21',
        title: "Craftify - 7 - smart properties",
        summary: '',
        keywords: [' Craftify ⭐'],
        content: <>
            <p>Saying 'smart' properties is probably cooler than reality, but now I got your attention 😋. Now some properties can have dependencies or relations. For example, a specific value (<i>''</i>) for a property X (<i>url</i> property in a Button) might make another property Y (<i>target</i>) not editable.</p>

            <p>Now there is also contextual help, re-using ant design components.</p>


            <div className={styles['img-wrapper']}>
                <Image
                    className={styles.img}
                    src='src\assets\image_d07.png'
                    style={{ borderRadius: '10px' }}
                    preview={false}
                />

            </div>
        </>
    },
    {
        date: '2024-01-27',
        title: 'Craftify - 8 - keyboard shortcuts',
        summary: '',
        keywords: [' Craftify ⭐'],
        content: <>


            <ul>
                <li>Properties are grouped by topic into collapsable / expandable containers</li>
                <li><i>Delete component</i> feature available; also as keyboard shortcut!
                    <ul>
                        <li><b>Note:</b> these things might seem like nothing (and they are), but the logic behind is quite interesting (and almost messy), including tracking onKeyUp and onKeyDown events of several keys; of course it also makes the user's life easier</li>
                        <li><b>Update: </b> shortcut (temporarily?) removed, since every time you press <i>Delete</i> key, you might remove a component or edit some of its text properties where the cursor was 😩</li>
                    </ul>
                </li>
                <li>Selection of multiple components (with <i>Control</i> down)</li>
            </ul>


            <div className={styles['img-wrapper']}>
                <Image
                    className={styles.img}
                    src='src\assets\image_d08_1.png'
                    style={{ borderRadius: '10px' }}
                    preview={false}
                />
            </div>
            <div className={styles['img-wrapper']}>
                <Image
                    className={styles.img}
                    src='src\assets\image_d08_2.png'
                    style={{ borderRadius: '10px' }}
                    preview={false}
                />
            </div>
        </>
    },
    {
        date: '2024-02-03',
        title: 'Craftify - 9',
        summary: 'Features',
        keywords: [' Craftify ⭐'],
        content: <>
            <ul>
                <li>Removed constraint on canvas bottom side: components can be dragged further down ("outside of 100vh")</li>
                <li>Default y (top) when creating component is px ("anchor") instead of % (relative); copes better with previous change</li>
                <li>x (left) and width defaults on the other hand, changed to relative, to be more responsive and simple for the user</li>
                <li>fix: dragging showed "old size" when dragging after window was resized</li>
                <li>feature: center align horizontally</li>
                <li>feature: resizable components by dragging on the canvas</li>
            </ul>
        </>
    },
    {
        date: '2024-02-04',
        title: 'Craftify - 10 - px and % lengths',
        summary: '',
        keywords: [' Craftify ⭐'],
        content: <>

            <ul>
                <li>Added radio buttoms and numerical inputs to manage the component properties (length and unit)
                    <ul>
                        <li>Numerical inputs to manage component properties show 2 decimals max</li>
                        <li>If <i>px</i> set as unit, value is rounded to nearest pixel</li>
                    </ul>
                </li>
                <li>On unit (e.g. width) changed (e.g., from <i>px</i> to <i>%</i>), the length number is recalculated to preserve actual length (width) of component</li>
            </ul>

        </>
    },
    {
        date: '2024-02-10',
        title: 'Craftify - 11 - multiple component dragging & testing',
        summary: '',
        keywords: [' Craftify ⭐', 'Debugging'],
        content: <>
            <p>The functionality to drag multiple components simultaneously was added. Whicle dragging, both the new position and the original one are shown. The bounding rectangle is computed based on the dragged components, and the relative position of them then used for display purposes.</p>

            <p>Of course this new feature broke a couple of things, such as the <i>resize functionality</i>.</p>

            <p>And of course the resize functionality was then fixed ^^</p>

            <p>Finally, the possibility to select multiple components by dragging on the canvas was added. Until now, multiple selection was only possible via Control + click.</p>


            <div className={styles['img-wrapper']}>
                <Image
                    className={styles.img}
                    src='src\assets\image_d11.png'
                    style={{ borderRadius: '10px' }}
                />
                <p style={{ margin: '0', fontSize: 'small', fontStyle: 'italic', color: '#333' }}>click image to preview</p>
            </div>

            <p><b>Note on Testing</b></p>

            <p>The work done until now faced of course many bugs. SPo far the primary way to debug was using console logs (please, don't judge). But this new features required something more powerful, so some real debugging on vs code was done, with the following configuration script.</p>

            <pre>
                <code>{'{'}</code>
                <code>    {'"version": "0.2.0",'}</code>
                <code>    {'"configurations": ['}</code>
                <code>        {'{'}</code>
                <code>            {'"type": "chrome",'}</code>
                <code>            {'"request": "launch",'}</code>
                <code>            {'"name": "Launch Program",'}</code>
                <code>            {'"skipFiles": ['}</code>
                <code>                {'"<node_internals>/**"'}</code>
                <code>            {'],'}</code>
                <code>            {'"url": "http://localhost:5173",'}</code>
                <code>            {'"webRoot": "${workspaceFolder}"'}</code>
                <code>        {'}'}</code>
                <code>    {']'}</code>
                <code>{'}'}</code>
            </pre>

        </>
    },
    {
        date: '2024-02-18',
        title: 'Craftify - 12 - cleanup, refactoring',
        summary: 'Time for Cleanup and refactoring!',
        keywords: [' Craftify ⭐'],
        content: <>
            <p>After so many changes, logic became too 'entangled', and large files where most happens (i.e., <i>Designer.tsx</i>) are difficult to manage. They also have many issues (most TypeScript issues where Type definitions are missing, or code does not match the Types).</p>

            <p>And since the second time coded is always better than the first, here the mayor changes:</p>

            <ul>
                <li>logic refactored: from state variables that were passed down to child components, to a store, where each component can subscribe on need</li>
                <li>also actions are now directly defined in the store</li>
                <li>most TypeScript issues corrected</li>
            </ul>

            <p>This alllowed to go from 473 to  319 lines of code, and from around "(around) 45 problems in this file" to "14 problems in this file", which are relatively unimportant TypeScript complaints.</p>

            <p>As a side note, this cleaning tasks will still be needed as development evolves, and also in other file.</p>

        </>
    },
    {
        date: '2024-02-24',
        title: 'Craftify - 13 - components positioning',
        summary: '',
        keywords: [' Craftify ⭐'],
        content: <>
            <ul>
                <li>Wide variety of options to align multiple selected components:
                    <ul>
                        <li>top</li>
                        <li>left</li>
                        <li>right</li>
                        <li>distribute horizontally</li>
                        <li>... and more!</li>
                    </ul>
                </li>
                <li>On dragging in the canvas, components border is displayed to ease knowing if component will be selected on stop dragging
                    <ul>
                        <li>This could also be shown in real time while dragging, but it would make dragging computationally more expensive</li>
                    </ul>
                </li>
            </ul>


            <div className={styles['img-wrapper']}>
                <Image
                    className={styles.img}
                    src='src\assets\image_d13.png'
                    style={{ borderRadius: '10px' }}
                    preview={false}
                />
            </div>
        </>
    },
    {
        date: '2024-02-25',
        title: 'Craftify - 14 - mode improvements: preview & modelling',
        summary: '',
        keywords: [' Craftify ⭐'],
        content: <>
            <ul>
                <li>
                    Mode <i>preview</i> improved (borders removed, dragging to select disabled, etc.)
                </li>
                <li>
                    In <i>modelling</i> mode, added overlay to components so they are not interactable and cursor shows as 'draggable'
                </li>
            </ul>
        </>
    },
    {
        date: '2024-03-02',
        title: 'Craftify - 15 - edition of multiple properties',
        summary: '',
        keywords: [' Craftify ⭐'],
        content: <>
            <ul>
                <li>Confirm popup on "delete component(s)" clicked</li>
                <li>A property might be edited and changes will be applied to all selected components
                    <ul>
                        <li>Only properties common to all selected components are displayed</li>
                        <li>There is a 'safe' checkbox to let user know changes will be applied to all selected components</li>
                    </ul>
                </li>
            </ul>


            <div className={styles['img-wrapper']}>
                <Image
                    className={styles.img}
                    src='src\assets\image_d15.png'
                    style={{ borderRadius: '10px' }}
                    preview={false}
                />
            </div>
        </>
    },
    {
        date: '2024-03-10',
        title: 'Craftify - 16 - testing and GitHub Actions',
        summary: '',
        keywords: [' Craftify ⭐', 'Testing - Vitest', 'GitHub Actions', 'Pipelines'],
        content: <>
            <p>A first test was defined (using <a href='https://vitest.dev/' target='_blank'>Vitest</a>). It consists of verifying that shared properties across components share the same basic settings (e.g., the display name).</p>

            <p>A pipeline (GitHub action) workflow, triggered on every <i>git push</i> to <i>main</i> branch, was defined. It consists of:</p>

            <ul>
                <li>installs depedencies</li>
                <li>build the project</li>
                <li>run the tests</li>
                <li> check if there are TS issues (or currently it rather <i>confirms</i> that there are issues)</li>
            </ul>

            <p>The output seems like this:</p>

            <div className={styles['img-wrapper']}>
                <Image
                    className={styles.img}
                    src='src\assets\image_d16.png'
                    style={{ borderRadius: '10px' }}
                />
                <p style={{ margin: '0', fontSize: 'small', fontStyle: 'italic', color: '#333' }}>click image to preview</p>
            </div>
        </>
    },
    {
        date: '2024-03-16',
        title: 'Craftify - 17',
        summary: '',
        keywords: [' Craftify ⭐'],
        content: <>
            <ul>
                <li>fix - track scroll position changes continuously (especially before dragging to select components) and other issues</li>
                <li>improvement - canvas height automatically increases if component dragged near the bottom</li>
            </ul>
        </>
    },
    {
        date: '2024-03-23',
        title: 'Craftify - 18 - flex containers and some thoughts',
        summary: '',
        keywords: [' Craftify ⭐'],
        content: <>
            <ul>
                <li>Lockable canvas height: users can configure whether or not they want canvas height to automagically increase when component dragged near the bottom</li>
                <li>Many improvements regarding nesting of components and Flex Containers (via the new <i>path</i> property, which indicates the (nested?) component location)
                    <ul>
                        <li>Editing properties of nested components</li>
                        <li>Change position of nested components</li>
                        <li>Flex Container accepts components from component palette and from canvas</li>
                    </ul>
                </li>
            </ul>

            <p>There are still some limitations regarding flex containers, for example:</p>
            <ul>
                <li>nested components' size</li>
                <li>to-be-copied components cannot be dragged into the container</li>
                <li>nested components cannot be dragged back to the canvas</li>
                <li>flex only aligned vertically</li>
                <li>missing grid-like component</li>
            </ul>

            <p>Some of these might be dealt with later on, some others are actually intended (otherwise, the project would never end).</p>

            <p>There are also some bugs (see the <a href='https://github.com/franciscocgue/craftify/issues' target='_blank'>project issues</a> for details). For example, nested components cannot be deleted. Also, current development broke the fact that relative (%) and absolute (px) height are <i>equivalent</i>. Meaning, when a user changes a height from relative to absolute (or vice versa), the actual height of the component as seen on the screen remains, recalculating the new number. This now does not work for <i>height</i> and <i>top</i> properties.</p>
        </>
    },
    {
        date: '2024-03-24',
        title: 'Craftify - 19 - theme',
        summary: '',
        keywords: [' Craftify ⭐', 'Theme'],
        content: <>
            <p>Light theme added! ☀️</p>

            <p>We will need 2 theme settings however, one for the user designing on the <i>Designer</i>, the other for the end user. Maybe we can add a theme component too.</p>

            <div className={styles['img-wrapper']}>
                <Image
                    className={styles.img}
                    src='src\assets\image_d19.png'
                    style={{ borderRadius: '10px' }}
                />
                <p style={{ margin: '0', fontSize: 'small', fontStyle: 'italic', color: '#333' }}>click image to preview</p>
            </div>
        </>
    },
    {
        date: '2024-03-30',
        title: 'Craftify - 20 - logic!',
        summary: '',
        keywords: [' Craftify ⭐'],
        content: <>
            <p>Enough of UI, we need some logic!</p>

            <p>After quite enough thinking, comparing different alternatives, and trying to get some cool ideas out of ChatGPT, the logic will be node- (or blueprint-) based. This is a common approach followed out there, maybe for a reason. </p>

            <p>This does not mean, however, that we might later extend a little bit the logic with pretty cool things like <a href='https://codemirror.net:/' target='_blank'>CodeMirror</a>.</p>

            <p>For the nodes, <a href='https://reactflow.dev/' target='_blank'>React Flow</a> was picked. Bringing React Flow inside an Ant Design Drawer component, together with a copuple other changes, looks like this:</p>

            <div className={styles['img-wrapper']}>
                <Image
                    className={styles.img}
                    src='src\assets\image_d20.png'
                    style={{ borderRadius: '10px' }}
                />
                <p style={{ margin: '0', fontSize: 'small', fontStyle: 'italic', color: '#333' }}>click image to preview</p>
            </div>

            <p>For the interested reader, these other changes:</p>

            <ul>
                <li>A draggable component (dnd kit) is used for the left node (palette of functions), so it can be dragged on the canvas</li>
                <li>A dropped node will be positioned after considering its width and height (so it is centered on mouse), and zoom level of the React Flow canvas</li>
                <li>The Drawer has an 'expand' botton in case the node flows grow, so that it takes (as the time of writing) 90% of the viewport height
                    <ul>
                        <li>An actual gradual resizing on dragging would have been nice, but I lost patience when trying and went for the quick option =D</li>
                    </ul>
                </li>
            </ul>
        </>
    },
    {
        date: '2024-04-06',
        title: 'Craftify - 21 - custom logic nodes',
        summary: '',
        keywords: [' Craftify ⭐'],
        content: <>
            <p>Custom Nodes! (Even if the do nothing yet...). Also, the logic canvas state (namely the nodes and the edges - connection between nodes- is saved on the store, for each component).</p>

            <div className={styles['img-wrapper']}>
                <Image
                    className={styles.img}
                    src='src\assets\image_d21.png'
                    style={{ borderRadius: '10px' }}
                />
                <p style={{ margin: '0', fontSize: 'small', fontStyle: 'italic', color: '#333' }}>click image to preview</p>
            </div>
        </>
    },
    {
        date: '2024-04-12',
        title: 'Craftify - 22',
        summary: 'Working logic',
        keywords: [' Craftify ⭐'],
        content: <>
            <p>Custom Nodes can now save their inner status or data. A trigger node can save the trigger type (e.g., <i>onClick</i>), and a popup or toast node can save the message to show. This nodes are however not yet translated into executable code on the component side. Meaning, onClick will still do nothing.</p>

            <div className={styles['img-wrapper']}>
                <Image
                    className={styles.img}
                    src='src\assets\image_d22.png'
                    style={{ borderRadius: '10px' }}
                />
                <p style={{ margin: '0', fontSize: 'small', fontStyle: 'italic', color: '#333' }}>click image to preview</p>
            </div>
        </>
    },
    {
        date: '2024-04-14',
        title: 'Craftify - 23',
        summary: 'Working logic',
        keywords: [' Craftify ⭐'],
        content: <>
            <p>Well, enough of flow <i>does nothing</i>!</p>

            <p>Using the feature that nodes now save their data, extra parameters were added (e.g., message type: info, success, error, etc. on Message node), and new nodes where created (e.g., Delay node).</p>

            <p>Also some logic functions were created, which help on the execution of the nodes. These use a node configuration which contains all the magic (parameters required, functions, etc.).</p>

            <p>The flow below is likely not the most exiting logic ever seen, but... <i>it works!!</i> To trigger it, the user has to click the button on the canvas (in preview mode)!!</p>


            <div className={styles['img-wrapper']}>
                <Image
                    // width={350}
                    src='src\assets\image_d23.png'
                    // style={{ borderRadius: '10px', width:'100%' }}
                    className={styles.img}
                />
                <p style={{ margin: '0', fontSize: 'small', fontStyle: 'italic', color: '#333' }}>click image to preview</p>
            </div>
        </>
    },
    {
        date: '2024-04-18',
        title: 'Craftify - 24',
        summary: 'Canvas height management... & preview',
        keywords: [' Craftify ⭐'],
        content: <>
            <p>One of those (many) things that seem unimportant and have no image to go with, but improve the overall experience: better canvas height management.</p>
            <p>Height management was a bit cumbersome due to the cumulative complexity: lockable canvas height vs automatic height increase on component dragged near the bottom, automatic internal height managemenbt when the browser windwo is resized, etc. One problem was, if the window is rezized towards a smaller height, the canvas would add a scrollbar, since the previous, larger height is kept. This usually meant empty scroll area near the bottom. Now, when this happens (resizing from bigger to smaller), a check is done to find the component with maximum height and <i>absolutely positioned</i> (relative positioned elements are not important, since they will resize back to fit in the smaller windwo accordingle (given that height {'<'} 100%)). </p>

            <p>Well, now let's see how many bugs did playing with the canvas size braught!</p>

            <p> Oh, almost forgot, now we have a (almost-) fullscreen preview, to let the user see how the final application really should look like. (Nevermind about the toolbar...)</p>
        </>
    },
]

export default entries;